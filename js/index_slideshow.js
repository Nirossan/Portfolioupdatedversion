(function($) {

	//Slideshow
	$('#hero-slider').owlCarousel({
		nav: false,
		dots: false,
		items: 1,
		loop: true,
		autoWidth: true,
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 4000
	});

})(jQuery);