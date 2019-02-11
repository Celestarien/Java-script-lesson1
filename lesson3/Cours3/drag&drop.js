'use strict';

const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg']; // Le type de format accepté
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb           Taille maximum l'image
const dropZone = document.querySelector('#js-drop-to'); // Zone de drop
const filesList = document.querySelector('#js-file-list'); // Liste des fichiers

dropZone.addEventListener('dragover', (e) => onDragOver(e));
dropZone.addEventListener('drop', (e) => onDrop(e));
dropZone.addEventListener('dropstart', () => changeDropZoneState(true));
dropZone.addEventListener('dropopen', () => changeDropZoneState(false));

function onDragOver(event) {
  event.stopPropagation(); // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement
  event.preventDefault(); // Évite le comportement par défaut
}

function onDrop(e) {
  e.stopPropagation(); // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement
  e.preventDefault(); // Évite le comportement par défaut
  filesList.innerHTML = ''; // Récupère ou définit la syntaxe HTML décrivant les descendants de l'élément
  const filesUploaded = Array.from(e.dataTransfer.files); // Créer un tableau avec les fichiers importés
  filesUploaded.forEach((file, index) => handleUploadedFile(file, index)); // Permet d'exécuter une fonction donnée sur chaque élément du tableau.
  changeDropZoneState(false); // Change le status de la zone de drop
}

function changeDropZoneState(isDragging) {      // Créer la fonction "changeDropZoneState"
  isDragging ? 
    dropZone.classList.add('js-is-dragged-over') :      // Ajoute une classe à la liste des classes
    dropZone.classList.remove('js-is-dragged-over');    // Supprime une classe à la liste des classes
}

function handleUploadedFile(file, index) {  // Créer la fonction "handleUploadedFile"
  const error = getUploadError(file);       // Si une erreur se produit
  error ?
    console.warn(`"${file.name}" Upload Error: ${error}`) : //Message de l'erreur dans la console       ${file.name} = nom du fichier      ${error} = l'erreur
    filesList.appendChild(createListEl(file, index)); // Ajoute et créé une liste d'élément
}

function createListEl(file, index) {        // Créer la fonction "createListEl"
  const el = document.createElement('li'); // Création de la constante 'el' 
  el.setAttribute('id', 'file-list-item-'+index);   // Ajoute un attribut à la constante "el"
  el.className = 'list-group-item file-list-item';  // Ajoute une classe à l'élément "el"

  // add image
  const elPreview = document.createElement('img'); // Créer la constante "elPreview"
  elPreview.classList.add('file-list-item-preview');    // Ajoute une classe à la constante
  el.appendChild(elPreview);        // Ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié
  renderImage(file, 'file-list-item-'+index);

  // add name
  const elName = document.createElement('p');   //Créer la constante "elName"
  elName.classList.add('file-list-item-name');  // Ajoute une classe à la constante
  elName.innerText = file.name;                 // Récupère ou définit la syntaxe HTML décrivant les descendants de l'élément
  el.appendChild(elName);                       // Ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié

  return el;        // Retourne "el"
}

function renderImage(file, elId) {      // Créer la fonction "renderImage"
  const reader = new FileReader();      // Créer la constante "reader"
  reader.onload = (e) => {              // Exécute un script JavaScript immédiatement après une page a été chargée:
    const img = document.querySelector(`#${elId} img`); // Créer la constante "img"
    img.setAttribute('src', e.target.result);
  }
  reader.readAsDataURL(file);
}

function getUploadError(file) {     // Créer la fonction "getUploadError"
  if (file.size > MAX_IMG_SIZE) {   // Si la taille de l'image et supérieur à la taille maximal définit
    return 'Your image is too big'; // Ça dit que l'image est trop grande
  } else if (!ACCEPTED_FORMATS.includes(file.type)) {   // Si l'image est différente des formats acceptés
    return 'Image of this format is not accepted'; // Ça dit que le format d'image n'est pas accepté
  } else {
    return;
  }
}