$(function() {
	$('main li > a').on('click', function(event) {
		event.preventDefault();
		var $e = $(this);

		$e.siblings('.modal').css({
			top: $(window).scrollTop() + 30
		});

		$e.nextAll().fadeIn(400);
	});

	$('.modal_layer, a.close').on('click', function(event) {
		event.preventDefault();
		$('.modal_layer, .modal').filter(':visible').fadeOut(400);
	});
});

