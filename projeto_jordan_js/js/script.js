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
  let numero_alunos = (document.getElementById("numero_alunos").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let ascesso_internet = (document.getElementById("ascesso_internet").value);
  //calcula o desconto

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let porcentagem_alunos = (document.getElementById("porcentagem_alunos").value);
  //calcula o desconto



  //Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  //variável "segundo_numero_inteiro"
  //E a variável "resultado_soma" recebe o valor da soma
  let porcentagem_alunos = ascesso_internet / numero_alunos *100;
  porcentagem_alunos = porcentagem_alunos + "%"

  //Aqui vai escrever no input "resultado_soma" o valor que está armazenado na variável "resultado_soma"
  document.getElementById("porcentagem").value = porcentagem_alunos;


}
