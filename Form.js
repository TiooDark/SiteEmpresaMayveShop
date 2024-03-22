//elemento.addEventListener("botaoaddprod", ações-a-efetuar);

var botaoAdicionar = document.querySelector(".botaoaddprod");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("O botão foi clicado!");
});

function adicionarLinha(){
  // Obtém a referência para a tabela
  var tabela = document.querySelector(".tabela");

  // Cria uma nova linha e células
  var novaLinha = tabela.insertRow();

  var celula1 = novaLinha.insertCell(0);
  var celula2 = novaLinha.insertCell(1);
  var celula3 = novaLinha.insertCell(2);
  var celula4 = novaLinha.insertCell(3);
  var celula5 = novaLinha.insertCell(4);
 
 
  // Define o conteúdo das células (por exemplo)

var nome = document.getElementById("nome").value;
var prod = document.getElementById("nprod").value;
var qtde = parseFloat(document.getElementById("qtde").value);
var valor = parseFloat(document.getElementById("valorUnit").value);
var total = calculaTotal();
 
celula1.textContent = nome;
celula2.textContent = prod;
celula3.textContent = qtde;
celula4.textContent = valor;
celula5.textContent = formataValor(qtde*valor);
}
