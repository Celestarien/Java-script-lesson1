'use strict'

// Créez un cookie lang égal à 'fr'.

document.cookie = 'lang=fr';

// Créez un cookie previewSeen égal à true qui va expirer le lendement.

document.cookie = `lang2=fr;expires=${new Date('2019-02-12')}`;

// Créez un cookie test égal à 'test' qui va expirer le 31 décembre 2019.

docCookies.setItem('test', 'test', new Date('2019-12-31'));

// Créez un cookie userId égal à 123

docCookies.setItem('userId', 123);
console.log(docCookies.getItem('userId'));

// Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId', 321);

// Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
console.log(docCookies.getItem('lang'));
console.log(docCookies.getItem('previewSeen'));
console.log(docCookies.getItem('userId'));

// Stockage d'un objet
docCookies.setItem('testobject', JSON.stringify({ id: 1}));

// Get an object
const myObj = docCookies.getItem('testobject');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

// Supprimez le cookie test.
docCookies.removeItem('test');
docCookies.setItem('test', '', new Date('2000-01-01'));

// LOCAL STORAGE

// Vérifiez si l'objet LocalStorage est supporté par le navigateur.

if (localStorage) {
    // Créez une entrée greeting égale à 'Hello World'.
    localStorage.setItem('greeting', 'Hello World');

    //  Créez une entrée adIds égale à l'objet {top: 1, bottom: 2}.
    localStorage.setItem('adIds', JSON.stringify({top: 1, bottom: 2}));

    // Récupérez greeting. Modifiez cette entrée à 'Welcome'.
    localStorage.getItem('greeting');

    // Modifier cette entrée à 'Welcome'.
    localStorage.setItem('greeting', 'Welcome');

    // Supprimez greeting du LocalStorage.
    localStorage.removeItem('greeting');

    localStorage.clear(); //supprime toutes les clés
}

// GÉOLOCALISATION

if (navigator.geolocation) {
    const successCallback = (position) => {
        console.log('position: ', position);
        const link = document.createElement('a');
        link.href = `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`;

        link.innerText = 'Clique ici pour vois ta position';

        document.querySelector('body').appendChild(link);
    }
    const errorCallback = (error) => {
        console.log('Erreur: ', error);
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

// Drag and Drop

const dropTo = document.querySelector('#drop-to');
const myDraggable = document.querySelector('#draggable');


myDraggable.addEventListener('dragstart', event => {
    console.log('e', event);
    event.dataTransfer.setData('text', event.target.id);
});

dropTo.addEventListener('dragover', event => {
    event.preventDefault();
});

dropTo.addEventListener('drop', event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const el = document.getElementById(data);
    event.target.appendChild(el);
});

// Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
  const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  console.log(`x: ${x}, y: ${y}`);
}
canvas.addEventListener('click', (event) => {
  getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = '#fff';
ctx.fillStyle = '#fff';

//Head
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//Body
ctx.beginPath();
ctx.arc(200, 360, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

//Hat
ctx.strokeStyle = "#000";
ctx.fillStyle = "#000";
ctx.fillRect(123, 130, 150, 30);    //Haut chapeau
ctx.fillRect(152, 47, 90, 100);     //bas chapeau

// Bras gauche
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(132, 301);
ctx.lineTo(30, 254);
ctx.stroke();

// Bras droit
ctx.beginPath();
ctx.moveTo(256, 305);
ctx.lineTo(331, 267);
ctx.lineTo(370, 210);
ctx.stroke();

// Oeil Gauche
ctx.beginPath();
ctx.arc(177, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// Oeil Droit
ctx.beginPath();
ctx.arc(220, 177, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// Nez
ctx.beginPath();
ctx.strokeStyle = 'orange';     // strokeStyle = contour de la figure
ctx.fillStyle = 'orange';       // fillStyle = intérieur de la figure
ctx.lineWidth = 1;              // lineWidth = taille des traits
ctx.moveTo(199, 186);
ctx.lineTo(124, 211);
ctx.lineTo(199, 210);
ctx.quadraticCurveTo(203, 195, 199, 186);
ctx.stroke(); // Finalise la couleur des trais
ctx.fill(); // Finalise la couleur de la figure

// Écharpe
ctx.beginPath();
ctx.strokeStyle = 'blue';     // strokeStyle = contour de la figure
ctx.fillStyle = 'blue';       // fillStyle = intérieur de la figure
ctx.fillRect(157, 234, 90, 25);
ctx.fillRect(220, 234, 20, 150);