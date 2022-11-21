const getComputerChoice = () => {
    let arrays = ["rock","paper","scissors"];
    return arrays[Math.floor(Math.random() * arrays.length)];
};


function winnerChecker(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"; 
    } else if (
    (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }  
}

function playRound(playerSelection, computerSelection) {
    const result = winnerChecker(playerSelection, computerSelection);
    if(result == "Tie") {
        return `It's a Tie! You both picked ${playerSelection}`
    } else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection};`
    }
  }

function getPlayerChoice() {
        const playerChoice = prompt("Enter your move between Rock Paper and Scissors:");
        return playerChoice.toLowerCase();
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        
        let playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (winnerChecker(playerSelection, computerSelection) == "Computer") {
            ++computerScore;
    } else if(winnerChecker(playerSelection, computerSelection) == "Player") {
        ++userScore;
    }

} console.log("Game Over")
  if(userScore > computerScore) {
    console.log("You won!");
  } else {
    console.log("Computer Won!");
  }

}

game();