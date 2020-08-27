$(document).ready(function () {
    let user_icon = document.querySelector('.actions_user_icon');
	user_icon.addEventListener("click", function(e){
		let user_menu = document.querySelector('.actions_user_menu');
		user_menu.classList.toggle('_active');
	});

	$('.burger_menu').click(function (event) {
		$('.burger_menu , .menu').toggleClass('_active');
		$('body').toggleClass('lock');
	});
	/*====================================================*/

	document.documentElement.addEventListener("click", function(e){
		if(!e.target.closest('.actions_user_icon')){
			let user_menu = document.querySelector('.actions_user_menu');
			user_menu.classList.remove('_active');
		}
	});
	/*====================================================*/

	jQuery(window).scroll(function(){
		var header = $('.header');
	    var headerHeight = header.outerHeight();
	    var sections = $('.block');
			sections.each(function(i,el){
	    var top  = $(el).offset().top - headerHeight;
	    var bottom = top +$(el).height();
	    var scroll = $(window).scrollTop();
	    var id = $(el).attr('id');
	    	if( scroll > top && scroll < bottom){
	        	$('.menu_link.active').removeClass('active');
				$('.menu_link[href="#'+id+'"]').addClass('active');
	        }
	    })
	});

	/*===================Плавный скрол=====================*/
		var header = $('.header');
	    var headerHeight = header.outerHeight();
		$("#menu").on("click","a", function (event) {
	        event.preventDefault();
	        var id  = $(this).attr('href'),
	            top = $(id).offset().top - headerHeight / 1.5;
	        $('body,html').animate({scrollTop: top}, 800);
	    });

    /*================================================*/

  	$('.main-slider_body').slick({
  		adaptiveHeight: false,
  		speed: 500,
  		infinite: false,
  		autoplay: true,
  		autoplaySpeed: 7000,
  		pauseOnHover: false,
  		prevArrow: '.control-main-slider_arrow_prev',
        nextArrow: '.control-main-slider_arrow_next',

        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        adaptiveHeight: true
	      }
	    }
    	]
  	});
  	/*====================================================*/

  	$('.slider-lots_body').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.control-slider-lots_arrow_prev',
        nextArrow: '.control-slider-lots_arrow_next',

        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 500,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
	});
	/*====================================================*/

	$('.slider-quotes_body').slick({
  		speed: 700,
  		infinite: true,
  		fade: true,
  		cssEase: 'linear',
  		prevArrow: false,
        nextArrow: '.control-quotes_circle',

        responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        adaptiveHeight: true
	      }
	    }
    	]
  	});
  	/*====================================================*/

	    
});