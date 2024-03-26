$(document).ready(function() {
    // Fonction pour envoyer un message via AJAX
    function sendMessage() {
        var message = $("#message").val();
        $.ajax({
            url: "htbin/chatsend.py",
            method: "POST",
            data: {"msg": message},
            dataType: "json",
            success: function(response) {
                if (response.num == 0) {
                    $("#message").val("");
                    addMessage(response.msg);
                } else {
                    alert(response.msg);
                }
            },
            error: function(xhr, status, error) {
                alert("Une erreur est survenue lors de l'envoi du message : " + error);
            }
        });
    }

    // Fonction pour récupérer les messages via AJAX
    function getMessages() {
        $.ajax({
            url: "htbin/chatget.py",
            method: "GET",
            dataType: "json",
            success: function(response) {
                $("#discussion").empty();
                for (var i = 0; i < response.length; i++) {
                    addMessage(response[i].date + " " + response[i].time + " " + response[i].user + ": " + response[i].msg);
                }
            },
            error: function(xhr, status, error) {
                alert("Une erreur est survenue lors de la récupération des messages : " + error);
            }
        });
    }

    // Fonction pour ajouter un message à la zone de discussion
    function addMessage(message) {
        $("#discussion").append("<p>" + message + "</p>");
    }

    // Récupérer les messages au chargement de la page
    getMessages();

    // Envoyer un message lorsque l'utilisateur clique sur le bouton "Envoyer"
    $("#send").click(function() {
        sendMessage();
    });

    // Envoyer un message lorsque l'utilisateur appuie sur la touche "Entrée"
    $("#message").keypress(function(event) {
        if (event.which == 13) {
            sendMessage();
        }
    });

    // Rafraîchir la liste des messages toutes les 5 secondes
    setInterval(function() {
        getMessages();
    }, 5000);
});