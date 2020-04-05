// Подключаем jquery (https://github.com/webpack/webpack/issues/4258)
var $ = require("jquery");

$(document).ready(function(){
	'use strict';

	//Responsive menu
	if ($('.open_block').length) {
		$('.open_block').on('click', function () {
			$('.right_main .right_menu').css("right","0px");
			$(this).hide();
			$('.close_block').show();
			$(".homepage").css("left","0");
			$("body").addClass("overflow-hidden");
			
		});
		$('.close_block').on('click', function () {
			$('.right_main .right_menu').css("right","-100%");
			$(this).hide();
			$('.open_block').show();
			$(".homepage").css("left","-100%");
			$("body").removeClass("overflow-hidden");
		});
	}

	/*if ($('.tabs').length) {
			$('.tab_item-1').on('click', function () {
				$(this).addClass('active');
				$('.tab_item-2').removeClass('active');
				$('.tab_item-3').removeClass('active');
				$('.tab_item-4').removeClass('active');
				$('.tab_item-5').removeClass('active');
				$('.tab_item-6').removeClass('active');
				$('.tab_content-1').show();
				$('.tab_content-2').hide();
				$('.tab_content-3').hide();
				$('.tab_content-4').hide();
				$('.tab_content-5').hide();
				$('.tab_content-6').hide();
			});
			$('.tab_item-2').on('click', function () {
				$(this).addClass('active');
				$('.tab_item-1').removeClass('active');
				$('.tab_item-3').removeClass('active');
				$('.tab_item-4').removeClass('active');
				$('.tab_item-5').removeClass('active');
				$('.tab_item-6').removeClass('active');
				$('.tab_content-1').hide();
				$('.tab_content-2').show();
				$('.tab_content-3').hide();
				$('.tab_content-4').hide();
				$('.tab_content-5').hide();
				$('.tab_content-6').hide();
			});
			$('.tab_item-3').on('click', function () {
				$(this).addClass('active');
				$('.tab_item-2').removeClass('active');
				$('.tab_item-1').removeClass('active');
				$('.tab_item-4').removeClass('active');
				$('.tab_item-5').removeClass('active');
				$('.tab_item-6').removeClass('active');
				$('.tab_content-1').hide();
				$('.tab_content-2').hide();
				$('.tab_content-3').show();
				$('.tab_content-4').hide();
				$('.tab_content-5').hide();
				$('.tab_content-6').hide();
			});
			$('.tab_item-4').on('click', function () {
				$(this).addClass('active');
				$('.tab_item-2').removeClass('active');
				$('.tab_item-3').removeClass('active');
				$('.tab_item-1').removeClass('active');
				$('.tab_item-5').removeClass('active');
				$('.tab_item-6').removeClass('active');
				$('.tab_content-1').hide();
				$('.tab_content-2').hide();
				$('.tab_content-3').hide();
				$('.tab_content-4').show();
				$('.tab_content-5').hide();
				$('.tab_content-6').hide();
			});
			$('.tab_item-5').on('click', function () {
				$(this).addClass('active');
				$('.tab_item-2').removeClass('active');
				$('.tab_item-3').removeClass('active');
				$('.tab_item-4').removeClass('active');
				$('.tab_item-1').removeClass('active');
				$('.tab_item-6').removeClass('active');
				$('.tab_content-1').hide();
				$('.tab_content-2').hide();
				$('.tab_content-3').hide();
				$('.tab_content-4').hide();
				$('.tab_content-5').show();
				$('.tab_content-6').hide();
			});
			$('.tab_item-6').on('click', function () {
				$(this).addClass('active');
				$('.tab_item-2').removeClass('active');
				$('.tab_item-3').removeClass('active');
				$('.tab_item-4').removeClass('active');
				$('.tab_item-5').removeClass('active');
				$('.tab_item-1').removeClass('active');
				$('.tab_content-1').hide();
				$('.tab_content-2').hide();
				$('.tab_content-3').hide();
				$('.tab_content-4').hide();
				$('.tab_content-5').hide();
				$('.tab_content-6').show();
			});
	}*/

	if ($('.slider_card').length) {
		$('.slider_card').slick({
	   	arrows: false,
	   	dots: true
	   });
	}

});

/*$('.testimonials_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
var tabs_container = $('.testimonial_tab_container');

tabs_container.find($('.tab-item')).hide();
tabs_container.find($('.tab-' + nextSlide)).show();
});*/