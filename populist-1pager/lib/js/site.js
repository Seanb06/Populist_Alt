$(document).ready(function($) {

    $("#about-link").click(function (){
       $('html, body').animate({
           scrollTop: $("#about").offset().top
       }, 1000);
    });

    $("#pop-link").click(function (){
       $('html, body').animate({
           scrollTop: $("#populist").offset().top
       }, 1000);
    });

    // footer scroll top
	$('#footer-scroll').on("click",function(){
		$('html,body').animate({ scrollTop: 0 }, 500, function () {
				// console.log( "xxx" );
		});
	});



})(jQuery);

