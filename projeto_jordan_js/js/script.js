var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  somar();

});


//Função somar
function somar() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let numero_alunos = Number(document.getElementById("numero_alunos").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let numero_ascesso_internet = Number(document.getElementById("numero_ascesso_internet").value);

  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let porcentagem_ascesso_internet = numero_ascesso_internet / numero_alunos * 100;

  porcentagem_ascesso_internet = porcentagem_ascesso_internet + "%"

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("porcentagem_ascesso_internet").value = porcentagem_ascesso_internet;


}
