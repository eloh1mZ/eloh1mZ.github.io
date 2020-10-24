document.addEventListener("scroll", e => {
	if (window.scrollY < 10) {
		document.querySelector("header").style.backgroundColor = "transparent"
	} else {
		document.querySelector("header").style.backgroundColor = "#212121"
	}
})

let i = 0
let codes = ["геночкапомилуй", "utyjxrfgjvbkeq"]
document.addEventListener("keyup", e => {
	if (e.key.toLowerCase == codes[0][i] || e.key.toLowerCase == codes[1][i]) {
		i++
	} else {
		i = 0
	}
	if (i == codes[0].length) {
		i = 0
		showGeno4ka()
	}
})

function showGeno4ka() {
	const geno4ka = document.getElementById("geno4ka")
	geno4ka.style.left = "0";
	setTimeout(() => {
		geno4ka.style.left = "-50%";
	}, 2000)
}

const linkNav = document.querySelectorAll('[href^="#"]'),
    V = .25;
for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) {
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}