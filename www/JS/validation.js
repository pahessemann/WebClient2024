const form = document.getElementById("inscription-form");
const dateField = document.getElementById("date");
const emailField = document.getElementById("email");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");

// Ajouter un gestionnaire d'événements pour le formulaire lorsqu'il est soumis
form.addEventListener("submit", (event) => {
  // Vérifier la validité de la date
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  if (!dateRegex.test(dateField.value)) {
    alert("La date doit être au format jj/mm/aaaa");
    event.preventDefault();
    return;
  }
  const [jour, mois, annee] = dateField.value.split('/');
  if (!est_valide(jour, mois, annee)) {
    alert("La date saisie n'est pas valide");
    event.preventDefault();
    return;
  }

  // Vérifier la validité de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value)) {
    alert("Veuillez saisir une adresse email valide");
    event.preventDefault();
    return;
  }

  // Vérifier la validité du mot de passe
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  if (!passwordRegex.test(passwordField.value)) {
    alert("Le mot de passe doit contenir au moins huit caractères, une majuscule, une minuscule et un chiffre.");
    event.preventDefault();
    return;
  }

  // Vérifier la validité du nom d'utilisateur
  if (usernameField.value.length < 6) {
    alert("Le nom d'utilisateur doit contenir au moins six caractères.");
    event.preventDefault();
    return;
  }
});

function est_valide(jour, mois, annee) {
  // Vérification de la validité de l'année
  if (annee < 1) {
    return false;
  }
  // Vérification de la validité du mois
  if (mois < 1 || mois > 12) {
    return false;
  }
  // Vérification de la validité du jour
  if (jour < 1 || jour > 31) {
    return false;
  }
  if (mois == 2) {
    if (annee % 4 == 0 && (annee % 100 != 0 || annee % 400 == 0)) {
      if (jour > 29) {
        return false;
      }
    } else {
      if (jour > 28) {
        return false;
      }
    }
  } else if (mois in [4, 6, 9, 11]) {
    if (jour > 30) {
      return false;
    }
  }
  return true;
}



function showSuccess() {
  // Afficher la fenêtre modale
  var modal = document.getElementById("modal");
  modal.classList.add("show");

  // Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
  var closeBtn = modal.querySelector(".close");
  closeBtn.addEventListener("click", function() {
      modal.classList.remove("show");
  });

  // Rediriger l'utilisateur vers la page easter.html après 3 secondes
  setTimeout(function() {
      window.location.href = "easter.html";
  }, 3000);
}