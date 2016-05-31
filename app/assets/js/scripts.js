/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
// DOM Ready
$( document ).ready(function() {
	'use strict';

	$('html.js').velocity({
		opacity: 1
		}, 100, "easeInSine");

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

    // ----
    // Logo Carousel - slick
    // ----
	$('.logo-carousel').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		infinite: true,
		speed: 2000,
		arrows: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}	
		}
		]
	});

	// ----
	// Swipebox gallery
	// ----

	// For each gallery, add rel=gallery(n) to link and increment by 1
	var gallery = $('.product > .thumbs');
	gallery.each(function(n) {
		$(this).children('a').attr('rel', 'gallery' + n++);
	})

// End DOM Ready
});

// All content loaded (inc images, css etc)
window.onload = function() {

// End Window Ready
};