$(document).ready(function () {
	// nav open
	$('a.box1').on('click', function (e) {
		var dropdown = $(this).parent().parent().find('.dropdown');
		dropdown.slideToggle();
	});

	// search
	$('button.btn-search').on('click', function (e) {
		var dropdown = $(this).parent().parent().find('.input-search');
		dropdown.slideToggle();
	});
});