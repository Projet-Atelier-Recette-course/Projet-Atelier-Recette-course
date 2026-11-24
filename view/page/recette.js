
// =============================
// FAVORIS
// =============================

// RÉCUPÉRER LES FAVORIS

let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

const boutonsFavoris = document.querySelectorAll(".favori-btn");


// AFFICHER ET GÉRER LES FAVORIS

boutonsFavoris.forEach((bouton, index) => {

    // ID DE LA RECETTE (1 À 4)

    const id = String(index + 1);

    // AFFICHER LE FAVORI SI DÉJÀ ENREGISTRÉ

    if (favoris.includes(id)) {

        bouton.classList.add("selectionne");

        bouton.innerHTML = '<i class="bi bi-heart-fill"></i>';

    }


    // CLIQUER SUR LE CŒUR

    bouton.addEventListener("click", function () {

        if (favoris.includes(id)) {

            favoris = favoris.filter(favori => favori !== id);

            bouton.classList.remove("selectionne");

            bouton.innerHTML = '<i class="bi bi-heart"></i>';

        } else {

            favoris.push(id);

            bouton.classList.add("selectionne");

            bouton.innerHTML = '<i class="bi bi-heart-fill"></i>';

        }

        // SAUVEGARDER

        localStorage.setItem("favoris", JSON.stringify(favoris));

    });

});


// =============================
// FILTRES
// =============================

const filtres = document.querySelectorAll(".filtre");

const recettesAffichees = document.querySelectorAll(".recette-item");


filtres.forEach(filtre => {

    filtre.addEventListener("click", function () {

        filtres.forEach(bouton => {

            bouton.classList.remove("actif");

        });

        this.classList.add("actif");

        const type = this.dataset.filtre;


        recettesAffichees.forEach(recette => {

            const prix = Number(recette.dataset.prix);

            const temps = Number(recette.dataset.temps);

            const proteines = recette.dataset.proteines;

            let afficher = true;


            if (type === "moins3") {

                afficher = prix < 3;

            }

            if (type === "3a5") {

                afficher = prix >= 3 && prix <= 5;

            }

            if (type === "5a8") {

                afficher = prix >= 5 && prix <= 8;

            }

            if (type === "rapide") {

                afficher = temps < 30;

            }

            if (type === "proteines") {

                afficher = proteines === "oui";

            }


            recette.style.display = afficher ? "" : "none";

        });

    });

});
