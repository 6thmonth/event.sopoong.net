$(document).ready(function() {
	"use strict";

	/*Main Menu Button */
	$('.main_menu_btn').on("click", function(e){
		$(this).toggleClass('main_menu_btn_open');
		$('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
		$('.main_menu_block').find('.menu_wrapper').toggleClass('active');
		$('header .anim').toggleClass('active');
		e.preventDefault();
	});

	$('.sub_img').click(function(){
	  $('.menu_wrapper').removeClass('active');
	  $('.main_menu_block').removeClass('main_menu_block_open').fadeToggle();
	  $('.main_menu_btn').removeClass('main_menu_btn_open');
	  $('header .anim').toggleClass('active'); 
	});

	// On menu item click scroll to section
	$('.sub_menu').find('a').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top -110
		}, 1000);
		e.preventDefault();
	});

	// Section Background
	$('.home_txt').each(function(){
		var image = $(this).attr('data-image');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
	});
	
});

/* Blog Page Gallery Post */
$(document).ready(function() {
 
  var owl = $("#gallery-post-format");
 
  owl.owlCarousel({
    singleItem : true,
    navigation : false,
    transitionStyle : "goDown",
    autoplay: true
  });
 
});


// Navbar style

$(document).ready(function() {
	$( ".sub_menu div > ul > li" ).append( "<span class='menu-style'></span>" );;
});

/* menu Style */

$(document).ready(function(){

 var count = $(".sub_menu .sub-skew > ul > li").length;
 var n = Math.ceil(count/2);
 var wd = 100;
 var commondiff = 10;

 console.log(n);

 for(--n; n>0; n--){
   var newwidth = wd-commondiff;
   $('.sub_menu .sub-skew > ul > li:nth-child('+n+')').css({'width': newwidth+'%', 'background' : 'transparent'});
   commondiff+=10;
 }
 
 commondiff = 10;
 n = Math.ceil(count/2);

 for(++n; n<=count; n++){
   var newwidth = wd-commondiff;
      $('.sub_menu .sub-skew > ul > li:nth-child('+n+')').css({'width': newwidth+'%', 'background' : 'transparent'});
   commondiff+=10;
 }

});




/* Prettyphoto */
$(document).ready(function () {
	'use strict';

	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		hook: 'data-rel',
		animation_speed:'normal',
		theme:'light_square',
		slideshow:3000,
		show_title:false,
		autoplay_slideshow: false,
		social_tools: false		
	});
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed:'normal',
		theme:'light_square',
		slideshow:3000,
		show_title:false,
		autoplay_slideshow: false,
		social_tools: false		
	});
document.getElementById('s') && document.getElementById('s').focus();
});

/* ---------------------------------------------------- */
/*	PARALLAX											*/
/* ---------------------------------------------------- */
jQuery.fn.parallax = function(xpos, speedFactor) {
'use strict';
var firstTop, methods = {};
if(jQuery(window).width() > 1650){
	var staval = "650";
}else if(jQuery(window).width() > 1350){
	var staval = "350";
}else if(jQuery(window).width() > 767){ 
		var staval = "650";
}else if(jQuery(window).width() > 500){ 
		var staval = "400";
}else { 
 	var staval = "200";
}
return this.each(function(idx, value) {
var $this = jQuery(value), firstTop = $this.offset().top;
if (arguments.length < 1 || xpos === null)
xpos = "50%";
if (arguments.length < 2 || speedFactor === null)
speedFactor = 0.1;
methods = {
update: function() {
var pos = jQuery(window).scrollTop();
$this.each(function() {
$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos - staval) * speedFactor) + "px");
});
},
init: function() {
this.update();
jQuery(window).on('scroll', methods.update);
}
}
return methods.init();
});
};

jQuery(document).ready(function ($) {
	'use strict';
	console.log(jQuery(window).width());

	if((jQuery(window).width() > 1023) && (jQuery(window).width() < 1350)  ){

	}else{

		jQuery('#wishlist-wrapper::before').parallax("center", 0.5);
	}
});



/* ---------------------------------------------------- */
/*	SCROLLTOTOP											*/
/* ---------------------------------------------------- */
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 50 ) {
        jQuery('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        jQuery('.scrolltop').stop(true, true).fadeOut();
    }
});
jQuery(function(){jQuery(".scroll").click(function(){jQuery("html,body").animate({scrollTop:jQuery(".thetop").offset().top},"1000");return false})});


// Show submenu
$(document).ready(function() {
	"use strict";

	if( $(window).width() > 1024 ) {
	    $(".sub_menu div > ul > li.dropdown").hover(
	    function() {
	        $(this).find("ul.dropdown-menu").stop().slideDown(500);
	    }, function() {
	        $(this).find("ul.dropdown-menu").stop().slideUp(500);
	    });
	} else {
		$(".sub_menu div > ul > li.dropdown").click(
		function() {
		    $(this).find("ul.dropdown-menu").stop().slideToggle(500);
		});
	}

	// On menu item click scroll to section
	$('.sub_menu').find('a').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top -110
		}, 1000);
		e.preventDefault();
	});
});


//WAYPOINTS MAGIC --------------------------
//---------------------------------------------------------
if ( typeof window['vc_waypoints'] !== 'function' ) {
    function vc_waypoints() {
        if (typeof jQuery.fn.waypoint !== 'undefined') {
            jQuery( '.fade_in_hide, .skt_animate_when_almost_visible' ).waypoint({
                offset: '90%',
                handler: function() {
                    jQuery(this.element).addClass( 'skt_start_animation' );
                }
            });
        }
    }
}
jQuery(document).ready( function() {
	vc_waypoints();
});