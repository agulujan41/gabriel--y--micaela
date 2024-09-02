(function ($) {
    "use strict";

    $(window).on('load', function() {
        setTimeout(function() {
            $('#loading-screen').fadeOut();
        }, 2000);
    });
    
    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);



document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = encodeURIComponent(document.getElementById('user-name').value.trim());
    var message = encodeURIComponent(document.getElementById('user-message').value.trim());
    
    if (name && message) {
        var whatsappMessage = `Hola Rut, soy ${name} quiero *confirmar mi asistencia* a la boda de Gabriel y Micaela. \n${message}`;
        var whatsappURL = `https://api.whatsapp.com/send?phone=543874400230&text=${whatsappMessage}`;
        
        window.open(whatsappURL, '_blank');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.play().then(function() {
        console.log('Audio se está reproduciendo con el sonido desactivado');
    }).catch(function(error) {
        console.log('Error al intentar reproducir el audio:', error);
    });


    document.body.addEventListener('click', function() {
        audio.muted = false;
        audio.play().catch(function(error) {
            console.log('Error al intentar reproducir el audio:', error);
        });
    });
});
