$(document).ready(function() {

	// slide to id
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var position = $($(this).attr("href")).offset().top;

		// add/remove active class
		$('a[href="'+$(this).attr("href")+'"]').addClass('active');
		$('a[href!="'+$(this).attr("href")+'"]').removeClass('active');

		$("body, html").animate({
			scrollTop: position
		}, 1000);
	});

	setTitleOpacity();
	// when scroll
	$(window).scroll(function(element){
		setTitleOpacity();
	});

	function setTitleOpacity() {
		var scrollTop = $(window).scrollTop();
		var wHeight = $(window).height();
		var opacity = scrollTop/wHeight;
		if (opacity > 1) opacity = 1;
		$('.title').css("opacity", opacity);
	}
});