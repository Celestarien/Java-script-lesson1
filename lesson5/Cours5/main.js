'use strict';

// Quand le rendu de la page sera terminé, utilisez les selecteurs jQuery pour sélectionner et logguer:
$(document).ready(() => {
    //     toutes les balises <div>
    const divs = $('div');
    console.log('divs', divs);

    //     toutes les balises avec le nom de classe js-paragraph
    console.log('class', $('.js-paragraph'));
    
    //     la balise avec l'id js-unique-paragraph
    console.log('id', $('#js-unique-paragraph'));

    //     le premier titre <h3>
    console.log('first h3', $('h3:first'));
    
    //     le premier <th> du premier <tr>
    console.log('premier th', $('tr:first th:first'));

    //     le premier <td> du chaque <tr>
    console.log('premier td', $('tr td:first'));
    
    //     tous les liens
    console.log('tous les liens', $('a'));
    
    //     tous les lien externes (ceux qui ont l'attribut target égal à _blank)
    console.log('tous les liens externes', $('a[target="_blank"]'));
    
    //     tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
    console.log('tous les liens internes', $('a[target=""'));
    
    //     tous les boutons dans un formulaire
    console.log('tous les boutons dans un formulaire', $('but'));
});

