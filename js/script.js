// event pada saat link di klik
$('.nav-link').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elementTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();
});
