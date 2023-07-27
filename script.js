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
        return "Nobody";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You";
        } else if (computerSelection === "paper") {
            return "Computer";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "Computer";
        } else if (computerSelection === "paper") {
            return "You";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You";
        } else if (computerSelection === "scissors") {
            return "Computer";
        }
    }
}

function updateWinner(winner) {
    document.querySelector('#result-round').textContent = `Winner of this round is ${winner}`;
};


function game() {
    let winnerRound = "";
    let winner = "";
    let round = 0;
    let player = {
        score: 0,
        name: 'player',
    };
    let computer = {
        score: 0,
        name: 'computer',
    }

    document.querySelectorAll('button').forEach(btn => {

        btn.addEventListener('click', e => {
            e.stopPropagation;
            let playerSelection = '';
            switch (e.target.id) {
                case 'button-rock':
                    playerSelection = 'rock';
                    break;
                case 'button-paper':
                    playerSelection = 'paper';
                    break;
                case 'button-scissors':
                    playerSelection = 'scissors';
                    break;
            };
            winnerRound = playRound(playerSelection, getComputerChoice());
            updateWinner(winnerRound);
            if (winnerRound === "You") {
                player.score++;
            } else if (winnerRound === "Computer") {
                computer.score++;
            }
            round++;
            if (round === 5) {
                endGame(player, computer);
            }
        }, false);
    });




}

function endGame(player, computer) {
    let winnerGame = '';
    if (computer.score > player.score) {
        winnerGame = "computer";
    } else if (player.score > computer.score) {
        winnerGame = "player";
    } else {
        winnerGame = "Nobody";
    }
    document.querySelector('#result-game').textContent = `Winner of this game is ${winnerGame}`;
}

game();
