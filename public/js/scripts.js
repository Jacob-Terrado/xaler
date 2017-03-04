$(document).ready(function () {
    $(".menu-button").sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true
    });

    $('.cart-button').sideNav({
            menuWidth: 300,
            edge: 'right',
            closeOnClick: true,
            draggable: true
        }
    );

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
        duration: 300
    });
});