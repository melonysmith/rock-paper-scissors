  
function computerPlay() {
    let choice = Math.floor(Math.random() * Math.floor(3));

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playSingleRound(playerSelection, computerSelection) {
    let user = playerSelection.toUpperCase();
    let comp = computerSelection.toUpperCase();

    switch (true) {
        case (user == comp):
                roundMessage.textContent = `You both selected ${user}. It's a tie!`;
                break;
        case (user == "ROCK" && comp == "SCISSORS"):
        case (user == "SCISSORS" && comp == "PAPER"):
        case (user == "PAPER" && comp == "ROCK"):
            roundMessage.textContent = `You win! ${user} beats ${comp}.`;
            currentUserScore += 1;
            break;
        default:
            roundMessage.textContent = `You lose! ${comp} beats ${user}.`;
            currentCompScore += 1;
            break;
    }

    userScore.textContent = currentUserScore;
    compScore.textContent = currentCompScore;

    totalRoundsPlayed += 1;
    roundsPlayed.textContent = totalRoundsPlayed;
    
    if (currentUserScore == 5 || currentCompScore == 5) announceWinner();
}

function announceWinner() {
    let winner = (currentUserScore == 5) ? "user" : "comp";
    totalRoundsPlayed = 0;
    currentUserScore = 0;
    currentCompScore = 0;
    
    if (winner == "user") {
        roundMessage.innerHTML += "<br>You reached 5 points first. You won!";
    } else {
        roundMessage.innerHTML += "<br>The computer reached 5 points first. You lost!";
    }
}

const roundsPlayed = document.getElementById("roundsPlayed");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const roundMessage = document.getElementById("roundMessage");

let totalRoundsPlayed = 0;
let currentUserScore = 0;
let currentCompScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", buttonClicked));

function buttonClicked(e) {
    playSingleRound(this.getAttribute("id"), computerPlay());
}
