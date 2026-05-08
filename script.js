function afficherMessage(){

    document.getElementById("message").innerHTML =
    "Bienvenue dans notre centre de langues !";

}

function verifierFormulaire(){

    let nom =
    document.getElementById("nom").value;

    let email =
    document.getElementById("email").value;

    let telephone =
    document.getElementById("telephone").value;

    let message =
    document.getElementById("messageTexte").value;

    let resultat =
    document.getElementById("resultat");

    if(nom === "" || email === "" ||
       telephone === "" || message === ""){

        resultat.innerHTML =
        "Veuillez remplir tous les champs.";

        resultat.style.color = "red";

        return false;
    }

    else{

        resultat.innerHTML =
        "Inscription effectuée avec succès !";

        resultat.style.color = "green";

        return false;
    }
}