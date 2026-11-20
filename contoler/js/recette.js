
// RÉCUPÉRER LES FAVORIS ENREGISTRÉS

let favoris = JSON.parse(localStorage.getItem("favoris")) || [];


// METTRE À JOUR LES CŒURS

function afficherFavoris() {

    const boutons = document.querySelectorAll(".favori-btn");

    boutons.forEach(bouton => {

        const id = bouton.dataset.favori;
        const coeur = bouton.querySelector("i");

        if (favoris.includes(id)) {

            coeur.classList.remove("bi-heart");
            coeur.classList.add("bi-heart-fill");

            bouton.classList.add("actif");

        } else {

            coeur.classList.remove("bi-heart-fill");
            coeur.classList.add("bi-heart");

            bouton.classList.remove("actif");

        }

    });

}


// CLIQUER SUR UN FAVORI

document.querySelectorAll(".favori-btn").forEach(bouton => {

    bouton.addEventListener("click", function() {

        const id = this.dataset.favori;

        if (favoris.includes(id)) {

            // RETIRER DES FAVORIS

            favoris = favoris.filter(favori => favori !== id);

        } else {

            // AJOUTER AUX FAVORIS

            favoris.push(id);

        }

        // ENREGISTRER LES FAVORIS

        localStorage.setItem("favoris", JSON.stringify(favoris));

        // ACTUALISER LES CŒURS

        afficherFavoris();

    });

});


// AFFICHAGE AU CHARGEMENT

afficherFavoris();
