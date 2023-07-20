function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    switch (choiceNumber) {
        case 1:
            choice = "rock"
            break;
        case 2:
            choice = "scissors";
            break;
        case 3:
            choice = "paper";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors!"
        } else if (computerSelection === "paper") {
            return "You lost! Paper beats Rock!"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lost! Rock beats Scissors!"
        } else if (computerSelection === "paper") {
            return "You win! Scissors beat Paper!"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock!"
        } else if (computerSelection === "scissors") {
            return "You lost! Scissors beat Paper!"
        }
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("computer selection: " + computerSelection)
console.log(playRound(playerSelection, computerSelection));
