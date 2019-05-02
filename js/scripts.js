
$(document).ready(function(){
    $('.slider-baner').slick({
        dots: true,
        arrows: false,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.news-slider').slick({
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    });

});