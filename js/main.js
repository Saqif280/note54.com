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


	// carousel
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("mySlides");
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
		}
		slides[slideIndex-1].style.display = "block";
	}

	$(".prev").click(function(){
		plusSlides(-1);
	});

	$(".next").click(function(){
		plusSlides(1);
	});
});