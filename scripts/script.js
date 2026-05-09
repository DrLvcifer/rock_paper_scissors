let humanScoreCount = 0;
let cpuScoreCount = 0;

/*_________________________________
+++++++++++++++++++++++++++++++++++
    THE HUMAN LOGIC
+++++++++++++++++++++++++++++++++++
---------------------------------*/

const rockChoice = document.getElementById("rock-container");
const paperChoice = document.getElementById("paper-container");
const scissorsChoice = document.getElementById("scissors-container");

function getHumanChoice() {
   rockChoice.addEventListener("click", (e) => {
      return "rock";
   });

   paperChoice.addEventListener("click", (e) => {
      return "paper";
   });

   scissorsChoice.addEventListener("click", (e) => {
      return "scissors";
   });
}

/*_________________________________
+++++++++++++++++++++++++++++++++++
    THE CPU LOGIC
+++++++++++++++++++++++++++++++++++
---------------------------------*/

function getCpuChoice() {
   const choices = ["rock", "paper", "scissors"];

   let cpuChoice = choices[Math.floor(Math.random() * choices.length)];

   return cpuChoice;
}

function getResult(getHumanChoice, getCpuChoice) {
   if (getHumanChoice === getCpuChoice) {
      return "tie";
   } else if (
      (getHumanChoice === "rock" && getCpuChoice === "scissors") ||
      (getHumanChoice === "paper" && getCpuChoice === "rock") ||
      (getHumanChoice === "scissors" && getCpuChoice === "paper")
   ) {
      return "win";
   } else {
      return "lose";
   }
}

console.log(getResult());

/*_________________________________
+++++++++++++++++++++++++++++++++++
    Game Dealer
+++++++++++++++++++++++++++++++++++
---------------------------------*/

function playGame(getResult) {
   const humanScore = document.getElementById("human-score");
   const cpuScore = document.getElementById("cpu-score");
   const scoreCall = document.createElement("h2");
   const scoreBoard = document.getElementById("score-board");

   for (let i = 0; i < 5; i++) {
      if (getResult === 1) {
         scoreCall.textContent = "Tie!";
         scoreBoard.appendChild(scoreCall);
      } else if (getResult === 2) {
         scoreCall.textContent = `${getHumanChoice} beats ${getCpuChoice} Your Hand Win!`;
         scoreBoard.appendChild(scoreCall);
         humanScore.textContent = +1;
      } else {
         scoreCall.textContent = `${getCpuChoice} beats ${getHumanChoice} Your Hand Lose!`;
         scoreBoard.appendChild(scoreCall);
         cpuScore.textContent = +1;
      }

      if (i === 5) {
         return 0;
      }
   }
}
