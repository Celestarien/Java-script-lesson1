'use strict';

const myDivs = document.getElementsByTagName('div');
console.log('myDivs', myDivs);
const myDivs2 = document.querySelectorAll('div');
console.log('myDivs2', myDivs2[0]);

console.log('***********************************');

const myParagraphs = document.getElementsByClassName('my-paragraph');
console.log('myParagraph', myParagraphs);
const myParagraphs2 = document.querySelectorAll('.my-paragraph');
console.log('myParagraph', myParagraphs2);

console.log('***********************************');

const myUniqueEl = document.getElementById('js-unique-el');
const myUniqueEl2 = document.querySelector('#js-unique-el');

console.log('***********************************');

const myParagraphsInDivs = document.querySelectorAll('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs);

console.log('***********************************');

const spansPreceededByDivs = document.querySelectorAll('div + span');
console.log('spansPreceededByDivs', spansPreceededByDivs);

console.log('***********************************');

const firstP = document.querySelectorAll('p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP > text', firstP.innerText);

console.log('***********************************');

const secondP = document.querySelectorAll('.second-p');
secondP.innerHTML = '<span>Hello</span>';
console.log('secondP > html', secondP.innerHTML);

console.log('***********************************');

const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');

console.log('***********************************');

const myImg2 = document.querySelector('img');
myImg2.setAttribute('alt', 'UN TEXT');

console.log('***********************************');

//firstP.style.color = 'blue';
//firstP.style.fontSize = '1.5rem';

console.log('***********************************');

myImg.className = 'my-img';
myImg2.classList.add('my-img');
myImg2.classList.remove('my-img');

console.log('***********************************');

const parent = document.querySelector('div');
const nodeToDelete = document.querySelector('div p');
parent.removeChild(nodeToDelete);

console.log('***********************************');

const myBody = document.querySelector('body');
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello';
myBody.appendChild(newDiv); // Écris après le text
myBody.prepend(newDiv); // Écris avant le text

console.log('***********************************');

const btn = document.querySelector('#js-btn');
btn.addEventListener('Click', (event) => {
    console.log('Clicked', event);
});

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

let isClicked = false;
const boutton2 = document.querySelector('#boutton2');
boutton2.addEventListener('Click', () => {
    isClicked = !isClicked;
    if (isClicked){
        boutton2.style.backgroundColor = 'green';
    }
    else {
        boutton2.style.backgroundColor = 'gray';
    }
});

const hoveredBtn = document.querySelector('#button3');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
})

hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'inherit'; // inherit permet de revenir à la couleur initiale
})

console.log('***********************************');

const myform = document.querySelector('#form');
const myinput = document.querySelector('#input');

myinput.addEventListener('keyup', () => {
    console.log('input value : ', myinput.value);
})

myform.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(myinput.value);
})