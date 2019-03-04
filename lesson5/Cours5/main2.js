'use strict';

// Récupérez et logguez dans la console le contenu du titre de la page.

const title = $('h1').text();
console.log('title', title);

// Changez le contenu du titre de la page à 'My page title'.
$('h1').text('My text');


// Récupérez et logguez dans la console le HTML de l'article.
const articleContent = $('#js-article').html();
console.log('articleContent', articleContent);

// Changez le contenu de l'article à :
// <h2>This is my article.</h2>
// <p>This is my article's content.</p>
// <a href="https://example.com">Read more</a>
$('#js-article').html(`
<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>
`);


// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();
console.log('inputValue', inputValue);


// Changez la valeur du champ de saisie à 'Beagles'
const inputValue2 = $('#js-search2').val('Beagles');


// Changez la valeur du placeholder du champ de saisie à 'Search'
$('#js-search-form')[0].addEventListener('submit', (event) => {

    event.preventDefault();
    console.log(event)
    if (event = "chat") {
        console.log("Miaou")
    } else {
        
    }

});


// Ajoutez la classe 'alerte-primary' au <div>.
$('#js-alert').addClass('alert-primary');

// Supprimez la classe 'alert' du <div>
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert alert-warning');

// Vérifier si <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la
if ($('#js-alert').hasClass('alert alert-warning')) {
    $('#js-alert').removeClass('alert alert-warning');
}

// En cliquand sur le bouton #js-btn, basculez la classe 'alert-success'
$('#js-btn')[0].addEventListener('click', () => {
    $('#js-alert').toggleClass('alert-success');
});

//Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('js-btn').css('background-color'));

// Passez la couleur du fond du bouton en #71b8af
$('js-btn').css('background-color', '#71b8af');

// Changer d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '100%'
});


//Vérifiez si le <div> a la classe alert-danger.
// Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton.
// Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.
if ($('#js-danger-alert').hasClass('alert alert-danger')) {
    
    $('p').addClass('text-danger');
    $('#js-danger-alert-btn').removeClass('btn-success');
    
};

$('#js-danger-alert-btn')[0].addEventListener('click', (event) => {

    $('#js-danger-alert-btn').css({
        display: 'none'
    })

});

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.
//document.querySelector('btn').addEventListener('click', () => {}); // Javascript
// $('#btn').click(() => {}); // jQuery
// $('#btn').on('click', () => {}); // jQuery

let counter = 0;
$('#js-btn2').click(() => {
    counter++;
    if (counter > 5) {
        $('#js-btn2').off('click');
    }
    console.log('counter', counter);
});


// Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. Utilisez les méthodes mouseenter, mouseleave ou hover.


$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green');
});

$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue');
});


// Si le paragraphe avec l'id js-tooltip-wrapper est survolé, affichez le span avec l'id js-tooltip. Si il n'est plus survolé, cachez le span.

const tooltip = $('#js-tooltip');
$('#js-tooltip-wrapper').mouseenter(() => {
    tooltip.css('display', 'block');
});

$('#js-tooltip-wrapper').mouseleave(() => {
    tooltip.css('display', 'none');
});


// Show & Hide

$('#js-show-alert').click(() => {
    $('#js-alert2').show();         // Si on veux une animation on peux remplacer "show" par "slideDown" (animation glissé) ou "fadeIn" (animation fondu)
});

$('#js-hide-alert').click(() => {
    $('#js-alert2').hide();     // Si on veux une animation on peux remplacer "hide" par "slideUp" (animation glissé) ou "fadeOut" (animation fondu)
});


// Au clique sur le bouton avec l'id js-btn-fade-in faites apparaître le div avec l'animation fondu (fade in).
// Au clique sur le bouton avec l'id js-btn-fade-out faites disparaître le div avec l'animation fondu (fade out).
$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
});

$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
});

// Animation

$('#js-animation-1')
    .delay(1000)
    .animate({
        left: '300px'
    }, 700)
    .animate({
        width: '200px'
    }, 500)
    .animate({
        height: '700px'
    });