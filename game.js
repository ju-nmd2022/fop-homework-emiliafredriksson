const movesElement = document.getElementsByClassName("move");
const playerElement = document.getElementById("player");
const computerElement = document.getElementById("computer");
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

let computerMoves = ["✊", "🤚", "✌️"];
let computerMove = "";
let playerMove = "";
let playermove = 0;
let playerScore = 0;
let computerScore = 0;

for (let moveElement of movesElement) {
  moveElement.addEventListner("click", () => {
    displayPlayerMove(moveElement.innerText);
    displayComputerMove();
    computeScores();
  });
}

function displayPlayerMove(move) {
  playerMove = move;
  playerElement.innerText = "👩‍💻: " + move;
}

function displayComputerMove() {
  let randomIndex = Math.floor(Math.random() * 3);
  computerMove = computerMoves[randomIndex];
  computerElement.innerText = "💻:" + computerMove;
}

function computeScores() {
  if (
    (playerMove === "✊" && computerMove === "✌️") ||
    (playerMove === "🤚" && computerMove === "✊") ||
    (playerMove === "✌️" && computerMove === "🤚")
  ) {
    playerScore += 1;
  } else if (
    (computerMove === "✊" && playerMove === "✌️") ||
    (computerMove === "🤚" && playerMove === "✊") ||
    (computerMove === "✌️" && playerMove === "🤚")
  ) {
    computerScore += 1;
  }
}
