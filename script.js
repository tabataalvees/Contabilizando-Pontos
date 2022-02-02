var  corinthians = {
    nome: "Corinthians",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
   }
  
  var sp = {
    nome: "Palmeiras",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos:0,
  }
  
  corinthians.pontos = calculaPontos(corinthians)
  sp.pontos = calculaPontos(sp) //função ta retornando na variavel 
  
  var jogadores = [corinthians, sp]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i=0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>" 
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button class='vitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button class='empate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button class='derrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates 
    return pontos
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores) 
  }
  
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)  
  }
  
  function adicionarJogador() {
      var input = document.querySelector("#novoJogador")
      var inputJogador = input.value;
      if(inputJogador != ""){
          var novoJogador = {
              nome: inputJogador,
              vitorias: 0,
              empates: 0,
              derrotas: 0,
              pontos: 0
          }
      
          jogadores.push(novoJogador);
          exibirJogadoresNaTela(jogadores);     
      }
      input.value = "";
      
  }