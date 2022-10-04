const quote = document.getElementById("quote");
const input = document.getElementById("typed-value");
const start = document.getElementById("start");

let wordQueue;

function startGame() {
  console.log("Game started!");

  let quoteText = "type me";
  wordQueue = quoteText.split(" ");
  quote.innerHTML = wordQueue.map((word) => `<span>${word}</span>`).join("");
  startTime = new Date().getTime();
}

function checkInput() {
  const currentWord = wordQueue[0];
  const typedValue = input.value.trim();

  if (currentWord !== typedValue) {
    input.className = currentWord.startsWith(typedValue) ? "" : "error";
    return;
  }

  input.value = "";
}

start.addEventListener("click", startGame);
input.addEventListener("input", checkInput);
