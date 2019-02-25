'use strict';

// setTimeout

// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.

setTimeout(() => {
    console.log('Hello');
}, 3000);

// Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.

setTimeout(() => {
    console.log('Logged after 5 seconds');
}, 5000);

// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.

window.addEventListener('click', () => {
    setTimeout(() =>{
        console.log('Clicked');
    }, 3000);
});

// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.

var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
document.getElementsByTagName('body')[0].appendChild(iDiv);
iDiv.addEventListener('mouseover', () => {
    console.log('I was hovered 5.5 seconds ago');
}, 5500);

// Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.

const myImg = document.createElement('img');
myImg.src = 'http://lorempixel.com/400/200';

// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
myImg.onload = () => {
    console.log('Done !');
    document.body.appendChild(myImg);
}

// En cas d'erreur de chargement, logguez dans la console 'Error'.

myImg.onerror = () => {
    console.log('Error');
}

// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). Ensuite affichez sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.

let xhttp =new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        const rawvalue = xhttp.responseText;
        const parsedvalue = JSON.parse(rawvalue);
        
        console.log(xhttp.responseText)
        const hanSoloInfo = document.createElement('div');
        hanSoloInfo.innerHTML = `
        <p>Nom: ${parsedvalue.name}</p>
        <p>Sexe: ${parsedvalue.gender}</p>
        <p>Date de naissance: ${parsedvalue.birth_year}</p>
        `
        document.body.appendChild(hanSoloInfo);
    }
};
xhttp.open('GET', 'https://swapi.co/api/people/14/', true);
xhttp.send();

// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profiles sur votre page.

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = () => {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
        console.log(xhttp2.responseText);
        const rawvalue = xhttp2.responseText;
        const parsedvalue = JSON.parse(rawvalue);
        
        parsedvalue.results.forEach(person => {
            const personDiv = document.createElement('div');
            personDiv.innerHTML = `
            <hr>
            <p>Nom: ${person.name}</p>
            <p>Sexe: ${person.gender}</p>
            <p>Date de naissance: ${person.birth_year}</p>
            `
            document.body.appendChild(personDiv);
        })
    }
};

xhttp2.open('GET', 'https://swapi.co/api/people/?search=skywalker/', true);
xhttp2.send();

// Récupérez et affichez les données de 5 planètes avec les ids suivants:

const planets = [1, 2, 3, 4, 5];
planets.forEach(planetID => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.responseText);
            const rawvalue = xhttp.responseText;
            const parsedvalue = JSON.parse(rawvalue);
            // LOL
        }
    xhttp.open('GET', 'URL'+planetID, true);
    xhttp.send();
    };
})

// Créez un formulaire de connexion qui comprend les champs email et mot de passe. A la soumission du formulaire, envoyez la requête de connexion à l’API https://reqres.in/. En cas de succès, mettez le token dans les cookies, en cas d’erreur, affichez l’erreur sous le formulaire.

const myPromise = new Promise((resolve, reject) => {
    if (5 > 3) {
        setTimeout(() => {
            resolve('Hello');
        }, 10000);
    } else {
        reject('Error!');
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

const getNum = new Promise((resolve, reject) => {
    resolve(10);
});
getNum
    .then(num => {
        return num * 2;
    })
    .then(num => {
        return num - 1;
    })
    .then(num => {
        console.log('res', resolve);
    })
    .catch(err => {
        console.log('err', reject);
    });


const myprms = (value) => {
    return new Promise((resolve, reject) => {
    if (value < 5) {
        console.log('resolve', resolve)
    } else {
        console.log('reject', reject)
    }
    })
}

myprms(7)
    .then(num => {return value})
    .then(num => {return reject});


//Récuperer et afficher un artcicle avec l'id 25
fetch('https://jsonplaceholder.typicode.com/posts/25')
.then(reponse => reponse.json())
.then(result => {
    console.log('result', result);
});

//Récuperer et afficher un artcicle avec l'id 5
fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(reponse => reponse.json())
    .then(result => {
        console.log('result', result);
    });
    
    
// Formulaire
const signupData = {
    email: 'email@gmail.com',
    password: 'qwerty',
    lastname: 'Toto'
};

fetch('https://reqres.in/api/register', {
    method: 'POST',
    body: JSON.stringify(signupData),
    headers: {
        'Content-Type': 'application/json'
    }
    .then(response => response.json())
    .then(result => console.log('result', result))
});

// Modifier l'utilisateur avec l'id 2
//PUT: https://reqres.in/api/users/2 avec l'objet

fetch('https://reqres.in/api/users/2');



const userdate = {
    name: 'myname',
    job: 'étudiant'
}

// Random gif image

fetch('https://api.giphy.com/v1/gifs/random?api_key=Vice66UfqZAwTnUbJMjPqeyhaoaoh3zZ')
.then(response => response.json())
.then(result => {
    console.log('result', result)
    const myImg = document.createElement('img');
    myImg.src = '';
})

// Créez un bouton de deconnexion. Au clique sur ce bouton effacez le token sauvegardé dans les cookies.
