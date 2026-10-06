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

function playGame() {
    for( let i = 0 ; i < 5 ; i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, i);
    }
    function playRound(humanChoice, computerChoice, i) {
        if(humanChoice === computerChoice){
                console.log("you got the same choice try again");
        }
        else if(humanChoice === 'rock' && computerChoice === 'scissors')
        {
            humanScore++;
             console.log(`you win the ${i} round!`);
        }
        else if(humanChoice === 'scissors' && computerChoice === 'paper')
        {
            humanScore++;
             console.log(`you win the ${i} round!`);
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock')
        {
            humanScore++;
            console.log(`you win the ${i} round!`);
        }
        else
        {
            computerScore++;
            console.log(`you lose the ${i} round!`);
        }
    }
    computerScore > humanScore ? console.log("computer win!!!") : computerScore === humanScore ? console.log("it's a tie!!!") : console.log("you win!!!");

}

playGame();



