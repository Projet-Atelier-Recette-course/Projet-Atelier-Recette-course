// =============================
// TOUTES LES RECETTES
// =============================

const recettes = {

    // RECETTE 1

    1: {

        nom: "Poulet citron & herbes rôties",
        image: "../images/poulet-roti-au-citron-et-herbes-de-provence.jpg",
        temps: "25 min",
        difficulte: "Facile",
        portions: "2 portions",
        prix: "2,80 €",
        profil: "Riche en protéines",

        ingredients: [

            "2 filets de poulet",
            "1 citron",
            "2 gousses d'ail",
            "1 courgette",
            "1 poivron rouge",
            "8 tomates cerises",
            "2 c. à soupe d'huile d'olive",
            "Sel, poivre, herbes de Provence"

        ],

        etapes: [

            "Préchauffez le four à 200 °C.",
            "Coupez le poulet en morceaux et assaisonnez-le avec du sel, du poivre et les herbes.",
            "Coupez les légumes en morceaux.",
            "Disposez le tout sur une plaque, arrosez d'huile d'olive et ajoutez l'ail émincé.",
            "Enfournez 20 à 25 minutes, jusqu'à cuisson dorée."

        ]

    },


    // RECETTE 2

    2: {

        nom: "Bowl quinoa, avocat & pois chiches",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
        temps: "20 min",
        difficulte: "Facile",
        portions: "2 portions",
        prix: "2,60 €",
        profil: "Équilibré",

        ingredients: [

            "120 g de quinoa",
            "1 avocat",
            "150 g de pois chiches",
            "1 tomate",
            "1 citron",
            "2 c. à soupe d'huile d'olive",
            "Sel et poivre"

        ],

        etapes: [

            "Rincez le quinoa.",
            "Faites cuire le quinoa dans de l'eau bouillante.",
            "Coupez l'avocat et la tomate en morceaux.",
            "Égouttez les pois chiches.",
            "Mélangez tous les ingrédients dans un bol.",
            "Ajoutez le jus de citron, l'huile d'olive, le sel et le poivre."

        ]

    },


    // RECETTE 3

    3: {

        nom: "Pâtes crémeuses aux champignons",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
        temps: "25 min",
        difficulte: "Facile",
        portions: "2 portions",
        prix: "2,40 €",
        profil: "Léger",

        ingredients: [

            "200 g de pâtes",
            "150 g de champignons",
            "10 cl de crème fraîche",
            "1 gousse d'ail",
            "1 cuillère à soupe d'huile d'olive",
            "Sel et poivre",
            "Persil"

        ],

        etapes: [

            "Faites cuire les pâtes dans une casserole d'eau bouillante.",
            "Nettoyez et coupez les champignons en morceaux.",
            "Faites revenir les champignons avec l'huile d'olive et l'ail.",
            "Ajoutez la crème fraîche.",
            "Égouttez les pâtes et ajoutez-les à la préparation.",
            "Mélangez et ajoutez le persil, le sel et le poivre."

        ]

    },


    // RECETTE 4

    4: {

        nom: "Saumon aux légumes et quinoa",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600",
        temps: "30 min",
        difficulte: "Moyen",
        portions: "2 portions",
        prix: "3,20 €",
        profil: "Riche en protéines",

        ingredients: [

            "2 pavés de saumon",
            "120 g de quinoa",
            "1 courgette",
            "1 carotte",
            "1 citron",
            "2 cuillères à soupe d'huile d'olive",
            "Sel et poivre"

        ],

        etapes: [

            "Rincez le quinoa et faites-le cuire dans de l'eau bouillante.",
            "Lavez et coupez les légumes.",
            "Faites cuire les légumes dans une poêle avec l'huile d'olive.",
            "Faites cuire les pavés de saumon dans une poêle.",
            "Ajoutez le jus de citron sur le saumon.",
            "Servez le saumon avec les légumes et le quinoa."

        ]

    }

};


// =============================
// RÉCUPÉRER L'ID DEPUIS L'URL
// =============================

const parametres = new URLSearchParams(window.location.search);

const id = parametres.get("id");


// =============================
// RECHERCHER LA RECETTE
// =============================

const recette = recettes[id];


// =============================
// RÉCUPÉRER LES FAVORIS
// =============================

let favoris = JSON.parse(localStorage.getItem("favoris")) || [];


// =============================
// AFFICHER LA RECETTE
// =============================

if (recette) {

    // IMAGE ET TITRE

    document.getElementById("imageRecette").src = recette.image;

    document.getElementById("imageRecette").alt = recette.nom;

    document.getElementById("nomRecette").textContent = recette.nom;


    // INFORMATIONS GÉNÉRALES

    document.getElementById("tempsRecette").textContent = recette.temps;

    document.getElementById("difficulteRecette").textContent = recette.difficulte;

    document.getElementById("portionsRecette").textContent = recette.portions;

    document.getElementById("prixRecette").textContent = recette.prix;


    // =============================
    // AFFICHER LES INGRÉDIENTS
    // =============================

    const listeIngredients = document.getElementById("listeIngredients");

    recette.ingredients.forEach(ingredient => {

        const li = document.createElement("li");

        li.className = "mb-2";

        li.innerHTML = `

            <i class="bi bi-check-circle text-success"></i>

            ${ingredient}

        `;

        listeIngredients.appendChild(li);

    });


    // =============================
    // AFFICHER LES ÉTAPES
    // =============================

    const listeEtapes = document.getElementById("listeEtapes");

    recette.etapes.forEach((etape, index) => {

        const li = document.createElement("li");

        li.className = "d-flex gap-3 mb-3";

        li.innerHTML = `

            <span class="num bg-success text-white rounded-circle">

                ${index + 1}

            </span>

            ${etape}

        `;

        listeEtapes.appendChild(li);

    });


    // =============================
    // AFFICHER LES INFORMATIONS
    // =============================

    document.getElementById("informationsRecette").innerHTML = `

        Temps : ${recette.temps}<br>

        Difficulté : ${recette.difficulte}<br>

        Coût : ${recette.prix} / personne<br>

        Profil : ${recette.profil}

    `;


    // =============================
    // GESTION DES FAVORIS
    // =============================

    const boutonFavori = document.getElementById("boutonFavori");

    const coeur = boutonFavori.querySelector("i");

    boutonFavori.dataset.favori = id;


    function afficherFavori() {

        if (favoris.includes(id)) {

            coeur.classList.remove("bi-heart");

            coeur.classList.add("bi-heart-fill");

            boutonFavori.classList.add("actif");

        } else {

            coeur.classList.remove("bi-heart-fill");

            coeur.classList.add("bi-heart");

            boutonFavori.classList.remove("actif");

        }

    }


    // CLIQUER SUR LE FAVORI

    boutonFavori.addEventListener("click", function () {

        if (favoris.includes(id)) {

            favoris = favoris.filter(favori => favori !== id);

        } else {

            favoris.push(id);

        }

        localStorage.setItem("favoris", JSON.stringify(favoris));

        afficherFavori();

    });


    afficherFavori();


    // =============================
    // ENREGISTRER DANS LES COURSES
    // =============================

    const boutonCourse = document.getElementById("enregistrerCourse");

    const messageEnregistrement = document.getElementById("messageEnregistrement");


    boutonCourse.addEventListener("click", function () {

        // RÉCUPÉRER LES RECETTES ENREGISTRÉES

        let courses = JSON.parse(localStorage.getItem("myCulinaCourses")) || [];


        // VÉRIFIER SI LA RECETTE EXISTE DÉJÀ

        const recetteExistante = courses.find(element =>

            String(element.id) === String(id)

        );


        if (recetteExistante) {

            // AUGMENTER LA QUANTITÉ

            recetteExistante.quantiteRecette += 1;

        } else {

            // AJOUTER LA RECETTE

            courses.push({

                id: Number(id),

                nom: recette.nom,

                image: recette.image,

                temps: recette.temps,

                prixPersonne: Number(
                    recette.prix.replace(",", ".").replace(" €", "")
                ),

                quantiteRecette: 1,

                ingredients: recette.ingredients.map(ingredient => ({

                    nom: ingredient,

                    quantite: 1

                }))

            });

        }


        // SAUVEGARDER DANS LOCALSTORAGE

        localStorage.setItem("myCulinaCourses", JSON.stringify(courses));


        // AFFICHER LE MESSAGE DE CONFIRMATION

        messageEnregistrement.classList.remove("d-none");


        // MODIFIER LE BOUTON

        boutonCourse.innerHTML = `

            <i class="bi bi-check-circle me-2"></i>

            Recette enregistrée !

        `;

    });


} else {

    // RECETTE INTROUVABLE

    document.querySelector("main").innerHTML = `

        <div class="alert alert-warning">

            <h2>Recette introuvable</h2>

            <p>Cette recette n'existe pas.</p>

            <a href="recette.html" class="btn btn-success rounded-pill">

                Retour aux recettes

            </a>

        </div>

    `;

}