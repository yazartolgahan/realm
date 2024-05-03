$(window).resize(function() {
    x = $('.hamburger-menu').css('display');
    if (x != 'none') {
        $("html, body").animate({
            scrollTop: 0
        });
    }
});

new cursoreffects.characterCursor({
    element: document.querySelector("#character"),
    characters: ["r", "e", "a", "l", "m", "2", "5", "6"],
    font: "15px serif",
    colors: [
        "#6622CC",
        "#A755C2",
        "#B07C9E",
        "#B59194",
        "#D2A1B8",
    ],
    characterLifeSpanFunction: function() {
        return Math.floor(Math.random() * 6 + 25);
    },
    initialCharacterVelocityFunction: function() {
        return {
            x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
            y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
        }
    },
    characterVelocityChangeFunctions: {
        x_func: function(age, lifeSpan) {
            return (Math.random() < 0.5 ? -1 : 1) / 30;
        },
        y_func: function(age, lifeSpan) {
            return (Math.random() < 0.5 ? -1 : 1) / 15;
        },
    },
    characterScalingFunction: function(age, lifeSpan) {
        let lifeLeft = lifeSpan - age;
        return Math.max(lifeLeft / lifeSpan * 2, 0);
    },
    characterNewRotationDegreesFunction: function(age, lifeSpan) {
        let lifeLeft = lifeSpan - age;
        return lifeLeft / 5;
    }
})

function bodyOverlay() {
    var audio = new Audio('/realm_assets/audio/walk_thru_tall_grass.mp3');
    audio.volume = 0.175;
    audio.play();

    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    });


    $('body').css('position', 'static');
    var $carousel = $('.owl-carousel');
    if ($carousel.length > 0) {
        $carousel.data('owl.carousel')._invalidated.width = true;
        $carousel.trigger('refresh.owl.carousel');
    }
    $('.body-overlay').hide();
}


$('.owl-carousel').owlCarousel({
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    autoplay: false,
    loop: true,
    margin: 5,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            dots: true

        },
        600: {
            items: 1,
            dots: true
        },
        1081: {
            items: 4,
            dots: false
        },
        2000: {
            items: 4,
            dots: false
        }
    }
})

function showMobileMenu(x) {
    const hm_display = $('.hamburger-menu').css('display');
    if (hm_display == 'none') {
        x.html('<i class="fa-solid fa-x"></i> ');
        $('.hamburger-menu').css('display', 'flex');
        $('body').css("position", "sticky");
        $('body').css("overflow", "hidden");
    } else if (hm_display == 'flex') {
        x.html('   <div class="mb-line"></div><div class="mb-line"></div><div class="mb-line"></div> ');
        $('.hamburger-menu').css('display', 'none');
        $('body').css("position", "static");
        $('body').css("overflow", "auto");
    } else {
        $('.hamburger-menu').css('display', 'none');
        x.html('   <div class="mb-line"></div><div class="mb-line"></div><div class="mb-line"></div> ');
        $('body').css("position", "static");
        $('body').css("overflow", "auto");
    }
}

function dnSupportModal(x) {
    $('.dn-support-modal').css('display', 'flex');
    setTimeout(() => {
        $('.dn-support-modal').css('display', 'none');
    }, 3500);
}

function showAttachZipBox() {
    x = $('#attach-zip-box').css('display');

    if (x == 'none') {
        $('#attach-zip-box').css('display', 'flex');
    } else if (x == 'flex') {
        $('#attach-zip-box').css('display', 'none');
    } else {
        $('#attach-zip-box').css('display', 'none');
    }
}

function previewAzcFile(e) {
    var file_name = e.val().replace(/.*(\/|\\)/, '');

    if (file_name) {
        $('.azc-upload-label').css('display', 'none');
        $('#preview-name').html(file_name);
        $('#azc-preview').css('display', 'flex');
        $('.azc-submit').css('color', '#fff');
        $('.azc-submit').css('cursor', 'pointer');
    }
}

function checkUrl() {
    var hash = window.location.hash;
    hash = hash.replace('#', '');

    if (hash !== '') {
        w_height = $(window).height();
        w_width = $(window).width();

        if (w_width < 768) {
            w_height = 0;
        }


        $('html, body').animate({
            scrollTop: ($("[data-id=" + hash + "]").offset().top - (w_height / 4))
        }, 2, function() {
            window.location.hash = '';
        });
    }
    history.replaceState(null, null, ' ');
}
