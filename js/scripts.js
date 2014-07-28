

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

	// $(window).on('scroll',function() {
	// 	var fixedNavSpot = $('.stagingContainer');
	// 	if(fixedNavSpot.length) {
	// 		fixedNavSpot = fixedNavSpot.position().top;
	// 	}
	// 	var scrollPoint = $(window).scrollTop();
	// 	if(scrollPoint > fixedNavSpot) {
	// 		$('.navLogo').addClass('logoShow');
	// 	}
	// 	else {
	// 		$('.navLogo').removeClass('logoShow');
	// 	}
		
	// });

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

}); // end doc ready


$(window).load(function() {
	$('#flexsliderFirst').flexslider({
	          animation: "fade",  // slide or fade
	          controlsContainer: ".flex-container", // the container that holds the flexslider
	          slideshowSpeed: 2000,
	          animationSpeed: 1000
	      });

	$('#flexsliderSecond').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 500,
		itemMargin: 5,
		directionNav: true,
		slideshowSpeed: 2000
	});

	$('#flexsliderThird').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 500,
		itemMargin: 5,
		directionNav: true,
		slideshowSpeed: 2000
	});

	$('#flexsliderFourth').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 500,
		itemMargin: 5,
		slideshowSpeed: 2000,
		directionNav: true
	});

});


var photoTh = $('.picture'),
overlay = $('.overlay');

photoTh.on('click', function() {    
	var dataPhoto = $(this).attr('src'),
	dataTitle = $(this).data('title');

	overlay.show();

	$('.picture-big').attr("src", dataPhoto);
	$('.photo-title').text(dataTitle);
}
);

overlay.on('click', function() {
	$(this).hide();
});