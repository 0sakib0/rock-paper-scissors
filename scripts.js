let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let reset = document.querySelector('.reset');
let playerScoreText = document.querySelector('.playerscore');
let computerScoreText = document.querySelector('.computerscore') ;
let roundsText = document.querySelector('.rounds');
let winner = document.querySelector('.currentresult');


let buttons = document.querySelectorAll('img');
buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        oneClick(buttons.ariaValueText)
    })
});


const getComputerChoice = () => {
    let arrays = ["Rock","Paper","Scissors"];
    return arrays[Math.floor(Math.random() * arrays.length)];
};


function winnerChecker(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"; 
    } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
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


function scoreUpdater(playerSelection, computerSelection) {
    const score = winnerChecker(playerSelection, computerSelection);
    if (score == "Tie") {
       return ++rounds;
    } else if (score == "Player") {
        return ++playerScore && ++rounds;
    } else {
        return ++computerScore && ++rounds;
    }
}
  
function oneClick(playerSelection) {
    const computerSelection = getComputerChoice();
    let winnerOutcome = playRound(playerSelection, computerSelection);
    scoreUpdater(playerSelection, computerSelection);
    roundsText.textContent = `Round:${rounds}`;
    playerScoreText.textContent = `Player:${playerScore}`;
    computerScoreText.textContent = `Computer:${computerScore}`;
    winner.textContent = `${winnerOutcome}`
    gameOver();
    
}

function gameOver() {
    if (playerScore == 5) {
        return winner.textContent = 'Congo "You win"! CLick above button to play again' 
    } else if (computerScore == 5) {
        return winner.textContent = "Sorry you lost to Computer,\ntry again by clicking above button!"
    }
}

reset.addEventListener('click', () => {
    location.reload();
})

