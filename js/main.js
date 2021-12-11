$(function () {

	$(document).ready(function(){
    	$("#about").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
		});
	});

	$(window).scroll(function(){
		$('.header').bgscroll({
			direction: 'top', // направление bottom или top
			bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
			debug: false, // Режим отладки
			min: 0, // минимальное положение (в %) на которое может смещаться фон
			max: 100 // максимальное положение (в %) на которое может смещаться фон
		});
	})

	// Плавная прокрутка к якорю
	$("a").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});