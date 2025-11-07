let tamanhoFonte = 1;

function aumentarFonte() {
  tamanhoFonte += 0.1;
  document.querySelectorAll(".textoFonte").forEach(el => {
    el.style.fontSize = tamanhoFonte + "em";
  });
}

function diminuirFonte() {
  tamanhoFonte -= 0.1;
  document.querySelectorAll(".textoFonte").forEach(el => {
    el.style.fontSize = tamanhoFonte + "em";
  });
}
