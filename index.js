function getComputerChoice () {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // 0 is error, 1 is win, 2 is loss, 3 is tie
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 3;
    } else {
        switch (playerSelection.toUpperCase()) {
            case 'ROCK':
                return computerSelection.toUpperCase() === 'SCISSORS' ? 1 : 2;
            case 'PAPER':
                return computerSelection.toUpperCase() === 'ROCK' ? 1 : 2;
            case 'SCISSORS':
                return computerSelection.toUpperCase() === 'PAPER' ? 1 : 2;
            default:
                return 0;
        }
    }
}

function game() {
    let scoreCount = 0;
    for (let i = 0; i < 5; i++) {
        let choice;
        while (!choice) {
            choice = prompt("Enter your choice: ");
        }

        switch(playRound(choice, getComputerChoice())) {
            case 1:
                console.log('You win!');
                scoreCount++;
                break;
            case 2:
                console.log('You lose!');
                scoreCount--;
                break;
            case 3:
                console.log('You tied!');
                break;
            default:
                console.log('Something went wrong!');
        }
    }

    if (scoreCount > 0) {
        console.log("You win the game!");
    } else if (scoreCount < 0) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

game();