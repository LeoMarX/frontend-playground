$(function() {
	var $slideshow = $('#slideshow');
	var $nav = $slideshow.find('ul');

	$nav.on('click', 'a', function(event) {
		event.preventDefault();
		var $li = $(event.currentTarget).closest('li');
		var idx = $li.index();

		$slideshow.find('figure').stop().filter(':visible').fadeOut(300);
		$slideshow.find('figure').eq(idx).delay(300).fadeIn(300);
		$nav.find('.active').removeClass('active');
		$li.addClass('active');
	});
});

	// $('li>a').on('click', function(event) {
	// 	event.preventDefault();
	// 	var $a = $(this);
	// 	var selectedImgSrc = '';

	// 	// restore border of the rest 3 thumbnail
	// 	$.each($('li>a').not('.selected'), function(index, anchor) {
	// 		$(anchor).removeClass('selected');
	// 		$(anchor).children().css('border', '3px solid #ffffff');
	// 	});

	// 	// change border of the selected thumbnail
	// 	$a.children().css('border', '3px solid #0066cc');

	// 	selectedImgSrc = $a.children().attr('src');
	// 	$.each($('figure'), function(index, figure) {
	// 		if (selectedImgSrc === $(figure).children('img').attr('src')) {
	// 			$(figure).css('display', 'block');
	// 		} else {
	// 			$(figure).css('display', 'none');
	// 		}
	// 	});
	// });