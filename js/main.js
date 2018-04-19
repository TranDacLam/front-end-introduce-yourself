;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '90%' } );
	};


	var isotopeImageLoaded = function() {
		
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  resizable: false,
		  masonry: {
		    columnWidth: '.grid-sizer',
		  }
		});

		$grid.imagesLoaded().progress( function() {
		  $grid.isotope('layout');
		});

	}

	var toggleAside = function() {

		$('.aside-toggle').click(function(event){
			
			event.preventDefault();
			var aside = $('#fh5co-aside'),
				 grid = $('#fh5co-image-grid'),
				 bio = $('#fh5co-bio'),
				 imgBg = $('.image-bg');


			if (aside.hasClass('show')) {
				
				
				if ($(window).width() <= 480 ) {
					TweenLite.to(aside, -1, { 
						left: '-85%',
						ease: Power1.easeNone 
					});
				} else {
					TweenLite.to(aside, -1, { 
						left: '-50%',
						ease: Power1.easeNone 
					});
				}
				
				TweenLite.to(grid, -1, { css: { 
						"-webkit-transform" : "translate3d(0%, 0px, 0px)", 
						"-moz-transform" : "translate3d(0%, 0px, 0px)", 
						"-ms-transform" : "translate3d(0%, 0px, 0px)", 
						"-o-transform" : "translate3d(0%, 0px, 0px)", 
						"transform" : "translate3d(0%, 0px, 0px)"
					}, 
					ease: Power1.easeNone
				});

				TweenLite.to(bio, 1, { opacity: 0, delay: 0.2, ease: Power1.easeNone});
				TweenLite.to(imgBg, 1, { opacity: 0, delay: 0.2, ease: Power1.easeNone});
				

				aside.removeClass('show');	
			} else {

				TweenLite.to(aside, -1, { 
					left: '0%',
					ease: Power1.easeNone 
				});

				if ($(window).width() <= 480 ) {
					TweenLite.to(grid, -1, { css: { 
							"-webkit-transform" : "translate3d(85%, 0px, 0px)", 
							"-moz-transform" : "translate3d(85%, 0px, 0px)", 
							"-ms-transform" : "translate3d(85%, 0px, 0px)", 
							"-o-transform" : "translate3d(85%, 0px, 0px)", 
							"transform" : "translate3d(85%, 0px, 0px)" 
						}, 
						ease: Power1.easeNone
					})
				} else {
					TweenLite.to(grid, -1, { css: { 
							"-webkit-transform" : "translate3d(32%, 0px, 0px)", 
							"-moz-transform" : "translate3d(32%, 0px, 0px)", 
							"-ms-transform" : "translate3d(32%, 0px, 0px)", 
							"-o-transform" : "translate3d(32%, 0px, 0px)", 
							"transform" : "translate3d(32%, 0px, 0px)" 
						}, 
						ease: Power1.easeNone
					});
				}

				TweenLite.to(bio, 1, { opacity: 1, delay: 0.3, ease: Power1.easeNone});
				TweenLite.to(imgBg, 1, { opacity: 1, delay: 0.6, ease: Power1.easeNone});
				aside.addClass('show');	
			}
		});

		$(document).click(function (e) {
	    var container = $(".aside-toggle, #fh5co-aside");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('#fh5co-aside').hasClass('show') ) {
	      	container.trigger('click');
	      }
	    }
		});

	}

	var toggleContactAside = function() {

		$('.aside-contact-toggle').click(function(event){
			
			event.preventDefault();
			var aside = $('#fh5co-contact-aside'),
				 grid = $('#fh5co-image-grid'),
				 bio = $('#fh5co-contact-bio'),
				 imgBg = $('.image-bg');


			if (aside.hasClass('show')) {
				
				
				if ($(window).width() <= 480 ) {
					TweenLite.to(aside, -1, { 
						left: '-85%',
						ease: Power1.easeNone 
					});
				} else {
					TweenLite.to(aside, -1, { 
						left: '-50%',
						ease: Power1.easeNone 
					});
				}
				
				TweenLite.to(grid, -1, { css: { 
						"-webkit-transform" : "translate3d(0%, 0px, 0px)", 
						"-moz-transform" : "translate3d(0%, 0px, 0px)", 
						"-ms-transform" : "translate3d(0%, 0px, 0px)", 
						"-o-transform" : "translate3d(0%, 0px, 0px)", 
						"transform" : "translate3d(0%, 0px, 0px)"
					}, 
					ease: Power1.easeNone
				});

				TweenLite.to(bio, 1, { opacity: 0, delay: 0.2, ease: Power1.easeNone});
				TweenLite.to(imgBg, 1, { opacity: 0, delay: 0.2, ease: Power1.easeNone});
				

				aside.removeClass('show');	
			} else {

				TweenLite.to(aside, -1, { 
					left: '0%',
					ease: Power1.easeNone 
				});

				if ($(window).width() <= 480 ) {
					TweenLite.to(grid, -1, { css: { 
							"-webkit-transform" : "translate3d(85%, 0px, 0px)", 
							"-moz-transform" : "translate3d(85%, 0px, 0px)", 
							"-ms-transform" : "translate3d(85%, 0px, 0px)", 
							"-o-transform" : "translate3d(85%, 0px, 0px)", 
							"transform" : "translate3d(85%, 0px, 0px)" 
						}, 
						ease: Power1.easeNone
					})
				} else {
					TweenLite.to(grid, -1, { css: { 
							"-webkit-transform" : "translate3d(32%, 0px, 0px)", 
							"-moz-transform" : "translate3d(32%, 0px, 0px)", 
							"-ms-transform" : "translate3d(32%, 0px, 0px)", 
							"-o-transform" : "translate3d(32%, 0px, 0px)", 
							"transform" : "translate3d(32%, 0px, 0px)" 
						}, 
						ease: Power1.easeNone
					});
				}

				TweenLite.to(bio, 1, { opacity: 1, delay: 0.3, ease: Power1.easeNone});
				TweenLite.to(imgBg, 1, { opacity: 1, delay: 0.6, ease: Power1.easeNone});
				aside.addClass('show');	
			}
		});

		$(document).click(function (e) {
	    var container = $(".aside-contact-toggle, #fh5co-contact-aside");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('#fh5co-contact-aside').hasClass('show') ) {
	      	container.trigger('click');
	      }
	    }
		});

	}


	$(function(){
		contentWayPoint();
		isotopeImageLoaded();
		toggleAside();
		toggleContactAside();
	});

	//Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


}());