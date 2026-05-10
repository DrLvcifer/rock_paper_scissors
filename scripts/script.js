let playerScore = 0;
let cpuScore = 0;

const roundCall = document.getElementById("sub-title");
const livePlayerScore = document.getElementById("player-score");
const liveCpuScore = document.getElementById("cpu-score");
const resetBtn = document.getElementById("reset-btn");

console.log("reset-btn found:", resetBtn);

function getCpuChoice() {
   const choices = ["rock", "paper", "scissors"];
   return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(human, cpu) {
   if (playerScore >= 5 || cpuScore >= 5) return;

   if (human === cpu) {
      roundCall.textContent = "It's a Tie!";
   } else if (
      (human === "rock" && cpu === "scissors") ||
      (human === "paper" && cpu === "rock") ||
      (human === "scissors" && cpu === "paper")
   ) {
      playerScore++;
      livePlayerScore.textContent = playerScore;
      roundCall.textContent = `${human.toUpperCase()} beats ${cpu.toUpperCase()}, You Win!`;
   } else {
      cpuScore++;
      liveCpuScore.textContent = cpuScore;
      roundCall.textContent = `${cpu.toUpperCase()} beats ${human.toUpperCase()}, You Lose!`;
   }

   if (playerScore === 5) {
      roundCall.textContent = "🏆 You win the game! GAME OVER!";
      resetBtn.classList.remove("is-hidden");
   } else if (cpuScore === 5) {
      roundCall.textContent = "🤖 CPU wins the game! GAME OVER!";
      resetBtn.classList.remove("is-hidden");
   }
}

document
   .getElementById("rock-container")
   .addEventListener("click", () => playRound("rock", getCpuChoice()));
document
   .getElementById("paper-container")
   .addEventListener("click", () => playRound("paper", getCpuChoice()));
document
   .getElementById("scissors-container")
   .addEventListener("click", () => playRound("scissors", getCpuChoice()));

resetBtn.addEventListener("click", () => {
   playerScore = 0;
   cpuScore = 0;
   livePlayerScore.textContent = "0";
   liveCpuScore.textContent = "0";
   roundCall.textContent = "Choose your weapon to start!";
   resetBtn.classList.add("is-hidden");
});
