function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let choices = ["rock", "paper", "scissors"];

  return choices[randomNumber];
}

let computerChoice = getComputerChoice();

function getHumanChoice() {
  let message = prompt("Choose rock, paper, or scissors:").toLowerCase();
  return message;
}

let humanChoice = getHumanChoice();
// console.log("Human chose:", humanChoice);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let playRound = function () {
    for (let round = 1; round <= 3; ++round) {
      let computerChoice = getComputerChoice();
      let humanChoice = getHumanChoice();
      console.log(`\nRound:${round}`);

      if (humanChoice === computerChoice) {
        console.log("It's a tie!");
      } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
      ) {
        console.log("You win this round!");
        humanScore++;
      } else {
        console.log("Computer wins this round!");
        computerScore++;
      }
    }

    if (humanScore > computerScore) {
      console.log(
        `\nYou won the game with a score of ${humanScore} to ${computerScore}!`,
      );
    } else if (computerScore > humanScore) {
      console.log(
        `\nComputer won the game with a score of ${computerScore} to ${humanScore}!`,
      );
    }
  };
  playRound();
}

playGame();
