apps = []

let HTML, Func, focused

const getCoords = elem => {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,

		width: box.width,
		height: box.height
	};

}


const clickToElement = (el) => {
	coords = getCoords(el)
	document.onclick = e => {
		if (e.clientX >= coords.left && e.clientX <= coords.left + coords.width &&
			e.clientY >= coords.top && e.clientY <= coords.top + coords.height) {
			return true
		}
	}
} 