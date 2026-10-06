let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    choice == 0 ? console.log("rock") : choice == 1 ? console.log("paper") : console.log("scissors");
}

getComputerChoice();