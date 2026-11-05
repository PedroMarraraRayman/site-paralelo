function atualizarSaudacao() {
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    
    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    const horaFormatada = `${hora.toString().padStart(2, '0')}:${minutos}`;
    
    // Altera o texto do elemento HTML com id "mensagem"
    document.getElementById("mensagem").textContent = `${saudacao}! Agora são ${horaFormatada}.`;
}

// Executa a função assim que a página carregar
atualizarSaudacao();
