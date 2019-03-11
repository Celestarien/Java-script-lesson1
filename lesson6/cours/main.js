'use strict'

// Cache le sous-menu au chargement de la page
$(document).ready( function () {
$("#dropdown-menu").hide();
})


$("#navbarDropdownMenuLink").click(function(){
     // Si le sous-menu était déjà ouvert, on le referme :
    if ($(this).next("#navbarDropdownMenu:visible").length != 0) {
        $(this).next("#navbarDropdownMenu").slideUp("normal");
    }
    // Si le sous-menu est caché, on ferme les autres et on l'affiche :
    else {
        $(".navigation navbarDropdownMenu").slideUp("normal");
        $(this).next("#navbarDropdownMenu").slideDown("normal");
    }
    // On empêche le navigateur de suivre le lien :
    return false;
});

    // Récupère la date d'aujourd'hui
    var today = new Date();
    //Récupère l'id du span et le modifie
    $("#js-current-year").text(today.getFullYear()); 


    // Body
    $(".btn").click(function(){
    // Récupère les valeurs de poids et de taille
    const poids = Number($("#js-bmi-weight").val());
    const hauteur = Number($("#js-bmi-height").val());
    
    // Résultat du calcul
    const résultat = poids / ((hauteur/100) * (hauteur/100));

    // Ajout d'un élément 'div'
    const div_en_plus = document.createElement("div");
    
    //Ajout d'un id à ce dernier
    div_en_plus.setAttribute("id", "div_en_plus");
    $("#js-bmi-form").append(div_en_plus);
    div_en_plus.style.backgroundColor="#4286f4";
    div_en_plus.style.borderRadius="10px";
    
    if (isNaN(résultat)){
        alert("⛔ Erreur ! ⛔");
    }else {
        if (résultat < 18.5) {
            const level = "Considered underweight";
            $("#div_en_plus").text("Your Body Mass Index is " + résultat + "." + level + ".");
            
            
        }
    else if (résultat >= 18.5 && résultat < 25){
        const level = "A healthy weight";
        $("#div_en_plus").text("Your Body Mass Index is " + résultat + "." + level + ".");
        
    }
    else {
        const level = "Considered overweight";
        $("#div_en_plus").text("Your Body Mass Index is " + résultat + ". " + level + ".");
        
    }
}});

// Tableau


const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
        title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
        description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
        img: 'http://lorempixel.com/200/200/food'
    },
];

bmiFacts.forEach(function(element){
    // Ajout d'un élément 'div'
    const div_bmi = document.createElement("div");
    
    //Ajout d'un id à ce dernier
    div_bmi.setAttribute("class", "div_bmi");
    div_bmi.innerHTML=`
    <div class="col col-12 col-sm-6 col-lg-3 mb-3">
  <div class="card h-100">
    <img src="${element.img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.description}</p>
    </div>
  </div>
</div>
    `;
    $("#js-facts").append(div_bmi);

})


// PUB

let compteur = 0;
$("#js-ad-close").click(function(){
    if (compteur == 0){
        const url = $("#js-ad a").attr('href');
        window.open(url, '_blank');
        compteur += 1;
}
    else {
        $("#mycontainer").remove();
    }
});

$(".btn").click(function(){
    $("#js-contact-form-birthday").datepicker();
  } );