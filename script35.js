function valeurTitre1()

{
    let titre = document.getElementById("id_h1")
    console.log(titre.innerText);
}

//let creation de variable
//titre cest nom de variable 
//le egal est une assignation
//doccument cest objet principal de la page qui permet de recuperer dautre element  de la page 
//get element by id methode qui permet de recupere une element par son id 
// a la fin de lexecution de la ligue 2 la variable titre contient lobjet html de la ligne 8 du fichier 35.html

function changerTitre()

{
    let titre = document.getElementById("id_h1");
    titre.innerText = "titre2"
}

// letboutonafficher = document.getelementbyId(afficherh1)
//let boutonModif= document.getElementbyID(modifH1)

