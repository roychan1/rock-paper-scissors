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
    let scoreSelf = 0, scoreComputer = 0;
    const buttons = document.querySelectorAll('button');
    const result = document.querySelector('#result');
    const scoreS = document.querySelector('#score-self');
    const scoreC = document.querySelector('#score-computer');
    const final = document.querySelector('#final');

    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            switch(playRound(e.target.getAttribute('id'), getComputerChoice())) {
                case 1:
                    result.textContent = 'You win!';
                    scoreSelf++;
                    scoreS.textContent = scoreSelf;
                    if (scoreSelf >= 5) final.textContent = "You win the game!";
                    break;
                case 2:
                    result.textContent = 'You lose!';
                    scoreComputer++;
                    scoreC.textContent = scoreComputer;
                    if (scoreComputer >= 5) final.textContent = "You lose the game!";
                    break;
                case 3:
                    result.textContent = 'You tied!';
                    break;
                default:
                    result.textContent = 'Something went wrong!';
            }
        })
    })
}

game();