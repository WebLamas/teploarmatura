@@include("./lib/jquery.fancybox.min.js")
@@include("./lib/wpcf7.js")
@@include("./lib/select.js")
/*end of inludes*/


$(document).ready(function () {

	$(window).on("wl_resize", function (event, ww) {
		console.log("some_code");
	});

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


		});
	}
	if (document.querySelector('.segment-projects__slider')) {
		let segmentProjectsSlider = new Swiper(".segment-projects__slider", {
			slidesPerView: 2,
			watchOverflow: true,
			speed: 800,
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			spaceBetween: 40,
			navigation: {
				nextEl: ".segment-projects .arrow-next",
				prevEl: ".segment-projects .arrow-prev",
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
				console.log('rr')
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
	}

}