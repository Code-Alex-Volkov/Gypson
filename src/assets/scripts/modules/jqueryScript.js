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
			
		});
		$('.close_block').on('click', function () {
			$('.right_main .right_menu').css("right","-100%");
			$(this).hide();
			$('.open_block').show();
			$(".homepage").css("left","-100%");
		});
	}	
});

