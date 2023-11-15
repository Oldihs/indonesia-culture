$(document).ready(function(){
    if (!$('.batik-carousel').hasClass('slick-initialized')) {
        $('.batik-carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev">&laquo;</button>',
            nextArrow: '<button type="button" class="slick-next">&raquo;</button>'
        });
    }
});
