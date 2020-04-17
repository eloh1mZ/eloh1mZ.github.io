
class App {

	constructor(name, img, mainHTML, func, application = '') {
		this.appsId
		this.application = application
		this.name = name
		this.id = this.application.split('.')[0]
		this.isOpened = false
		this.el
		this.header
		this.mainHTML = mainHTML
		this.controls = {}
		this.img = img
		this.pos = {
			x: 0,
			y: 0
		}
		this.func = func
	}

	create() {
		let element = document.createElement("div")
		element.classList.add(this.id)
		element.classList.add("app")
		element.setAttribute("tabindex", 0)

		let header = document.createElement("header")
		header.classList.add("row")

		let headerLogo = document.createElement("div")
		headerLogo.classList.add("header__logo")
		headerLogo.classList.add("row")

		let image = document.createElement('img')
		image.setAttribute('src', this.img)
		headerLogo.appendChild(image)

		let logo = document.createElement('div')
		this.name ? logo.innerHTML = this.name +'&nbsp;—&nbsp;'+ this.application : logo.innerHTML = this.application
		headerLogo.appendChild(logo)


		let controls = document.createElement("div")
		controls.classList.add("controls")
		controls.classList.add("row")

		let minBtn = document.createElement("button")
		minBtn.classList.add("minimize")
		minBtn.innerText = "—"

		let closeBtn = document.createElement("button")
		closeBtn.classList.add("close")
		closeBtn.innerHTML = "&times;"


		let maxBtn = document.createElement("button")
		maxBtn.classList.add("maximize")
		maxBtn.classList.add("row")
		maxBtn.setAttribute('app', this.name)
		maxBtn.innerHTML = headerLogo.innerHTML



		controls.appendChild(minBtn)
		controls.appendChild(closeBtn)
		document.getElementById('panel').appendChild(maxBtn)


		let main = document.createElement("main")
		main.innerHTML = this.mainHTML

		this.header = header

		header.appendChild(headerLogo)
		header.appendChild(controls)
		element.appendChild(header)
		element.appendChild(main)

		document.body.appendChild(element)

		this.el = element

		this.controls = {
			min: minBtn,
			max: maxBtn,
			close: closeBtn
		}

		this.appsId= apps.length
		this.isOpened = true

		this.pos = {
			x: Math.round((window.innerWidth - getCoords(this.el).width - 30) / 2),
			y: Math.round((window.innerHeight - getCoords(this.el).height - 30) / 2)
		}

		if (window.innerWidth > getCoords(this.el).width ) {
			this.el.style.top = `${this.pos.y}px`
			this.el.style.left = `${this.pos.x}px`
		} else {
			this.el.style.top = 0
			this.el.style.left = 0
		}

		apps.push(this)
		this.func()


		if (!element.classList.contains("minimized")) {
			maxBtn.style.backgroundColor = "rgba(255,255,255,0.75)"
			element.focus()
		} else {
			maxBtn.style.backgroundColor = "rgba(255,255,255,0)"
		}


		return this
	}

	close(app) {
		app.el.style.transform = "scale(0)"
		app.controls.max.style.transform = "scaleX(0)"
		setTimeout(()=>{ app.el.style.display = "none"; app.controls.max.style.display = "none"}, 250)
		setTimeout(()=>{ app.el.remove(); app.controls.max.remove(); apps = apps.splice(1, app.appsId); app.isOpened = false}, 500)
		window.location.hash = "" 
	}
	minimize(app) {
		app.el.classList.add("minimized")
		app.controls.max.style.backgroundColor = "rgba(255,255,255,0)"
		app.el.classList.remove('focused')
	}
	maximize(app) {
		app.el.classList.toggle("minimized")
		if (!app.el.classList.contains("minimized")) {
			app.controls.max.style.backgroundColor = "rgba(255,255,255,0.75)"
		} else {
			app.controls.max.style.backgroundColor = "rgba(255,255,255,0)"
		}
	}

	show() {
		if (this.isOpened) {
			this.maximize(this)
		} else {
			this.create().statusChanger()
			if (window.innerWidth > getCoords(this.el).width * 1.25) {
				this.drag()
			}
		}
	}

	statusChanger() {
		if (this.isOpened) {
			this.controls.min.onclick = () => {this.minimize(this)}
			this.controls.max.onclick = () => {this.maximize(this)}
			this.controls.close.onclick = () => {this.close(this)}
		}
		return this
	}

	drag() {
		this.header.onmousedown = e => {

			let coords = getCoords(this.el);
			let shiftX = e.pageX - coords.left;
			let shiftY = e.pageY - coords.top;

			this.el.style.position = 'absolute';
			this.el.style.transition = '0s'

			const moveAt = e => {
				this.pos = {
					x: e.pageX - shiftX,
					y: e.pageY - shiftY
				}
				this.el.style.left = this.pos.x + 'px';
				this.el.style.top = this.pos.y + 'px';
			}

			moveAt(e);

			document.onmousemove = e => {
				moveAt(e);
			};

			this.el.onmouseup = () => {
				document.onmousemove = null;
				this.el.onmouseup = null;
				this.el.style.transition = '0.25s'
			};
		}
		return this
	}
}