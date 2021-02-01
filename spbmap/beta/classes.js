class Request {
    constructor(url) {
        this.url = url
       
        this.el = document.createElement("script")
		this.el.src = this.url
		this.el.async = "true"
		document.body.appendChild(this.el)
    }
}
class Dot {
    constructor(ctx, pos, type, color, title, mode) {
        this.ctx = ctx
        
        this.title = title
        this.mode = mode

        this.size = typeSizes[type]
        this.fontSize = 0.15 * this.size

        this.pos = pos
        this.center = {
            x: this.pos.x - this.size / 2,
            z: this.pos.z - this.size / 2
        }

        this.color = color
    }
    draw(obj) {
        if (obj.showAreas || obj.scale < obj.buildingsBound) {
            this.ctx.fillStyle = colors[this.color] + "20"
            this.ctx.fillRect(this.center.x, this.center.z, this.size, this.size)
        }
        if (this.title && this.title.length && obj.scale < 1.5) {
            this.ctx.font = `${this.fontSize}px sans-serif`
            this.ctx.fillStyle = colors.text
            this.ctx.textAlign = "center"
            wrapText(this.ctx, this.title, this.pos.x, this.pos.z, this.diameter * .7, this.fontSize)
        }
    }
    isHover() {
        return
    }
}
let typeSizes = {
    "base": 400,
    "end": 125,
    "town": 400,
    "other": 175,
    "city": 600,
    "hub": 750
}
class Building {
    constructor(ctx, b, id) {
        this.ctx = ctx
        
        this.vertex = b.vertex
        this.center = b.center
        this.diameter = b.diameter
        this.area = b.area
        this.id = id
        this.type = b.type
        this.title = b.title
        this.fontSize = Math.ceil(this.diameter / 6)
        this.fontSize = minmax(this.fontSize, 8, this.fontSize)
        this.mode = b.mode

        this.color = b.color
    }
    draw(obj) {
        
        this.ctx.beginPath()
        this.ctx.moveTo(this.vertex[0][0], this.vertex[0][1])
        this.vertex.forEach(v => {
            this.ctx.lineTo(v[0], v[1])
        })
        this.ctx.closePath()
        if (obj.isHover || obj.hover) {
            this.ctx.fillStyle = colors[this.color] || this.color
            this.ctx.fill()
        }
        this.ctx.lineWidth = 4
        this.ctx.strokeStyle = colors[this.color] || this.color
        this.ctx.stroke()

        this.ctx.font = `${this.fontSize}px sans-serif`
        this.ctx.fillStyle = colors.text
        this.ctx.textAlign = "center"
        wrapText(this.ctx, this.title, this.center[0], this.center[1], this.diameter * .7, this.fontSize)
    }
    isHover(mouse) {
        let x = mouse.x, y = mouse.z
        
        let inside = false
        let vs = this.vertex
        for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
            let xi = vs[i][0], yi = vs[i][1]
            let xj = vs[j][0], yj = vs[j][1]
            
            let intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
                if (intersect) inside = !inside
        }

        return inside
    }
    filterUpdate(type) {
        if (filter) {}
    }
}
class Info {
    constructor(selector) {
        this.el = document.querySelector(selector)
        this.list = {}
        this.target = ""
        this._btn()
        this._loading()
        this._fields({
            title: "h2",
            mayor: "p",
            isTown: "p",
            closed: "p",
            coords: "div",
            event: "div",
            description: "div",
            residents: "ul"
        })
        
    }
    show(id) {
        // location.hash = id
        this.el.classList.add("info--opened")
        if (!this.list[id]) {
            let r = new Request(`data/info/${id}.js`)
            this.loading.hidden = false
            r.el.onload = e => {
                this.list[id] = JSON.parse(outputElementForRequest.value)
                if (this.list[id].type == "town") {
                    this.list[id].isTown = "Менее пяти жителей"
                }
                this.loading.hidden = true
                this._show(id)
                _url()
            }
        } else {
            this._show(id)
            _url()
        }
    }
    _show(id) {
        this.target = id
        
        Object.keys(this.fields).forEach(k => {
            const field = this.fields[k]
            const dot = this.list[id]
            let data = dot[k]
            field.hidden = true

            if (k == "coords") {
                data = {}
                if (dot.nether) { data.nether = dot.nether }
                if (dot.overworld) { data.overworld = dot.overworld }
                if (!dot.nether && !dot.overworld ) { data = undefined }
            }
            let custom
            if (dot.custom && dot.custom[k]) {
                custom = dot.custom[k]
            }

            if (data) {
                field.hidden = false
                let tmp = data
                if (k == "residents") {
                    tmp = `<h3 class="title">` + ((dot.custom && dot.custom[k]) ? dot.custom[k] : "Жители") + "</h3>"
                    data.forEach(r => {
                        tmp += `<li class="residents__item">${r}</li>`
                    })
                } else if (k == "closed") {
                    tmp = "Вход воспрещен"
                } else if (k == "event") {
                    tmp = "<p>"
                    tmp += `<p class="gray">${data.title}</p>`
                    tmp += `<p class="gray">${data.date}</p>`
                    tmp += "</p>"
                } if (k == "coords") {
                    tmp = `<h3 class="title">Координаты</h3>`
                    if (data.nether) { tmp += this._getCoords(data.nether, "Ад", dot.branch) }
                    if (data.overworld) { tmp += this._getCoords(data.overworld, "Обычный мир", "gray") }
                } if (k == "mayor") {
                    if (dot.type == "base") {
                        field.hidden = true
                    } else if (custom) {
                        tmp = custom + tmp
                    } else if (isOther(dot.type) || dot.type == "end") {
                        tmp = "Владелец: " + tmp
                    } else if (dot.type == "town" || dot.type == "city") {
                        tmp = "Мэр: " +tmp
                    }
                } if (k == "description") {
                    if (dot.residents && dot.residents.length && data.length > 100) {
                        tmp = `<div class="api__item spoiler"><button class="spoiler__btn" onclick="updateSpoiler(this)">${custom || "Описание"}</button><main class="spoiler__content"><p class="dot__description">${data}</p></main></div>`
                    }
                }
                field.innerHTML = tmp
            }
        })
    }
    _fields(fieldsList) {
        this.fields = {}
        Object.keys(fieldsList).forEach(k => {
            let el = create(fieldsList[k])
            el.innerText = k
            el.classList.add("info__"+k)
            el.classList.add("info__field")

            this.el.appendChild(el)
            this.fields[k] = el
        })
    }
    _getCoords(coords, type, color) {
        return `<p class="coords__item">${type} — <span class="${color}">${coords.x}&nbsp;${coords.y  || ""}&nbsp;${coords.z}</span></p>`
    }
    _btn() {
        let btn = create("button")
        btn.innerHTML = "&times;"
        btn.onclick = e => {
            this.el.classList.remove("info--opened")
            this.target = ""
            _url()
        }
        btn.classList.add("info__btn")
        this.el.appendChild(btn)
    }
    _loading() {
        let el = create("div")

        let dots = ""
        let k = 10e2
        let n = 12
        for (let i = 0; i < n; i++) {
            let angle = (6.28 * i/n) % 6.28
            dots += `<div class="loader__dot" style="--x: ${
                Math.round(Math.cos(angle) * k) / k
            };--y: ${
                Math.round(Math.sin(angle) * k) / k
            };--color: var(--${["red", "green", "blue", "yellow"][i%4]})"></div>`
        }

        el.innerHTML = `<div class="loader">${dots}</div>`
        el.classList.add("info__loading")
        this.loading = el
        this.el.appendChild(el)
    }
}
const PI = Math.PI
class Map {
    constructor(selector, pos={x:0,z:0,y:1}) {
        this.el = document.querySelector(selector)
        this.ctx = this.el.getContext("2d")
        this.width = this.el.offsetWidth
        this.height = this.el.offsetHeight

        this.pos = pos

        this.el.addEventListener("pointermove", e => this.moveEventHandler(e, this))
        this.el.addEventListener("pointerdown", e => this.downEventHandler(e, this))
        this.el.addEventListener("pointerup", e => this.upEventHandler(e, this))
        this.el.addEventListener("pointerout", e => this.upEventHandler(e, this))
        this.el.addEventListener("wheel", e => this.wheelHandler(e, this))
        this.el.addEventListener("click", e => this.clickHandler(e, this))

        this.drawing = []

        this.mouse = {}

        this.scaleMinMax = {min: .01, max: 5}

        this.settings = {
            showAreas: 0,
            mode: "overworld",
            posOutput: document.querySelector(".mousepos"),
            targetOutput: document.querySelector(".mousetarget"),
            buildingsBound: .03,
            scaleSensitivity: 3
        }

        this.fingers = []
        this.isNotZoom = true
        this.prevDiff = 0

        this._viewBox()
    }
    resize(width, height) {
        this.width = width
        this.height = height
        this._updateSize()
        this._viewBox()
        return this
    }
    _updateSize() {
        this.el.width = this.width
        this.el.height = this.height
        this.el.style = `width:${this.width}; height:${this.height}`
        
        this.ctx.translate(this.width / 2, this.height / 2)
        return this
    }
    move(x, z) {
        this.ctx.translate(-this.pos.x, -this.pos.z)
        
        this.pos.x += x
        this.pos.z += z
        
        this.ctx.translate(this.pos.x, this.pos.z)
        this.redraw()
        return this
    }
    scale(n) {
        this.ctx.translate(-this.pos.x, -this.pos.z)
        this.ctx.scale(1 / this.pos.y, 1 / this.pos.y)

        this.pos.y += n
        this.pos.y = minmax(this.pos.y, this.scaleMinMax.min, this.scaleMinMax.max)
        
        this.ctx.scale(this.pos.y, this.pos.y)
        this.ctx.translate(this.pos.x, this.pos.z)
        this.redraw()
        return this
    }
    moveEventHandler(e, self) {
        self._mouse(e)

        for (let i = 0; i < self.fingers.length; i++) {
			if (e.pointerId === self.fingers[i].pointerId) {self.fingers[i] = e}
		}

        if (self.fingers.length == 1 &&  self.isNotZoom) {
            self.move(
                (e.clientX - self.mouseDownPos.x) / self.pos.y,
                (e.clientY - self.mouseDownPos.y) / self.pos.y
            )
            self.mouseDownPos.x = e.clientX
            self.mouseDownPos.y = e.clientY
        } else if (self.fingers.length == 2) {
            self.isNotZoom = false
			const curDiff = Math.abs(
				self.fingers[0].clientY - self.fingers[1].clientY
			)
			if (self.prevDiff > 0) {
                self.scale((curDiff - self.prevDiff) / (self.settings.scaleSensitivity * 100))
            }
			self.prevDiff = curDiff;
        } else {
            self.redraw()
        }
        return self
    }
    downEventHandler(e, self) {
        self.fingers.push(e)
	    self.isNotZoom = true;
        self.mouseDownPos = {x: e.clientX, y: e.clientY}
        self.el.style.cursor = "move"
        return self
    }
    upEventHandler(e, self) {
        for (let i = 0; i < self.fingers.length; i++) {
			if (e.pointerId === self.fingers[i].pointerId) {self.fingers.splice(i, 1)}
        }
        self.el.style.cursor = "default"
		if (self.fingers.length < 1) {
			self.el.onpointermove = null
			self.el.onpointerup = null
			self.prevDiff = 0
		}
        return self
    }
    wheelHandler(e, self) {
        self._mouse(e)
        let force = .15 * self.pos.y
        let delta = e.deltaY || e.detail || e.wheelDelta
        self.scale(delta < 0 ? force : -force, e)
        return self
    }
    clickHandler(e, self) {
        if (self.info && self.mouse.target) {
            self.info.show(self.mouse.target)
        }
        return self
    }
    redraw() {
        this._viewBox()
        this.clearRect(this.viewBox)
        
        this._drawing()
        
        this.mouse.target = undefined
        this.drawing.forEach(d => {
            let isHover = d.isHover(this.mouse)
            if (isHover) { this.mouse.target = d.id }
            d.draw({
                isHover,
                showAreas: this.settings.showAreas,
                scale: this.pos.y,
                buildingsBound: this.settings.buildingsBound
            })
        })
        this._drawMousePos()
        return this
    }
    
    _mouse(e) {
        this.mouse.x = this.viewBox.x + this.viewBox.w * e.clientX / this.width
        this.mouse.z = this.viewBox.y + this.viewBox.h * e.clientY / this.height
        return this
    }
    _drawing() {
        this.drawing = []
        if (this.buildings) { this._buildings() }
        if (this.dots) { this._dots() }
        return this
    }

    _viewBox() {
        this.viewBox = {
            x: -this.width / (2 * this.pos.y) - this.pos.x,
            y: -this.height / (2 * this.pos.y) - this.pos.z,
            w: this.width / this.pos.y,
            h: this.height / this.pos.y
        }
        return this
    }
    setInfo(info) {
        this.info = info
        return this
    }
    clearRect({x, y, w, h}) {
        this.ctx.fillStyle = colors.bg
        this.ctx.fillRect(x, y, w, h)
        return this
    }
    drawRoad(from, to, size, color) {
        this.ctx.strokeStyle = colors[color]
        this.ctx.lineWidth = size

        this.ctx.beginPath()
        this.ctx.moveTo(from.x, from.z)
        this.ctx.lineTo(to.x, to.z)
        this.ctx.closePath()
        
        this.ctx.stroke()
        return this
    }
    _drawMousePos() {
        // this.settings.posOutput.innerText = this.mouse.x ? `${
        //     Math.round(this.mouse.x / (this.settings.mode == "nether" ? 8 : 1))
        // } ${
        //     Math.round(this.mouse.z / (this.settings.mode == "nether" ? 8 : 1))
        // }` : ""
        this.settings.posOutput.innerText = this.fingers.length
        this.settings.targetOutput.innerText = this.mouse.target ? buildings[this.mouse.target].title : ""
        return this
    }
    setDots(dots) {
        this.dots = {}
        Object.keys(dots).forEach(k => {
            const d = dots[k]
            this.dots[k] = new Dot(this.ctx, {x: d.x, z: d.z}, d.type, d.branch, d.name, d.mode)
        })
        return this
    }
    setBuildings(buildings) {
        this.buildings = []
        Object.keys(buildings).forEach(k => {
            const b = buildings[k]
            this.buildings.push(new Building(this.ctx, b, k))
        })
        return this
    }
    setPosition(x, z, y) {
        this.scale(y - this.pos.y)
        this.move(x - this.pos.x, z - this.pos.z)
        return this
    }
    changeSettings(el, key) {
        if (key == "mode") {
            this.settings[key] = this.settings[key] == "nether" ? "overworld" : "nether"
        } else {
            this.settings[key] = el.checked
        }
        this.redraw()
    }
    show(id) {
        this.setPosition(
            -buildings[id].center[0],
            -buildings[id].center[1],
            1.5
        )
        if (this.info) {
            this.info.show(id)
        }
        return this
    }
    _buildings() {
        this.buildings.forEach(b => {
            for (let i = -1; i < b.vertex.length; i++) {
                const v = i != -1 ? b.vertex[i] : b.center;
                const x = v[0]
                const z = v[1]
                if (
                    (b.area * this.pos.y > 2) && (b.mode.includes(this.settings.mode)) &&
                    (x > this.viewBox.x && x < this.viewBox.x + this.viewBox.w) &&
                    (z > this.viewBox.y && z < this.viewBox.y + this.viewBox.h)
                ) {
                    this.drawing.push(b)
                    return
                }
            }
        })
    }
    _dots() {
        Object.keys(this.dots).forEach(k => {
            const d = this.dots[k]
            const x = d.pos.x
            const z = d.pos.z
            const y = d.size
            if (
                (d.mode.includes(this.settings.mode)) && (d.size * this.pos.y > 5) &&
                (x > this.viewBox.x - y && x < this.viewBox.x + this.viewBox.w + y) &&
                (z > this.viewBox.y - y && z < this.viewBox.y + this.viewBox.h + y)
            ) {
                this.drawing.push(d)
            }
        })
    }
}