jQuery(function ($) { //- opcao para evitar conflito de bibliotecas
    //$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoWidth: true,
        items: 4
    })

    $(".featured-item a").addClass('btn btn-primary');



});

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var confirmation = document.getElementById('confirmationBtn')
var noConfirmation = document.getElementById('noConfirmationBtn')
var confirmation = document.getElementById('confirmationBtn')
var noConfirmation = document.getElementById('noConfirmationBtn')


function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
        alert('Obrigado por adicionar seu contato, te avisaremos assim que nosso estoque voltar!', 'success')
    })

}
if (confirmation) {
    confirmation.addEventListener('click', function () {
        alert('O vinho foi adicionado ao seu carrinho', 'success')
    })

}
if (noConfirmation) {
    noConfirmation.addEventListener('click', function () {
        alert('O vinho não foi adicionado ao seu carrinho', 'danger')
    })

}
if (confirmation2) {
    confirmation2.addEventListener('click', function () {
        alert('O vinho foi adicionado ao seu carrinho', 'success')
    })

}
if (noConfirmation2) {
    noConfirmation2.addEventListener('click', function () {
        alert('O vinho não foi adicionado ao seu carrinho', 'danger')
    })

}


