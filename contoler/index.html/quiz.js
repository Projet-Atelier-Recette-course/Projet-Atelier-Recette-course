/* Gestion du questionnaire MyCulina */
(() => {
  const form = document.querySelector(".quiz-form");
  if (!form) return;

  const step = Number(form.dataset.step);
  const storageKey = "myculinaQuiz";
  let answers = {};
  try {
    answers = JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch (_) {
    answers = {};
  }

  // Réafficher les réponses déjà saisies si l'utilisateur revient en arrière.
  Object.entries(answers).forEach(([name, value]) => {
    const fields = [...form.querySelectorAll(`[name="${name}"]`)];
    fields.forEach(field => {
      if (field.type === "checkbox") {
        field.checked = Array.isArray(value) && value.includes(field.value);
      } else if (field.type === "radio") {
        field.checked = field.value === value;
      } else if ("value" in field) {
        field.value = value ?? "";
      }
    });
  });

  // « Aucune allergie » désactive les autres choix.
  const allergyFields = [...form.querySelectorAll('input[name="allergies"]')];
  const none = allergyFields.find(field => field.value === "aucune");
  if (none) {
    allergyFields.forEach(field => field.addEventListener("change", () => {
      if (field === none && none.checked) {
        allergyFields.filter(item => item !== none).forEach(item => item.checked = false);
      } else if (field !== none && field.checked) {
        none.checked = false;
      }
    }));
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    const error = form.querySelector(".quiz-error");
    error.hidden = true;
    let value;

    if (step === 1) {
      value = form.querySelector('[name="personnes"]:checked')?.value;
      if (!value) return showError("Choisissez le nombre de personnes.");
      answers.personnes = Number(value);
    } else if (step === 2) {
      value = Number(form.querySelector('[name="budget"]').value);
      if (!value || value <= 0) return showError("Saisissez un budget supérieur à 0 €.");
      answers.budget = value;
    } else if (step === 3) {
      answers.allergies = allergyFields.filter(field => field.checked).map(field => field.value);
      if (answers.allergies.includes("aucune")) answers.allergies = [];
    } else if (step === 4) {
      value = form.querySelector('[name="regime"]:checked')?.value;
      if (!value) return showError("Choisissez un régime alimentaire.");
      answers.regime = value;
    } else if (step === 5) {
      answers.ingredientsDisponibles = form.querySelector('[name="ingredients"]').value
        .split(",").map(item => item.trim()).filter(Boolean);
    }

    localStorage.setItem(storageKey, JSON.stringify(answers));
    if (step < 5) {
      window.location.href = `quiz_page${step + 1}.html`;
    } else {
      window.location.href = "page_recette.html";
    }
  });

  function showError(message) {
    const error = form.querySelector(".quiz-error");
    error.textContent = message;
    error.hidden = false;
  }
})();
