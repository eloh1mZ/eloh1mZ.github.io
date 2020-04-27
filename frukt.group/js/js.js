let inputs = document.querySelectorAll('input[type="text"]')
for (let i = 0; i < inputs.length; i++) {
	inputs[i].onfocus = () => {
		inputs[i].parentElement.style.color = "#3F2EB3"
	}
	inputs[i].onblur = () => {
		inputs[i].parentElement.style.color = "inherit"
	}
}

const menuList = document.getElementById("menuList")
const showMenuList = el => {
	el.classList.toggle("active")
	menuList.classList.toggle("active")
}
String.prototype.replaceAll = function(search, replacement) {
	let target = this;
	return this.replace(new RegExp(search, 'g'), replacement);
};

document.querySelector(".call a").setAttribute("href", "tel:" + document.querySelector(".call a b").innerText.replaceAll(" ", "-").replace("(", "").replace(")", ""))

let opened, elem
const openDetails = el => {
	if (window.innerWidth < 992) {
		if (opened && opened != el) {
			opened.querySelector("h3 span").innerText = "▼"
			opened.querySelector(".drop-down__menu").style.display = "none"

			el.querySelector("h3 span").innerText = "▲"
			opened = el
			el.querySelector(".drop-down__menu").style.display = "block"
		} else if (opened == el) {
			opened.querySelector("h3 span").innerText = "▼"
			opened.querySelector(".drop-down__menu").style.display = "none"
			opened = undefined
		} else {
			el.querySelector("h3 span").innerText = "▲"
			opened = el
			el.querySelector(".drop-down__menu").style.display = "block"
		}
	}
}