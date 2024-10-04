document.addEventListener("DOMContentLoaded", function() {
    var cookieModal = document.getElementById("cookieModal");
    var acceptBtn = document.getElementById("acceptBtn");
    var declineBtn = document.getElementById("declineBtn");

    function closeModal() {
        cookieModal.style.display = "none";
    }

    acceptBtn.onclick = function() {
        closeModal();
    }

    declineBtn.onclick = function() {
        closeModal();
    }
});