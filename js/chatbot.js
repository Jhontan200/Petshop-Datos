const answers = {
    perros: "Tenemos croquetas, juguetes, correas y camas para perros.",
    gatos: "Ofrecemos comida, arenas, rascadores y juguetes para gatos.",
    roedores: "Disponemos de jaulas, ruedas, comida y accesorios para hamsters, conejos y otros roedores.",
    aves: "Puedes encontrar comida, jaulas, perchas y juguetes para aves.",
    peces: "Tenemos acuarios, filtros, comida y accesorios para peces."
};

function toggleChatbot() {
    const body = document.getElementById("chatbot-body");
    body.style.display = body.style.display === "none" ? "block" : "none";
}

function closeChatbot() {
    document.getElementById("chatbot-perrito").style.display = "none";
}

function showAnswer(productType) {
    const answer = answers[productType] || "No tengo información sobre eso.";
    document.getElementById("chatbot-answer").textContent = answer;
}