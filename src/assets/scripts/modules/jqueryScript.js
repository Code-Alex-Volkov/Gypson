// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
var $ = require("jquery");

	/*window.jQuery = $;
	window.$ = $;*/

$(document).ready(function(){
	'use strict';
   /*alert('Приветик');*/

	/*home_slider*/
	if ($('.home_sliders').length) {
		$('.home_sliders').slick({
	   	vertical: true,
	   	arrows: false,
	   	dots: true
	   });
	}

  /*Popup Video*/
   if ($('.open_video').length) {
   	$('.open_video').magnificPopup({
		  type: 'iframe'
		});
   }
   

	/*Carusel Slider for Shop Items*/
	if ($('.shop_carusel').length) {
		$('.shop_carusel').slick({
			  infinite: true,
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  appendArrows: $('.shop_slider_navigation'),
			  prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
			  nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
			  responsive: [
				  	{
				  		breakpoint: 420,
				  		settings: {
				  			slidesToShow: 1,
				  			slidesToScroll: 1
				  		}
				  	}
			  ]
		});
	}

	/*Carusel Slider for Shop Items*/
	if ($('.testimonials_carousel').length) {
		$('.testimonials_carousel').slick({
			  infinite: true,
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  appendArrows: $('.testimonial_slider_box'),
			  prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
			  nextArrow: "<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
			  responsive: [
				  	{
				  		breakpoint: 420,
				  		settings: {
				  			slidesToShow: 1,
				  			slidesToScroll: 1
				  		}
				  	}
			  ]
		});

		$('.testimonials_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  var tabs_container = $('.testimonial_tab_container');

		  tabs_container.find($('.tab-item')).hide();
		  tabs_container.find($('.tab-' + nextSlide)).show();
		});
	}

	/*Popup Video*/
   if ($('.testy_gallery').length) {
   	$('.testy_gallery').magnificPopup({
		  type: 'image',
		  closeOncontentClick: true,
		  image: {
		  	verticalFit: true
		  }
		});
   }

   /*twitter Slider*/
	if ($('.content_slider_tweeter').length) {
		$('.content_slider_tweeter').slick({
			vertical: true,
	   	appendArrows: $('.tweet_slider .arrows'),
		  	prevArrow: "<span class=\"up\"><i class=\"fas fa-arrow-up\"></i></span>",
		  	nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
	   });
	}

	//Responsive menu
	if ($('.main_navigation .fa-bars').length) {
		$('.main_navigation .fa-bars').on('click', function () {
			$('.header_top .inner_header nav > ul').show();
			$(this).hide();
			$('.main_navigation .fa-times').show();
			
		});
		$('.main_navigation .fa-times').on('click', function () {
			$('.header_top .inner_header nav > ul').hide();
			$(this).hide();
			$('.main_navigation .fa-bars').show();
		});
	}

	//Responsive menu mobile
	if ($('.fa-bars_mobile').length) {
		$('.fa-bars_mobile').on('click', function () {
			$('.mobile_navigation').show();
			$(this).hide();
			$('.fa-times_mobile').show();
			
		});
		$('.fa-times_mobile').on('click', function () {
			$('.mobile_navigation').hide();
			$(this).hide();
			$('.fa-bars_mobile').show();
		});
	}
	
});

