// Portfolio filter
$(function () {

	$(".filter-button").click(function () {
		var value = $(this).attr('data-filter');

		if (value == "all") {
			$('.filter').show('2000');
		} else {
			$(".filter").not('.' + value).hide('3000');
			$('.filter').filter('.' + value).show('3000');

		}
	});

	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");

})(jQuery);