$(document).ready(function(){
	$('.tours__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<button class="slider__prev"><svg viewBox="0 0 14 18"><polyline points="2,2 2,16 12,9, 2,2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button class="slider__next"><svg viewBox="0 0 14 18"><polyline points="2,2 2,16 12,9, 2,2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		responsive: [
			{
				breakpoint: 625,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	});
	$('.astronauts__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		verticalSwiping: true,
		vertical: true,
		adaptiveHeight: true,
		prevArrow: '<button class="slider__prev"><svg viewBox="0 0 14 18"><polyline points="2,2 2,16 12,9, 2,2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button class="slider__next"><svg viewBox="0 0 14 18"><polyline points="2,2 2,16 12,9, 2,2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					verticalSwiping: false,
					vertical: false,
					adaptiveHeight: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true
				}
			}
		]
	});
	$('.astronaut__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slider__prev"><svg viewBox="0 0 14 18"><polyline points="2,2 2,16 12,9, 2,2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button class="slider__next"><svg viewBox="0 0 14 18"><polyline points="2,2 2,16 12,9, 2,2" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
	});

	$('.menu-btn').on('click', function(e) {
		$(this).toggleClass('active');
		$('.menu__list').toggleClass('active');
	});
});

// Smooth scroll
for(var linkNav=document.querySelectorAll('[href^="#"]'),V=.25,i=0;i<linkNav.length;i++)linkNav[i].addEventListener("click",function(e){e.preventDefault();var r=window.pageYOffset,l=this.href.replace(/[^#]*(.*)/,"$1");t=document.querySelector(l).getBoundingClientRect().top,start=null,requestAnimationFrame(function e(n){null===start&&(start=n);var a=n-start,i=t<0?Math.max(r-a/V,r+t):Math.min(r+a/V,r+t);window.scrollTo(0,i);i!=r+t?requestAnimationFrame(e):location.hash=l})},!1);