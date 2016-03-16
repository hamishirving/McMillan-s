// DOM Ready
$( document ).ready(function() {
	'use strict';

    // ----
    // Show Current Page in Nav
    // ----

    $(function(){
      $('.nav ul li').each(function() {
        if ($(this).prop('href') == window.location.href) {
          $(this).addClass('current');
        }
      });
    });

	// ----
	// Mobile Navigation - Slideout.js
	// ----

    // Toggle button
	document.querySelector('.toggle-button').addEventListener('click', function() {
	slideout.toggle();
	});
	// Fixed Nav
	slideout.on('beforeopen', function() {
	document.querySelector('.nav').classList.add('fixed-open');
		// Fix issue on iOS where navbar translated to 0 first
		$('.nav').velocity({
			translateX: '-256'
		}, 0.1);
	});
	slideout.on('beforeclose', function() {
	document.querySelector('.nav').classList.remove('fixed-open');
		// Fix issue on iOS where navbar translated to 0 first
		$('.nav').velocity({
			translateX: '0'
		}, 0.1);
	});

	// Hamburger animation
	$('#hamburger').click(function() {
		$('.top-menu').toggleClass('top-animate');
		$('.mid-menu').toggleClass('mid-animate');
		$('.bottom-menu').toggleClass('bottom-animate');
	});

	// ----
    // Swiper
    // ----
    var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		autoplay: 3000,
		effect: 'fade',
		loop: true
	});        

// End DOM Ready
});

// All content loaded (inc images, css etc)
window.onload = function() {

// End Window Ready
};