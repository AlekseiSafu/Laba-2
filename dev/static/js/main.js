$(document).ready(function () {
    svg4everybody({});

    $('.hero__top-mobile-btn').click(function() {
        const menu = $('.mobile-menu');
        menu.animate({
            right: 0
        }, 300);
    });

    $('.mobile-menu__exit-btn').click(function() {
        const menu = $('.mobile-menu');
        menu.animate({
            right: '-100%'
        }, 300);
    });
});