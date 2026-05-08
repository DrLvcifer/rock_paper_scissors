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

getCpuChoice();

/*_________________________________
+++++++++++++++++++++++++++++++++++
    DOM MANIPULATION
+++++++++++++++++++++++++++++++++++
---------------------------------*/

/*_________________________________
+++++++++++++++++++++++++++++++++++
    THE HUMAN LOGIC
+++++++++++++++++++++++++++++++++++
---------------------------------*/

function getHumanChoice() {
   const rockChoice = document.getElementById("rock-container");
   const paperChoice = document.getElementById("paper-container");
   const scissorsChoice = document.getElementById("scissors-container");

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

getHumanChoice();

function getResult(getHumanChoice, getCpuChoice) {
   if (getHumanChoice === getCpuChoice) {
   }
}
