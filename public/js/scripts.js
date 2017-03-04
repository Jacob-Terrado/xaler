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
});

$(function () {
    $('.carousel.carousel-slider').carousel({
        full_width: true,
        indicator: true,

    });
});

function home() {
    window.location.href = "/";
}