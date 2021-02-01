const outputElementForRequest = document.querySelector("#output")
function minmax(v, min, max) {
    if (v < min) { return min }
    if (v > max) { return max }
    return v
}
function dist2(a, b) {
    return (a.x + b.x) * (a.x - b.x) + (a.z - b.z) * (a.z - b.z)
}
let colors = {}
function applyTheme(el) {
    let colorsList = ["red", "green", "blue", "yellow", "gray", "bg", "text", "tint", "purple"]
    colorsList.forEach(c => {
        colors[c] = window.getComputedStyle(el).getPropertyValue('--'+c)
    })
    if (map) {map.redraw()}
}
function switchTheme() {
    let el = document.querySelector(".page")
    el.classList.toggle("dark")
    applyTheme(el)
    if (localStorage.getItem("darkTheme") == "true") {
        localStorage.setItem("darkTheme", "fale")
    } else {
        localStorage.setItem("darkTheme", "true")
    }
}
function wrapText(context, text, x, y, maxWidth, lineHeight) {
    let words = text.split(' ');
    let line = '';
    let lineCount = 1

    for(let n = 0; n < words.length; n++) {
        let testLine = line + words[n];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n];
            y += lineHeight;
            lineCount++
        }
        else {
            line = testLine;
        }
    }
    context.fillText(line, x, y + (lineCount == 1 ? lineHeight / 4 : 0));
}
function isOther(type) {
    let types = ["city", "town", "base", "end"]
    return !types.includes(type)
}
function updateSpoiler(el) {
	let btn = el
	let content = btn.nextElementSibling
	if (btn.classList.contains('spoiler__btn--opened')) {
		btn.classList.remove("spoiler__btn--opened")
		content.style.height = "0"
	} else {
		btn.classList.remove("spoiler__btn--opened")
		btn.classList.add('spoiler__btn--opened');
		content.style.height = content.scrollHeight + 'px';
	}
}
function copy(text) {
    outputElementForRequest.value = text
    outputElementForRequest.select()
    document.execCommand('copy')
}
function updatePopup(selector) {
    document.querySelector(selector).classList.toggle(selector.slice(1) + "--opened")
}
function _url() {
    if (map && info) {
        let x = map.pos.x, y = map.pos.y, z = map.pos.z
        let tmp = `${Math.round(x)};${Math.round(y * 100) / 100};${Math.round(z)}`
        if (info.target.length) {
            tmp += `;${info.target}`
        }
        location.hash = tmp
    }
}
const create = tag => document.createElement(tag)