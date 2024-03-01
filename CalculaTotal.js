// Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

// Passa por cada cliente, calculando o valor total
clientes.forEach(function(cliente) {
    // Captura a quantidade encomendada
    var qtde = parseInt(cliente.querySelector(".info-qtde").textContent);

    // Captura o valor unitário do produto
    var unitario = parseFloat(cliente.querySelector(".info-valor").textContent);

    // Captura o valor total do produto
    var total = parseFloat(cliente.querySelector(".info-total").textContent);

    // Valida a quantidade
    if (qtde < 1 || isNaN(qtde)) {
        // Quantidade NOK, avise o usuário
        cliente.querySelector(".info-qtde").textContent = "QTDE INVÁLIDA!";
        cliente.querySelector(".info-qtde").style.color = "red";
    } else {
        // Quantidade OK, pode prosseguir
        // Calcula o valor total da encomenda
        cliente.querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
    }

    // Valida a quantidade
    if (qtde < 1 || isNaN(unitario)) {
        // Quantidade NOK, avise o usuário
        cliente.querySelector(".info-valor").textContent = "INVÁLIDO!";
        cliente.style.backgroundColor = "red";
    } else {
        // Quantidade OK, pode prosseguir
        // Calcula o valor total da encomenda
        cliente.querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
    }

    if(total < 1 || isNaN(qtde)){
        cliente.querySelector(".info-total").textContent = "-";
        cliente.querySelector(".info-valor").textContent = "-";
    }

    if(total < 1 || isNaN(unitario)){
        cliente.querySelector(".info-total").textContent = "-";
        cliente.querySelector(".info-qtde").textContent = "-";
    }
});

// Função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario) {
    var total = 0;
    total = qtde * unitario;
    return total;
}
