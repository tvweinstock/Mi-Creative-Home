

$(document).ready(function(){


	$(window).on('scroll',function() {
		var fixedNavSpot = $('.stagingContainer');
		if(fixedNavSpot.length) {
			fixedNavSpot = fixedNavSpot.position().top;
		}
		var scrollPoint = $(window).scrollTop();
		if(scrollPoint > fixedNavSpot) {
			$('.fixedHeader').addClass('fixed');
			$('.navLogo').addClass('logoShow');
		}
		else {
			$('.fixedHeader').removeClass('fixed');
			$('.navLogo').removeClass('logoShow');
		}
		
	});


	//Random testimonials
	var Quotes = $(".testy").get().sort(function(){
		return Math.round(Math.random())-0.5;
	}).slice(0,2);
	$(Quotes).show();

	// take flipeed class off
	// window.setTimeout(function(){
	// 	$(".flipLogo").removeClass("flipped");
	// },4000);



var w = $(window).width();
if (w >= 875) {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			$(".flipLogo").removeClass("flipped");
		}
	}); //end of flip logo	
}

$('.condoVideo').fitVids();

$('.navBar a').on("click", function() {
	$('.navBar a').removeClass("selected");
	$(this).addClass("selected");
});


}); // end doc ready


$(window).load(function() {
	$('#flexsliderFirst').flexslider({
    animation: "fade",  // slide or fade
    controlsContainer: ".flex-container", // the container that holds the flexslider
    slideshowSpeed: 2000,
    animationSpeed: 1000
  });

	$('.flexsliderTabs').flexslider({
		animation: "slide",	
		itemWidth: 500,
		itemMargin: 5,
		directionNav: true

	});

});


