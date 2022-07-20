@@include("./lib/jquery.fancybox.min.js")
@@include("./lib/wpcf7.js")  
/*end of inludes*/


$(document).ready(function () {
	var ww = window.innerWidth;
	$(window).on("wl_resize", function (event, ww) {
		console.log("some_code");
	});
	$(window).on("wl_resize", function (t, e) {
		$(".menu-main .sub-menu").stop().slideUp("fast"),
			1279 < e ? $(".menu-main").show() : $(".menu-main").hide(),
			$(".burger").removeClass("burger_active")
	}),
		$(".menu-item-has-children>a").click(function (t) {
			1280 < ww || (t.preventDefault(),
				$(this).parent().find(".sub-menu").slideToggle({
					start: function () {
						"block" === $(this).css("display") && $(this).css("display", "flex"),
							"flex" === $(this).css("display") && $(".sub-menu").not($(this)).slideUp()
					}
				}))
		}),
		$(".menu-item-has-children").hover(function () {
			ww < 1280 || $(this).find(".sub-menu").stop().slideDown("slow")
		}, function () {
			ww < 1280 || $(this).find(".sub-menu").stop().slideUp("fast")
		}),
		$(".sub-menu").hide()

});


document.addEventListener("DOMContentLoaded", ready);

function ready() {
	if (document.querySelector('.slider-segment-partners')) {
		let sliderSegmentPartners = new Swiper(".slider-segment-partners", {
			slidesPerView: 'auto',
			watchOverflow: true,
			speed: 800,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			spaceBetween: 40,
			autoplay: {
				delay: 1000,
			},
			loop: true,
		});
	}
	if (document.querySelector('.segment-projects__slider')) {
		let segmentProjectsSlider = new Swiper(".segment-projects__slider", {
			watchOverflow: true,
			speed: 800,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			navigation: {
				nextEl: ".segment-projects .arrow-next",
				prevEl: ".segment-projects .arrow-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
			},
		});
	}



	if (document.querySelector('.page-swiper')) {
		let pageSwiper = new Swiper(".page-swiper", {
			wrapperClass: "page__wrapper",
			slideClass: "page__screen",
			direction: 'vertical',
			slidesPerView: 'auto',
			mousewheel: {
				sensitiviti: 1,
			},
			init: false,
			watchOverflow: true,
			speed: 800,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			on: {
				init: function () {
					setScrollType();
				},
				resize: function () {
					setScrollType();
					setWidthPage();
				},
			},

			scrollbar: {
				el: '.page__scroll',
				dragClass: 'page__drag-scroll',
				draggable: true,
			},
		});


		pageSwiper.init();



		function setScrollType() {

			let wrapper = document.querySelector('.page__wrapper');
			if (wrapper.classList.contains('_free')) {
				wrapper.classList.remove('_free');
				pageSwiper.params.freeMode.enabled = false;
			}
			for (let index = 0; index < pageSwiper.slides.length; index++) {
				const pageSlide = pageSwiper.slides[index];
				const pageSlideContent = pageSlide.querySelector('.screen__content');
				if (pageSlideContent) {
					const pageSlideContentHeight = pageSlideContent.offsetHeight;
					if (pageSlideContentHeight > window.innerHeight) {
						wrapper.classList.add('_free');
						pageSwiper.params.freeMode.enabled = true;
						break;
					}
				}
			}
		};
		function setWidthPage() {
			let windowWidth = window.innerWidth;
			if (windowWidth <= 1280) {
				pageSwiper.destroy();
			} else {
				pageSwiper.init();
			}
		}
	}


	if (document.querySelector('.news-slider')) {
		let newsSlider = new Swiper(".news-slider", {
			wrapperClass: "items__wrapper",
			slideClass: "news-slide",
			watchOverflow: true, 
			spaceBetween: 20,
			slidesPerView: 1,
			speed: 800,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			autoHeight: true,
			navigation: {
				nextEl: ".news-slider .arrow-next",
				prevEl: ".news-slider .arrow-prev",
			},
			breakpoints: {
				639: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1023: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
		});


	}

	let burgerBtns = [...document.querySelectorAll(".burger")];
	let body = document.querySelector("body");
	let html = document.querySelector("html");
	for (const burgerBtn of burgerBtns) {
		burgerBtn.addEventListener("click", function () {
			body.classList.toggle("active");
			html.classList.toggle("active");
		});
	}


	document.addEventListener("click", ducumentActions);

	function ducumentActions(e) {
		let fancyboxBgs = document.querySelectorAll('.fancybox-bg');
		for (const fancyboxBg of fancyboxBgs) {
			let targetElem = e.target;

			if (targetElem === fancyboxBg) {
				console.log('rrrr')
				$.fancybox.close()
			}
		}
	}
}

