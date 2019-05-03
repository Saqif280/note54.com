$(document).ready(function() {
	console.log(localStorage.internal);

	// prevent link redirect until internal var updated
	$('a.internal').click(function(e){
		e.preventDefault();
		localStorage.internal = true;
		console.log(localStorage.internal);
		window.location.href = $(this).attr('href');
	});

	// loader
	if(!fromInternal()){
		$('.number').animate({'opacity': 0.3},500);
		var i = 1;
		function incrementLoader() {
			if(i <= 54) {
				$('.number').text(i++);
				setTimeout(incrementLoader, 30);
			}
			if(i == 54){
				$('.number').animate({'opacity': 1},1000);
				setTimeout(function(){
					$('.loader').fadeOut(1000);
				}, 1000);
			}
		}
		setTimeout(incrementLoader, 0);
	} else {
		$('.loader').fadeOut(0);
	}

	function fromInternal(){
		if (localStorage.internal && localStorage.internal == "true") {
			localStorage.internal = false;
			return true;
		} else {
			localStorage.internal = false;
			return false;
		}
	}

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


	// fade elements in on scroll
	triggerScrollAnimations();
  $(window).scroll( function(){
		triggerScrollAnimations();
  });

	function triggerScrollAnimations(){
    /* Check the location of each desired element */
    $('.hideme').each( function(i){
      var center_of_object = $(this).position().top + $(this).outerHeight()/2;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			// console.log(center_of_object);

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > center_of_object ){
        $(this).animate({'opacity':'1'},500);
      }
    });

		$('.underline').each( function(i){
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();


			// console.log(bottom_of_object);

      /* If the object is completely visible in the window, fade it in */
      if( bottom_of_window > bottom_of_object ){
        $(this).addClass('underline-viewed');
      }
    });
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
		if(slides[slideIndex-1] !== undefined){
			slides[slideIndex-1].style.display = "block";
		}
	}

	$(".prev").click(function(){
		plusSlides(-1);
	});

	$(".next").click(function(){
		plusSlides(1);
	});
});

