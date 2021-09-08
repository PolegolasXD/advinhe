const botao = document.querySelector(".guessSubmit");
const valorAleatorio = Math.floor(Math.random() * 100 + 1);
const campoResposta = document.querySelector(".campoResposta");

function verificarResposta() {
  campoResposta.style.opacity = "1";
  const palpite = document.querySelector(".campo-do-palpite");
  const valorDaResposta = Number(palpite.value);

  if (valorDaResposta === valorAleatorio) {
    return (campoResposta.textContent = "Acertou, seu(sua) lindo(a) <3");
  } else {
    return (campoResposta.textContent = "Quase, seu(sua) lindo(a) <3");
  }
}

botao.addEventListener("click", verificarResposta);

function limparResposta() {
  campoResposta.style.opacity = "0";
}

setTimeout(limparResposta, 3000);

