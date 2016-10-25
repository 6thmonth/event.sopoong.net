

$(document).ready(function() {
	// "use strict";
  	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyA32E9AbOHMN21SAJy3wrXaBkbAjEc3bp0",
		authDomain: "admin-sopoong.firebaseapp.com",
		databaseURL: "https://admin-sopoong.firebaseio.com",
		storageBucket: "admin-sopoong.appspot.com",
		messagingSenderId: "201886923120"
	}

	firebase.initializeApp(config);

	const db = firebase.database()

	db.ref('event/').once('value', function(result) {
    const values = result.val()
    const header = values.header
    const items = values.items
    const partners = values.partners

    header.forEach(function(item) {
      $('#home-slider').append('\
        <li class="item">\
          <img src="' + item.backgroundImg + '" alt="">\
          <div class="forth-slider-text">\
            <img class="logo" src="assets/base/images/beta/top_logo.png" alt="소풍 로고" >\
            <div class="forth-slide-sectext">\
              <h3><span class="sub-text">' + item.subtitle + '<span><br><span class="main-text">' + item.title + '<span><br></h3>\
            </div>\
          </div>\
        </li>\
      ')
    })

    items.forEach(function(item) {
      $('.blog-inner-wrapper').append('\
        <div class="blog-section col-xs-6 col-sm-6 col-md-4 skt_animate_when_almost_visible skt_bottom-to-top">\
          <div class="blog-img-wrap">\
            <img src="' + item.backgroundImg + '" alt="" />\
            <div class="blog-over"></div>\
              <div class="blog-meta-wrap slideUp">\
                <span><strong>회사</strong> | ' + item.company + '</span>\
                <span><strong>상품</strong> | ' + item.product + '</span>\
                <span class="meta-date"><strong>가격</strong> | ' + item.price + '</span>\
              </div>\
            </div>\
            <div class="blog-content-wrap">\
              <h3>' + item.title + '</h3>\
              <p>' + item.description + '</p>\
              <a href="' + item.linkHref + '" target="_blank"><strong>' + item.linkTitle + '<i class="icon wedding-maids-right-arrow"></i></strong></a>\
            </div>\
          </div>\
      ')
    })

    partners.forEach(function(item) {
      $('#owl-demo').append('\
      <div class="item">\
      <div class="friend-img">\
      <div class="imgoverlay">\
      <a href="' + item.href + '" target="_blank">\
      <img src="' + item.img + '" alt="' + item.text + '">\
      </a>\
      </div>\
      </div>\
      <h3><a href="' + item.href + '" target="_blank">' + item.text + '</a></h3>\
      </div>\
      ')
    })



	// Main Menu Button
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

	// Menu seperator
	$( ".sub_menu div > ul > li" ).append( "<span class='menu-style'></span>" );;

	// Menu pyramid style
	var count = $(".sub_menu .sub-skew > ul > li").length;
	var n = Math.ceil(count/2);
	var wd = 100;
	var commondiff = 10;
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



	// Section Background
	$('.home_txt').each(function(){
		var image = $(this).attr('data-image');
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
	});

    // Friend Section Carousel
	$("#owl-demo").owlCarousel({
		items : 4,
		itemsDesktop : [1199,3],
		pagination:false,
		lazyload:false,
		navigation : true,
		navigationText : ["<i class='icon wedding-maids-left-arrow'>", "<i class='icon wedding-maids-right-arrow'>"],
	});

	// Home Slider Carousel
	$("#home-slider").owlCarousel({
	  items : 1,
	    itemsCustom : false,
	    itemsDesktop : [1199, 1],
	    itemsDesktopSmall : [979, 1],
	    itemsTablet : [768, 1],
	    itemsTabletSmall : false,
	    itemsMobile : [479, 1],
	  singleItem : true,
	  itemsDesktop : [1199,1],
	  pagination:false,
	  lazyload:false,
	  autoPlay:true,
	  slideSpeed: 500,
	  navigation : true,
	  transitionStyle: "fade",
	  navigationText : ["<span class='slide-owl-prev fade_in_hide element_fade_in'><i class='icon wedding-left-slider-arrow'></span>", "<span class='slide-owl-next fade_in_hide element_fade_in'><i class='icon wedding-right-slider-arrow'></span>"],
	  afterInit : function(elem){
	      var that = this;
	      that.owlControls.appendTo(elem.parent());
	    },
	});

	// Event Section Carousel
	$("#event-component").owlCarousel({
		singleItem : true,
		navigation : false,
		lazyload:false,
		transitionStyle : "goDown"
	});

	// Bless Section Carousel
	$('#bless-slider').owlCarousel({
		items:1,
		itemsCustom : false,
		itemsDesktop : [1199, 1],
		itemsDesktopSmall : [979, 1],
		itemsTablet : [768, 1],
		itemsTabletSmall : false,
		itemsMobile : [479, 1],
		margin:30,
		autoplay : true,
		autoHeight:true
	});

	setTimeout(function(){
	  $("#bless-slider .owl-wrapper-outer.autoHeight").height(234);
	  if((jQuery(window).width() > 767) && (jQuery(window).width() < 1023)  ){
	  	$("#bless-slider .owl-wrapper-outer.autoHeight").height(270);
	  }
	}, 300);

	// prettyPhoto
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

	// if((jQuery(window).width() > 1023) && (jQuery(window).width() < 1350)  ){

	// }else{

		jQuery('#counter-wrapper::before, #wishlist-wrapper::before').parallax("center", 0.5);
	// }
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

    vc_waypoints();
  })

});


// Responsive Menu
jQuery(window).load( function() {
	if(jQuery(window).width() >= 310 && jQuery(window).width() <= 767){
        $(".sub_menu div").removeClass("sub-skew");
        $(".sub_menu div").addClass("sub-min");
	}
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
jQuery(function(){jQuery(".scroll").click(function(){jQuery("html,body").animate({scrollTop:jQuery(".thetop").offset().top},"1000");return false})})


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



jQuery(document).ready( function() {

});
