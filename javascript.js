let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    playRound(event.target.textContent, getComputerChoice());
  });
});

function getComputerChoice(){
    let choiceComputer = Math.floor(Math.random() * 3);
    return choiceComputer == 0 ? 'rock' : choiceComputer == 1 ? "paper" : "scissors";
}


function playRound(playerSelection, computerChoice) {
    let roundWinner = document.createElement("div");


    if(playerSelection === computerChoice){
        console.log("you got the same choice try again");
    }
    else if((playerSelection === 'rock' && computerChoice === 'scissors') ||
    (playerSelection === 'scissors' && computerChoice === 'paper') || 
    (playerSelection === 'paper' && computerChoice === 'rock'))
    {
        humanScore++;
        roundWinner.textContent = "you win the round";
        body.appendChild(roundWinner);
    }
    else
    {
        computerScore++;
        roundWinner.textContent = "the computer win the round";
        body.appendChild(roundWinner);
    }

    if(humanScore == 5)
    {
        let gameWinner = document.createElement("div");
        gameWinner.textContent = "congratulation you won the game";
        body.appendChild(gameWinner);
    }
    if(computerScore == 5)
    {
        let gameWinner = document.createElement("div");
        gameWinner.textContent = "The computer won the game";
        body.appendChild(gameWinner);
    }
}

