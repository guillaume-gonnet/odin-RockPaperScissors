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

function getPlayerSelection() {
    let playerSelection = "";
    do {
        playerSelection = prompt("Enter your choice: rock/paper/scissors").toLowerCase();
    } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

    return playerSelection;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winner = "";
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerSelection();
        console.log(`Round ${i}: computer: ${computerSelection} vs player: ${playerSelection}`);
        let message = playRound(playerSelection, computerSelection);
        console.log(message);
        if (message.charAt(4) === "w") {
            playerScore++;
        } else if (message.charAt(4) === "l") {
            computerScore++;
        }
    }
    if (computerScore > playerScore) {
        console.log(`Winner is computer with ${computerScore} points vs ${playerScore}`);
        return winner = "computer";
    } else if (playerScore > computerScore) {
        console.log(`Winner is player  with ${playerScore} points vs ${computerScore}`);
        return winner = "player";
    } else {
        console.log("Tie");
        return "tie"
    }

}

game();
