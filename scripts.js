const getComputerChoice = () => {
    let arrays = ["rock","paper","scissors"];
    return arrays[Math.floor(Math.random() * arrays.length)];
};
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
        return `It's a Tie! You both picked ${playerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));