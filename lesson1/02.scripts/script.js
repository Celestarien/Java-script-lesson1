let a = 20/2

if (a >= 10 || a > 15){
    console.log('Yes');
}
else {
    console.log('No');
}

console.log('*********************************************')

const clientID = 1;

(typeof clientID === 'number') ? console.log('Saved') : console.log('Cancel');

console.log('*********************************************')

function myFync(){
    console.log('Hello world');
}

function returnFunc(text = ' '){
    return text.toUpperCase();
}

console.log(returnFunc('Hello World'));

const sum = (param1, param2) => {
    console.log('param1', param1);
    console.log('param2',param2);
    return param1, param2;
}

const sum = (p1,p2) => p1 + p2;
console.log('sum', sum(2));

console.log('*********************************************')

const trucate = (str, length, trail = '...') => {       //str = chaine de caractère, length = la longueur de la chaine
    if (str.length > length){
        return str.substring(0, length) + trail;
    }else {
        return str;
    }

}

console.log('*********************************************')

//Tableau :

const myArr = [1, 'Hello', true];

console.log(myArr[0]);
console.log(myArr[myArr.length - 1]);

const myArr1 = myArr;
myArr[0] = 'world';

console.log('myArr', myArr)
console.log('myArr1', myArr1)

console.log('*********************************************')

var tableau1 = [1,2,3];
var PremierÉlément = tableau1.shift();      //shift() permet de récupérer le 1er élément du tableau
console.log(tableau1);
console.log(PremierÉlément);

// **************************************

var tableau2 = [1,2,3];
console.log(tableau2.unshift(4,5));         // unshift() permet de rajouter des valeurs dans un tableau
console.log(tableau2);

// ***************************************

var animaux = ['cochon', 'goats', 'mouton'];

console.log(animaux.push('vache'));         // push() permet de rajouter 1 ou plusieurs éléments à la fin d'un tableau

// ***************************************

var plantes = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plantes.pop());         // pop() permet de supprimer le dernier élément d'un tableau

// ***************************************

var tableau3 = ['a','b','c'];
var tableau4 = ['d','e','f'];
console.log(tableau3.concat(tableau4));         //concat() permet de fusioner 1 ou plusieurs tableaux 

// ***************************************

var animaux2 = ['fourmie','bison','camel','cannard','éléphant']
console.log(animaux2.slice(2));             // slice(2) permet d'enlever les 2 premiers éléments
console.log(animaux2.slice(2,4));           // slice(2,4) conserve les éléments de 3 à 4
console.log(animaux2.slice(1,5))            //slice(1,5) conserve les éléments de 2 à 5

// ***************************************

var mois = ['Janvier','Mars','Avril','Juin']
mois.splice(1,0, 'Février');                //splice(1,0,'Février') permet d'ajouter le mois de Février dans la tableau à la 2-1ème place
mois.splice(4,1,'Mai')                      //splice(4,1,'Mai') permet de remplacer le le mois de Juin par Mai

//Objet:

const myObj = {
    name: 'Pierre',
    car {
        color: 'red',
        wheels: 4,
    }
}

console.log(myObj.name);
console.log(myObj.car.color);

let myProp = 'car'
console.log(myObj['car']);
console.log(myObj[myProp]);

const myObj2 = myObj;
myObj.name = 'Laura';
console.log('myObj', myObj)
console.log("myObj2", myObj2)



const cart = [
    { name: 'Mathieu', age: 18, hobby: 'Snowboard'},                    //Les données de l'utilisateur Mathieu
    { name: 'Julien', age: 19, hobby: 'Rien x)'}                        //Les données de l'utilisateur Julien
    { name: 'Thibaut', age: 12, hobby: 'jeux vidéo'}                    //Les données de l'utilisateur Thibaut
];

const findObjectByProperty = (prop, value) => {
    return cart.find(el => {
        console.log('el', el);
        el[prop] === value;
        return el;
    })
}
