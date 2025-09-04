// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const result = document.getElementById("result");
    const cancelBtn = document.querySelector(".cancel");

    // Envoi du formulaire
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        if(nameInput.value.trim() === "" || emailInput.value.trim() === "" || messageInput.value.trim() === "") {
            result.textContent = "Veuillez remplir tous les champs.";
            result.style.color = "#f44336"; // rouge
            return;
        }

        result.textContent = `Merci ${nameInput.value} ! Votre message a été envoyé.`;
        result.style.color = "#4CAF50"; // vert

        form.reset();
    });

    // Bouton Annuler
    cancelBtn.addEventListener("click", function() {
        form.reset();
        result.textContent = "";
    });
});
