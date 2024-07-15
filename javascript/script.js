function toggleContent() {
    var moreCards = document.querySelector("#servicos-ocultos");
    var btn = document.getElementById("button-ler-mais");

    if (moreCards.style.display === "none" || moreCards.style.display === "") {
        moreCards.style.display = "flex";
        btn.textContent = "Ler Menos";
    } else {
        moreCards.style.display = "none";
        btn.textContent = "Ler Mais";
    }
}
function toggleCard(button) {
    var card = button.closest('.servicos-card, .duvidas-card');
    card.classList.toggle('expanded');
    
    if (card.classList.contains('expanded')) {
        button.textContent = '-';
    } else {
        button.textContent = '+';
    }
}
