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
	if (e.key.toLowerCase() == codes[0][i] || e.key.toLowerCase() == codes[1][i]) {
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
	geno4ka.style.left = "0vw";
    geno4ka.style.opacity = "1"
	setTimeout(() => {
		geno4ka.style.left = "-50vw";
        setTimeout(() => {
            geno4ka.style.opacity = "0"
        }, 2000)
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


// Lazy load
!function(e,t){"use strict";var r,a,o={rootMargin:"256px 0px",threshold:.01,lazyImage:'img[loading="lazy"]',lazyIframe:'iframe[loading="lazy"]'},n={loading:"loading"in HTMLImageElement.prototype&&"loading"in HTMLIFrameElement.prototype,scrolling:"onscroll"in window};function i(e){var t,r,a=[];"picture"===e.parentNode.tagName.toLowerCase()&&(t=e.parentNode,(r=t.querySelector("source[data-lazy-remove]"))&&t.removeChild(r),a=Array.prototype.slice.call(e.parentNode.querySelectorAll("source"))),a.push(e),a.forEach((function(e){e.hasAttribute("data-lazy-srcset")&&(e.setAttribute("srcset",e.getAttribute("data-lazy-srcset")),e.removeAttribute("data-lazy-srcset"))})),e.setAttribute("src",e.getAttribute("data-lazy-src")),e.removeAttribute("data-lazy-src")}function c(e){var t=document.createElement("div");for(t.innerHTML=function(e){var t=e.textContent||e.innerHTML,a="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 "+((t.match(/width=['"](\d+)['"]/)||!1)[1]||1)+" "+((t.match(/height=['"](\d+)['"]/)||!1)[1]||1)+"%27%3E%3C/svg%3E";return!n.loading&&n.scrolling&&(void 0===r?t=t.replace(/(?:\r\n|\r|\n|\t| )src=/g,' lazyload="1" src='):("picture"===e.parentNode.tagName.toLowerCase()&&(t='<source srcset="'+a+'" data-lazy-remove="true"></source>'+t),t=t.replace(/(?:\r\n|\r|\n|\t| )srcset=/g," data-lazy-srcset=").replace(/(?:\r\n|\r|\n|\t| )src=/g,' src="'+a+'" data-lazy-src='))),t}(e);t.firstChild;)n.loading||!n.scrolling||void 0===r||!t.firstChild.tagName||"img"!==t.firstChild.tagName.toLowerCase()&&"iframe"!==t.firstChild.tagName.toLowerCase()||r.observe(t.firstChild),e.parentNode.insertBefore(t.firstChild,e);e.parentNode.removeChild(e)}function d(){document.querySelectorAll("noscript."+e).forEach(c),void 0!==window.matchMedia&&window.matchMedia("print").addListener((function(e){e.matches&&document.querySelectorAll(o.lazyImage+"[data-lazy-src],"+o.lazyIframe+"[data-lazy-src]").forEach((function(e){i(e)}))}))}"undefined"!=typeof NodeList&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"IntersectionObserver"in window&&(r=new IntersectionObserver((function(e,t){e.forEach((function(e){if(0!==e.intersectionRatio){var r=e.target;t.unobserve(r),i(r)}}))}),o)),a="requestAnimationFrame"in window?window.requestAnimationFrame:function(e){e()},/comp|inter/.test(document.readyState)?a(d):"addEventListener"in document?document.addEventListener("DOMContentLoaded",(function(){a(d)})):document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&d()}))}("loading-lazy");