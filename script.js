const titles = ["CS Student", "Web Designer", "Software Dev"];
let index = 0;

const flipper = document.querySelector(".flipper");
const flipText = document.getElementById("flip-text");

function changeText() {
  // Fase 1: Anima a saída
  flipper.classList.add("flip-up");

  setTimeout(() => {
    // Troca o texto após a saída
    index = (index + 1) % titles.length;
    flipText.textContent = titles[index];

    // Fase 2: Aplica a animação de entrada
    flipper.classList.remove("flip-up");
    flipper.classList.add("flip-down");

    // Remove a classe flip-down após a animação de entrada
    setTimeout(() => {
      flipper.classList.remove("flip-down");
    }, 800);
  }, 300);
}

setInterval(changeText, 1900);
