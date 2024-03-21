//Configuração do botão adicionar
<html>
  <head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
<title>Adicionar Linha em Tabela</title>
<script>
function adicionarLinha() {
    // Obtém a referência para a tabela
    var tabela = document.getElementById("tabela");
    
    // Cria uma nova linha e células
    var novaLinha = tabela.insertRow();
    var celula1 = novaLinha.insertCell(0);
    var celula2 = novaLinha.insertCell(1);
   
    // Define o conteúdo das células (por exemplo)
    celula1.innerHTML = "Nova Célula 1";
    celula2.innerHTML = "Nova Célula 2";
},

/*
</script>
</head>
<body>

<h2>Minha Tabela</h2>

<!-- Tabela -->
<table id="minhaTabela" border="1">
  <tr>
    <th>Cabeçalho 1</th>
    <th>Cabeçalho 2</th>
  </tr>
  <tr>
    <td>Célula 1</td>
    <td>Célula 2</td>
  </tr>
</table>

<!-- Botão para adicionar linha -->
<button onclick="adicionarLinha()">Adicionar Linha</button>

</body>
</html>




elemento.addEventListener("botaoaddprod", ações-a-efetuar);

var botaoAdicionar = document.querySelector("#botaoaddprod");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Agora sim, o botão foi clicado!");
});
