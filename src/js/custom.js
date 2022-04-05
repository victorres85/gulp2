//jQuery( function($){ - opcao para evitar conflito de bibliotecas
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 4
    })

    $(".featured-item a").addClass('btn btn-primary');



});

