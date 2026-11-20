var joursSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

function cacherSections() {
  document.getElementById("partieAuth").classList.add("cache");
  document.getElementById("partieInfosBase").classList.add("cache");
  document.getElementById("partieProfilComplet").classList.add("cache");
}

function changerFormulaire(mode) {
  cacherSections();
  document.getElementById("partieAuth").classList.remove("cache");
  document.getElementById("messageAuth").textContent = "";

  if (mode === "inscription") {
    document.getElementById("formConnexion").classList.add("cache");
    document.getElementById("formInscription").classList.remove("cache");
    document.getElementById("titreAuth").textContent = "Inscription";
  } else {
    document.getElementById("formInscription").classList.add("cache");
    document.getElementById("formConnexion").classList.remove("cache");
    document.getElementById("titreAuth").textContent = "Connexion";
  }
}

function emailValide(email) {
  return email.indexOf("@") > 0 && email.indexOf(".") > email.indexOf("@") + 1;
}

/* Empêche de taper "-", "+" ou "e" dans les champs numériques positifs */
function bloquerSignesNegatifs() {
  var ids = ["infoAge", "infoTaille", "infoPoids"];
  for (var i = 0; i < ids.length; i++) {
    var el = document.getElementById(ids[i]);
    if (!el) continue;

    el.addEventListener("keydown", function (e) {
      if (e.key === "-" || e.key === "+" || e.key === "e" || e.key === "E") {
        e.preventDefault();
      }
    });

    el.addEventListener("input", function () {
      if (this.value.indexOf("-") !== -1) {
        this.value = this.value.replace(/-/g, "");
      }
      if (parseFloat(this.value) < 0) {
        this.value = "";
      }
    });
  }
}

function inscription() {
  var nom = document.getElementById("regNom").value.trim();
  var email = document.getElementById("regEmail").value.trim();
  var mdp = document.getElementById("regMdp").value;

  if (!nom || !email || !mdp) {
    document.getElementById("messageAuth").textContent = "Merci de remplir tous les champs.";
    return;
  }

  if (!emailValide(email)) {
    document.getElementById("messageAuth").textContent = "Adresse email invalide (ex : nom@gmail.com).";
    return;
  }

  if (mdp.length < 8) {
    document.getElementById("messageAuth").textContent = "Le mot de passe doit contenir au moins 8 caractères.";
    return;
  }

  localStorage.setItem("compteMyCulina", JSON.stringify({ nom: nom, email: email, mdp: mdp }));
  localStorage.setItem("connecteMyCulina", "oui");
  document.getElementById("btnDeconnexion").classList.remove("cache");
  document.getElementById("infoNom").value = nom;
  afficherInfosBase();
}

function connexion() {
  var email = document.getElementById("loginEmail").value.trim();
  var mdp = document.getElementById("loginMdp").value;
  var compte = JSON.parse(localStorage.getItem("compteMyCulina"));

  if (!compte) {
    document.getElementById("messageAuth").textContent = "Aucun compte enregistré. Crée un compte d'abord.";
    return;
  }

  if (!email || !mdp) {
    document.getElementById("messageAuth").textContent = "Renseigne ton email et ton mot de passe.";
    return;
  }

  if (email !== compte.email || mdp !== compte.mdp) {
    document.getElementById("messageAuth").textContent = "Email ou mot de passe incorrect.";
    return;
  }

  localStorage.setItem("connecteMyCulina", "oui");
  document.getElementById("btnDeconnexion").classList.remove("cache");

  var infos = infosValidesOuNull(JSON.parse(localStorage.getItem("infosProfilMyCulina")));
  if (infos) {
    ouvrirVueProfil();
  } else {
    document.getElementById("infoNom").value = compte.nom || "";
    afficherInfosBase();
  }
}

function infosValidesOuNull(infos) {
  if (!infos) return null;
  var ageOk = typeof infos.age === "number" && infos.age >= 1 && infos.age <= 120;
  var tailleOk = typeof infos.taille === "number" && infos.taille >= 100 && infos.taille <= 250;
  var poidsOk = typeof infos.poids === "number" && infos.poids >= 25 && infos.poids <= 300;
  if (!ageOk || !tailleOk || !poidsOk) return null;
  return infos;
}

function afficherInfosBase() {
  cacherSections();
  document.getElementById("partieInfosBase").classList.remove("cache");
  document.getElementById("messageInfos").textContent = "";
}

function enregistrerInfosBase() {
  var nom = document.getElementById("infoNom").value.trim();
  var ageBrut = document.getElementById("infoAge").value.trim();
  var tailleBrut = document.getElementById("infoTaille").value.trim();
  var poidsBrut = document.getElementById("infoPoids").value.trim();
  var objectif = document.getElementById("infoObjectif").value.trim();

  var age = Number(ageBrut);
  var taille = Number(tailleBrut);
  var poids = Number(poidsBrut);

  if (!nom) {
    document.getElementById("messageInfos").textContent = "Merci d'indiquer ton nom.";
    return;
  }

  if (ageBrut === "" || isNaN(age) || !Number.isInteger(age) || age < 1 || age > 120) {
    document.getElementById("messageInfos").textContent = "Âge invalide : entre un nombre entier entre 1 et 120 ans (pas de nombre négatif).";
    return;
  }

  if (tailleBrut === "" || isNaN(taille) || taille < 100 || taille > 250) {
    document.getElementById("messageInfos").textContent = "Taille invalide : entre une taille entre 100 et 250 cm (pas de nombre négatif).";
    return;
  }

  if (poidsBrut === "" || isNaN(poids) || poids < 25 || poids > 300) {
    document.getElementById("messageInfos").textContent = "Poids invalide : entre un poids entre 25 et 300 kg (pas de nombre négatif).";
    return;
  }

  localStorage.setItem("infosProfilMyCulina", JSON.stringify({
    nom: nom,
    age: age,
    taille: taille,
    poids: poids,
    objectif: objectif
  }));

  ouvrirVueProfil();
}

function calculerImc(poids, tailleCm) {
  if (!poids || !tailleCm || poids <= 0 || tailleCm <= 0) return "--";
  var m = tailleCm / 100;
  var imc = poids / (m * m);
  if (imc < 10 || imc > 80) return "--";
  return imc.toFixed(1);
}

function getSemaine() {
  var saved = JSON.parse(localStorage.getItem("semaineMyCulina"));
  if (saved) return saved;

  return {
    Lundi: { plat: "Poulet citron & légumes", prix: 2.8, healthy: true },
    Mardi: { plat: "Bowl quinoa & avocat", prix: 2.6, healthy: true },
    Mercredi: { plat: "Pâtes aux champignons", prix: 2.4, healthy: true },
    Jeudi: { plat: "Burger maison", prix: 4.5, healthy: false },
    Vendredi: { plat: "Saumon & quinoa", prix: 3.2, healthy: true },
    Samedi: { plat: "Pizza maison", prix: 4.0, healthy: false },
    Dimanche: { plat: "Salade composée", prix: 2.5, healthy: true }
  };
}

function afficherSemaine() {
  var semaine = getSemaine();
  var zone = document.getElementById("listeSemaine");
  zone.innerHTML = "";

  for (var i = 0; i < joursSemaine.length; i++) {
    var jour = joursSemaine[i];
    var item = semaine[jour] || { plat: "", prix: 0, healthy: false };
    var prixVal = typeof item.prix === "number" && item.prix >= 0 ? item.prix : 0;

    var box = document.createElement("div");
    box.className = "day-box";
    box.innerHTML =
      '<div class="day-title">' + jour + '</div>' +
      '<input type="text" id="plat_' + jour + '" value="' + item.plat.replace(/"/g, "&quot;") + '" placeholder="Plat prévu">' +
      '<div class="day-row-budget">' +
      '<span>Budget (€)</span>' +
      '<input type="number" id="prix_' + jour + '" step="0.1" min="0" value="' + prixVal + '" placeholder="0.00">' +
      '</div>' +
      '<label class="healthy-check">' +
      '<input type="checkbox" id="healthy_' + jour + '"' + (item.healthy ? " checked" : "") + '>' +
      'Healthy</label>';

    zone.appendChild(box);
  }
}

function enregistrerSemaine() {
  var nouvelleSemaine = {};

  for (var i = 0; i < joursSemaine.length; i++) {
    var jour = joursSemaine[i];
    var prixBrut = parseFloat(document.getElementById("prix_" + jour).value);
    var prixNet = !isNaN(prixBrut) && prixBrut >= 0 ? prixBrut : 0;

    nouvelleSemaine[jour] = {
      plat: document.getElementById("plat_" + jour).value.trim(),
      prix: prixNet,
      healthy: document.getElementById("healthy_" + jour).checked
    };
  }

  localStorage.setItem("semaineMyCulina", JSON.stringify(nouvelleSemaine));
  document.getElementById("messageSemaine").textContent = "Semaine et budget enregistrés.";
  mettreAJourSuivis();
}

function mettreAJourSuivis() {
  var semaine = getSemaine();
  var countHealthy = 0;
  var totalSemaine = 0;

  for (var i = 0; i < joursSemaine.length; i++) {
    var jour = joursSemaine[i];
    var donnee = semaine[jour] || { prix: 0, healthy: false };

    if (donnee.healthy) {
      countHealthy++;
    }

    var p = parseFloat(donnee.prix);
    if (!isNaN(p) && p > 0) {
      totalSemaine += p;
    }
  }

  var pct = Math.round((countHealthy / joursSemaine.length) * 100);
  document.getElementById("texteHealthy").textContent = pct + "% (" + countHealthy + "/" + joursSemaine.length + ")";
  document.getElementById("barreHealthy").style.width = pct + "%";

  document.getElementById("bilanHealthy").innerHTML =
    "<strong>Jours healthy :</strong> " + countHealthy + " sur " + joursSemaine.length + "<br>" +
    "<strong>Statut :</strong> " + (pct >= 60 ? "Semaine équilibrée" : "À renforcer");

  var totalMois = totalSemaine * 4;
  var moyenneJour = totalSemaine / joursSemaine.length;

  document.getElementById("totalSemaine").textContent = totalSemaine.toFixed(2).replace(".", ",") + " €";
  document.getElementById("totalMois").textContent = totalMois.toFixed(2).replace(".", ",") + " €";
  document.getElementById("moyenneJour").textContent = moyenneJour.toFixed(2).replace(".", ",") + " €";

  if (totalSemaine <= 25) {
    document.getElementById("statutBudget").textContent = "Budget léger";
  } else if (totalSemaine <= 45) {
    document.getElementById("statutBudget").textContent = "Budget maîtrisé";
  } else {
    document.getElementById("statutBudget").textContent = "Budget élevé";
  }
}

function ouvrirVueProfil() {
  if (localStorage.getItem("connecteMyCulina") !== "oui") {
    changerFormulaire("connexion");
    return;
  }

  var compte = JSON.parse(localStorage.getItem("compteMyCulina"));
  var infosBrutes = JSON.parse(localStorage.getItem("infosProfilMyCulina"));
  var infos = infosValidesOuNull(infosBrutes);

  /* Si les anciennes infos enregistrées contiennent un âge négatif ou invalide, on repasse par le formulaire propre */
  if (!infos) {
    localStorage.removeItem("infosProfilMyCulina");
    document.getElementById("infoNom").value = (infosBrutes && infosBrutes.nom) || (compte ? compte.nom : "");
    document.getElementById("infoAge").value = "";
    document.getElementById("infoTaille").value = "";
    document.getElementById("infoPoids").value = "";
    document.getElementById("infoObjectif").value = (infosBrutes && infosBrutes.objectif) || "";
    afficherInfosBase();
    document.getElementById("messageInfos").textContent = "Merci de ressaisir un âge, une taille et un poids valides (sans nombres négatifs).";
    return;
  }

  cacherSections();
  document.getElementById("btnDeconnexion").classList.remove("cache");
  document.getElementById("partieProfilComplet").classList.remove("cache");

  var nom = infos.nom || (compte ? compte.nom : "Utilisateur");

  document.getElementById("resumeInfos").innerHTML =
    "<strong>Nom :</strong> " + nom + "<br>" +
    "<strong>Âge :</strong> " + infos.age + " ans<br>" +
    "<strong>Taille :</strong> " + infos.taille + " cm<br>" +
    "<strong>Poids :</strong> " + infos.poids + " kg<br>" +
    "<strong>IMC :</strong> " + calculerImc(infos.poids, infos.taille) + "<br>" +
    "<strong>Objectif :</strong> " + (infos.objectif ? infos.objectif : "Non précisé");

  afficherSemaine();
  mettreAJourSuivis();

  var evalData = JSON.parse(localStorage.getItem("evaluationMyCulina"));
  if (evalData) {
    document.getElementById("noteApp").value = evalData.note || "";
    document.getElementById("avisApp").value = evalData.avis || "";
  }
}

function modifierInfos() {
  var infos = infosValidesOuNull(JSON.parse(localStorage.getItem("infosProfilMyCulina"))) || {};
  var compte = JSON.parse(localStorage.getItem("compteMyCulina")) || {};

  document.getElementById("infoNom").value = infos.nom || compte.nom || "";
  document.getElementById("infoAge").value = infos.age || "";
  document.getElementById("infoTaille").value = infos.taille || "";
  document.getElementById("infoPoids").value = infos.poids || "";
  document.getElementById("infoObjectif").value = infos.objectif || "";
  afficherInfosBase();
}

function enregistrerEvaluation() {
  var note = document.getElementById("noteApp").value;
  var avis = document.getElementById("avisApp").value.trim();

  if (!note) {
    document.getElementById("messageEval").textContent = "Choisis une note.";
    return;
  }

  localStorage.setItem("evaluationMyCulina", JSON.stringify({ note: note, avis: avis }));
  document.getElementById("messageEval").textContent = "Avis enregistré (" + note + "/5).";
}

function deconnexion() {
  localStorage.removeItem("connecteMyCulina");
  document.getElementById("btnDeconnexion").classList.add("cache");
  changerFormulaire("connexion");
}

bloquerSignesNegatifs();

if (localStorage.getItem("connecteMyCulina") === "oui") {
  ouvrirVueProfil();
} else {
  changerFormulaire("connexion");
}