(function ($) {

	//Slideshow
	$('.slideshow').owlCarousel({
		nav: true,
		items: 1,
		loop: true,
		smartSpeed: 1000,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 3000
	});

})(jQuery);