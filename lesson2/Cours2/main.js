'use strict';

function createEl(text){
    console.log('text', text);
    const el = document.createElement('p');
    el.innerText = text;
    return el;
}

function appendEl(container, enfant){
    container.appendChild(enfant)
}

//Navigator
const navigatorSection_Navigator = document.querySelector('#Navigator');

appendEl(navigatorSection_Navigator, createEl(`Nom de navigateur : ${window.navigator.userAgent}`));
appendEl(navigatorSection_Navigator, createEl(`Langage : ${window.navigator.language}`));
appendEl(navigatorSection_Navigator, createEl(`Plateforme : ${window.navigator.platform}`));
appendEl(navigatorSection_Navigator, createEl(`Cookie : ${window.navigator.cookieEnabled}`));

//Screen
const navigatorSection_Screen = document.querySelector('#Screen');

appendEl(navigatorSection_Screen, createEl(`Largeur de l'écran : ${window.screen.width}px`));
appendEl(navigatorSection_Screen, createEl(`Hauteur de l'écran : ${window.screen.height}px`));
appendEl(navigatorSection_Screen, createEl(`Orientation de votre écran : ${window.screen.orientation.type}`));

//Window
const navigatorSection_Window = document.querySelector('#Window');

appendEl(navigatorSection_Window, createEl(`Largeur de la fenêtre : ${window.window.innerWidth}px`));
appendEl(navigatorSection_Window, createEl(`Hauteur de la fenêtre : ${window.window.innerHeight}px`));
appendEl(navigatorSection_Window, createEl(`Largeur de votre navigateur : ${window.window.outerWidth}`));
appendEl(navigatorSection_Window, createEl(`Hauteur du navigateur : ${window.window.outerHeight}`));

//Location
const navigatorSection_Location = document.querySelector('#Location');

appendEl(navigatorSection_Location, createEl(`URL : ${window.URL}`));
appendEl(navigatorSection_Location, createEl(`Lieu de stockage : ${window.location}`));
appendEl(navigatorSection_Location, createEl(`Protocole : ${window.location.protocol}`));