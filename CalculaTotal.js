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
    return formataValor(total);
}

function validaQtde(qtde){
    if(!isNaN(qtde) && qtde > 0) {
        return true
    } else{
        return false;
    }
}

function validaUnitario(unitario){
    if(!isNaN(unitario) && unitario > 0){
        return true;
    } else{
        return false;
    }
}

function formataValor(valor){
    var valor = valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

    return valor;
}

//Verifica se a QUANTIDADE recebida é válida
if (!validaQtde(qtde)){
    clientes[i].querySelector("info-total").textContent="Quantidade inválida!";
    clientes[i].classList.add("info-invalida");
}

//Verifica se o VALOR UNITÁRIO é válido
if (!validaUnitario(unitario)){
    clientes[i].querySelector("info-total").textContent="Valor unitário é inválido!";
}

//Formata o VALOR UNITÁRIO
var unitFormat = formataValor(parseFloat(unitario));
clientes[i].querySelector(".info-valor").textContent = unitFormat;
