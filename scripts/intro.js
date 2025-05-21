const greetings = [
  "• Olá", // Português
  "• Hello", // Inglês
  "• 你好", // Chinês (Nǐ hǎo)
  "• Bonjour", // Francês
  "•مرحبًا", // Árabe
  "• Hola", // Espanhol
  "• Привет", // Russo (Privet)
  "• Ciao", // Italiano
  "• 안녕하세요", // Coreano (Annyeonghaseyo)
  "• Γειά σου", // Grego (Yiá sou)
  "• こんにちは", // Japonês (Konnichiwa)
];

const introText = document.getElementById("intro-text");
const introDiv = document.querySelector(".introDiv");
const body = document.querySelector("body");

let i = 0;
body.style.height = "100vh";
const interval = setInterval(() => {
  if (i < greetings.length) {
    setTimeout(() => {
      introText.textContent = greetings[i];
      introText.style.opacity = "0.3";
    }, 100);
    introText.style.opacity = "0.8";
    i++;
  } else {
    introText.style.opacity = "0.8";
    i--;
    introText.textContent = greetings[i];
    clearInterval(interval);
    body.style.height = "auto";
    introDiv.classList.add("exit");
  }
}, 200);
