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
        autoplay: true,
        smartSpeed: 500,
        dots: false,
        loop: true,
        nav : false,
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


timeSong = 0;
document.addEventListener('DOMContentLoaded', function () {
    const volumeDownIcon = document.getElementById('volume-down');
    const volumeUpIcon = document.getElementById('volume-up');

    document.getElementById('volume-control').addEventListener('click', function () {
        var audio = document.getElementById('background-music');
        if (volumeDownIcon.classList.contains('hidden')) {
            volumeDownIcon.classList.remove('hidden');
            volumeUpIcon.classList.add('hidden');
            audio.pause();
            timeSong = audio.currentTime;
            audio.currentTime = 0
            audio.pause();
            audio.volume = 0;

            
        } else {
            volumeDownIcon.classList.add('hidden');
            volumeUpIcon.classList.remove('hidden');
            audio.play();
            audio.volume = 1;
            audio.currentTime = timeSong;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const ignoreButton = document.getElementById('ignore-button');
    const upButton = document.getElementById('up-button');
    const overlay = document.getElementById('overlay');

    ignoreButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
    upButton.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.getElementById('volume-control').click()

    });
});


document.getElementById('whatsapp-form-account').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = encodeURIComponent(document.getElementById('user-name').value.trim());
    var documento = encodeURIComponent(document.getElementById('user-document').value.trim());
    
    if (name && documento) {
        var whatsappMessage = `Hola Gabi, ¿como estas?, soy *${name}* quiero *recibir datos de la cuentas a transferir para* la boda de Gabriel y Micaela. \nMi DNI/CUIL es *${documento}*`;
        var whatsappURL = `https://api.whatsapp.com/send?phone=543874565402&text=${whatsappMessage}`;
        
        window.open(whatsappURL, '_blank');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});