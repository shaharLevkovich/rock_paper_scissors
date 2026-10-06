let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choiceComputer = Math.floor(Math.random() * 3);
    return choiceComputer == 0 ? 'rock' : choiceComputer == 1 ? "paper" : "scissors";
}

function getHumanChoice(){
     let choiceHuman = prompt("What's your choice?");
     return choiceHuman = choiceHuman.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        console.log("you got the same choice try again");
    }
  else if(humanChoice === 'rock' && computerChoice === 'scissors')
  {
    humanScore++;
    console.log("you win!");
    console.log(humanChoice, computerChoice);
  }
  else if(humanChoice === 'scissors' && computerChoice === 'paper')
  {
    humanScore++;
    console.log("you win!");
    console.log(humanChoice, computerChoice);
  }
  else if(humanChoice === 'paper' && computerChoice === 'rock')
  {
    humanScore++;
    console.log("you win!");
    console.log(humanChoice, computerChoice);
  }
  else
  {
    computerScore++;
    console.log("you lose!");
    console.log(humanChoice, computerChoice);
  }
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
