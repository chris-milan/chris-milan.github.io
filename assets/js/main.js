;(function () {
	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Owl Carousel Controls
	// Hero Image Carousel
	var owlCarouselFeatureSlide = function() {
		var owl = $('.first-carousel');
		owl.owlCarousel({
			 animateOut: 'fadeOut',
			 animateIn: 'fadeIn',
			 margin: 20,
		   autoplay: true,
			 loop:true,
			 touchDrag: false,
		   mouseDrag: false,
		   autoplayHoverPause: false,
		   items: 1,
		});
		//Projects Carousel
		var owl1 = $('.second-carousel');
		owl1.owlCarousel({
			//  animateOut: 'fadeOut',
			 animateIn: 'fadeIn',
			 margin: 20,
		   autoplay: true,
		   loop:true,
			 nav: false,
			 dots: true,
			 dotsData: true,
		   mouseDrag: true,
		   autoplayHoverPause: false,
		   center: true,
			 items: 1,
		});

		// Resets owl carousel autoplay timeout after user action
			owl1.on('changed.owl.carousel', function(e) {
			owl1.trigger('stop.owl.autoplay');
			owl1.trigger('play.owl.autoplay');
	});
	};

	// Document on load
	$(function(){
		fullHeight();
		counterWayPoint();
		contentWayPoint();
		owlCarouselFeatureSlide();
	});


}());

/*!
 * Start Bootstrap - Creative v5.0.1 (https://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
 */


! function (e) {
	"use strict";

	e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
					var a = e(this.hash);
					if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({
							scrollTop: a.offset().top - 56
					}, 1e3, "easeInOutExpo"), !1
			}
	}), e(".js-scroll-trigger").click(function () {
			e(".navbar-collapse").collapse("hide")
	}), e("body").scrollspy({
			target: "#main-nav",
			offset: 57
	});
	var a = function () {
			100 < e("#main-nav").offset().top ? e("#main-nav").addClass("navbar-shrink") : e("#main-nav").removeClass("navbar-shrink")
	};
	a(), e(window).scroll(a), window.sr = ScrollReveal(), sr.reveal(".sr-contact-1", {
			delay: 200,
			scale: 0
	}), sr.reveal(".sr-contact-2", {
			delay: 400,
			scale: 0
	}), e(".popup-gallery").magnificPopup({
			delegate: "a",
			type: "image",
			tLoading: "Loading image #%curr%...",
			mainClass: "mfp-img-mobile",
			gallery: {
					enabled: !0,
					navigateByImgClick: !0,
					preload: [0, 1]
			},
			image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
			}
	})
}(jQuery);