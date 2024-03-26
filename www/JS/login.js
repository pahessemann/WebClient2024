// Fonction pour afficher un message d'erreur
function showError(message) {
  document.getElementById("message").innerHTML = message;
}

// Fonction pour afficher un message de succès et rediriger l'utilisateur vers la page easter.html
function showSuccess() {
  document.getElementById("message").innerHTML = "Connexion réussie !";
  setTimeout(function() {
      window.location.href = "easter.html";
  }, 3000);
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

// Fonction pour envoyer les informations de connexion au script login.py
function submitForm(event) {
  event.preventDefault();
  var form = event.target;
  var formData = new FormData();
  formData.append('username', form.username.value);
  formData.append('userpwd', form.userpwd.value);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              var response = xhr.responseText;
              if (response === "success") {
                  showSuccess();
              } else {
                  showError(response);
              }
          } else {
              showError("Une erreur est survenue lors de la connexion.");
          }
      }
  };
  xhr.send(formData);
}

// Ajout d'un écouteur d'événement sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", submitForm);