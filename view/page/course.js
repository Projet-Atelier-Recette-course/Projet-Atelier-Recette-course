// =============================
// RÉCUPÉRER LES DONNÉES
// =============================

const CLE_COURSES = "myCulinaCourses";

const listeCourses = document.getElementById("listeCourses");

const messageVide = document.getElementById("messageVide");

const resumeCourses = document.getElementById("resumeCourses");

const prixTotalElement = document.getElementById("prixTotal");


// RÉCUPÉRER LES RECETTES ENREGISTRÉES

let courses = JSON.parse(localStorage.getItem(CLE_COURSES)) || [];


// =============================
// FORMAT DU PRIX
// =============================

function euros(montant) {

    return montant.toLocaleString("fr-FR", {

        style: "currency",

        currency: "EUR"

    });

}


// =============================
// PRIX ESTIMÉ D'UN INGRÉDIENT
// =============================

function prixIngredient(recette) {

    return (recette.prixPersonne * 2) / recette.ingredients.length;

}


// =============================
// CALCUL DU PRIX D'UNE RECETTE
// =============================

function calculerPrixRecette(recette) {

    const prixUnIngredient = prixIngredient(recette);

    let total = 0;

    recette.ingredients.forEach(ingredient => {

        total += prixUnIngredient
            * ingredient.quantite
            * recette.quantiteRecette;

    });

    return total;

}


// =============================
// SAUVEGARDER LES DONNÉES
// =============================

function sauvegarder() {

    localStorage.setItem(CLE_COURSES, JSON.stringify(courses));

    afficherCourses();

}


// =============================
// AFFICHER LES RECETTES
// =============================

function afficherCourses() {

    listeCourses.innerHTML = "";


    // VÉRIFIER SI LA LISTE EST VIDE

    const listeVide = courses.length === 0;

    messageVide.classList.toggle("d-none", !listeVide);

    resumeCourses.classList.toggle("d-none", listeVide);


    if (listeVide) {

        prixTotalElement.textContent = euros(0);

        return;

    }


    // PRIX TOTAL

    let totalGeneral = 0;


    // PARCOURIR LES RECETTES

    courses.forEach((recette, indexRecette) => {

        const totalRecette = calculerPrixRecette(recette);

        totalGeneral += totalRecette;


        // =============================
        // AFFICHER LES INGRÉDIENTS
        // =============================

        const ingredientsHTML = recette.ingredients.map((ingredient, indexIngredient) => {

            return `

                <div class="ligne-ingredient">

                    <span class="nom-ingredient">

                        ${ingredient.nom}

                        ${ingredient.quantite > 1
                            ? `<span class="text-success fw-semibold">× ${ingredient.quantite}</span>`
                            : ""}

                    </span>


                    <div class="controle-ingredient">

                        <!-- MOINS -->

                        <button type="button"
                            aria-label="Retirer ${ingredient.nom}"
                            data-action="moins-ingredient"
                            data-recette="${indexRecette}"
                            data-ingredient="${indexIngredient}">

                            <i class="bi bi-dash-lg"></i>

                        </button>


                        <!-- QUANTITÉ -->

                        <span class="fw-semibold">

                            ${ingredient.quantite}

                        </span>


                        <!-- PLUS -->

                        <button type="button"
                            aria-label="Ajouter ${ingredient.nom}"
                            data-action="plus-ingredient"
                            data-recette="${indexRecette}"
                            data-ingredient="${indexIngredient}">

                            <i class="bi bi-plus-lg"></i>

                        </button>

                    </div>

                </div>

            `;

        }).join("");


        // =============================
        // CRÉER LA CARTE
        // =============================

        listeCourses.insertAdjacentHTML("beforeend", `

            <div class="col-12">

                <article class="card recette-course">

                    <div class="row g-0">


                        <!-- IMAGE -->

                        <div class="col-md-3">

                            <img
                                src="${recette.image}"
                                class="photo-recette"
                                alt="${recette.nom}">

                        </div>


                        <!-- INFORMATIONS -->

                        <div class="col-md-9">

                            <div class="card-body p-4">


                                <!-- NOM ET POUBELLE -->

                                <div class="d-flex flex-wrap justify-content-between align-items-start gap-3">

                                    <div>

                                        <h2 class="h5 nom-recette">

                                            ${recette.nom}

                                        </h2>

                                        <p class="text-secondary small mb-2">

                                            <i class="bi bi-clock"></i>

                                            ${recette.temps}

                                        </p>

                                    </div>


                                    <!-- SUPPRIMER -->

                                    <button
                                        class="btn btn-outline-danger btn-sm rounded-circle"
                                        type="button"
                                        title="Supprimer cette recette"
                                        aria-label="Supprimer ${recette.nom}"
                                        data-action="supprimer-recette"
                                        data-recette="${indexRecette}">

                                        <i class="bi bi-trash"></i>

                                    </button>

                                </div>


                                <!-- QUANTITÉ ET PRIX -->

                                <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">

                                    <div class="controle-quantite">


                                        <!-- MOINS RECETTE -->

                                        <button type="button"
                                            aria-label="Diminuer le nombre de recettes"
                                            data-action="moins-recette"
                                            data-recette="${indexRecette}">

                                            <i class="bi bi-dash-lg"></i>

                                        </button>


                                        <span class="fw-bold">

                                            ${recette.quantiteRecette} recette(s)

                                        </span>


                                        <!-- PLUS RECETTE -->

                                        <button type="button"
                                            aria-label="Augmenter le nombre de recettes"
                                            data-action="plus-recette"
                                            data-recette="${indexRecette}">

                                            <i class="bi bi-plus-lg"></i>

                                        </button>

                                    </div>


                                    <!-- PRIX -->

                                    <div class="prix-recette">

                                        ${euros(totalRecette)}

                                    </div>

                                </div>


                                <!-- LISTE DES INGRÉDIENTS -->

                                <h3 class="h6 fw-bold mb-1">

                                    Ingrédients nécessaires

                                </h3>

                                <div>

                                    ${ingredientsHTML}

                                </div>

                            </div>

                        </div>

                    </div>

                </article>

            </div>

        `);

    });


    // AFFICHER LE PRIX TOTAL

    prixTotalElement.textContent = euros(totalGeneral);

}


// =============================
// GESTION DES BOUTONS
// =============================

listeCourses.addEventListener("click", function (e) {

    // RÉCUPÉRER LE BOUTON CLIQUÉ

    const bouton = e.target.closest("button[data-action]");

    if (!bouton) return;


    const indexRecette = Number(bouton.dataset.recette);

    const recette = courses[indexRecette];

    if (!recette) return;


    const action = bouton.dataset.action;


    // =============================
    // SUPPRIMER UNE RECETTE
    // =============================

    if (action === "supprimer-recette") {

        courses.splice(indexRecette, 1);

    }


    // =============================
    // AJOUTER UNE RECETTE
    // =============================

    if (action === "plus-recette") {

        recette.quantiteRecette += 1;

    }


    // =============================
    // DIMINUER UNE RECETTE
    // =============================

    if (action === "moins-recette") {

        if (recette.quantiteRecette > 1) {

            recette.quantiteRecette -= 1;

        } else {

            // SUPPRIMER LA RECETTE SI LA QUANTITÉ ARRIVE À 0

            courses.splice(indexRecette, 1);

        }

    }


    // =============================
    // GESTION DES INGRÉDIENTS
    // =============================

    if (
        action === "plus-ingredient" ||
        action === "moins-ingredient"
    ) {

        const indexIngredient = Number(bouton.dataset.ingredient);

        const ingredient = recette.ingredients[indexIngredient];

        if (!ingredient) return;


        // AJOUTER UN INGRÉDIENT

        if (action === "plus-ingredient") {

            ingredient.quantite += 1;

        }


        // RETIRER UN INGRÉDIENT

        if (action === "moins-ingredient") {

            if (ingredient.quantite > 0) {

                ingredient.quantite -= 1;

            }

        }

    }


    // SAUVEGARDER ET ACTUALISER

    sauvegarder();

});


// =============================
// COMMENCER À CUISINER
// =============================

document.getElementById("commencerCuisine").addEventListener("click", function () {

    if (courses.length === 0) return;


    // OUVRIR LA PREMIÈRE RECETTE

    window.location.href = `details.html?id=${courses[0].id}`;

});


// =============================
// AFFICHAGE AU CHARGEMENT
// =============================

afficherCourses();