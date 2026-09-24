/* function get computer choice will
return rock, paper, scissors at random. */

/* get humans choice and return a valid choice for the user
input. Us prompt method to get user's input. no error handling 
for now. */

/* GOAL: at the end of each round show the score depending on where
what player wins. the score for the player/computer changes accordingly  */

// Variables

//Container

// Intro question Function
// function getQuestion() {
//   const qContainer = document.querySelector("#introQuestionContainer");
//   qContainer.textContent = "rock paper scissors".toLocaleUpperCase();
//   qContainer.className =
//     "bg-blue-300 w-screen h-50 flex flex-col justify-center items-center text-bold text-md gap-5";

//   let yesBtn = document.createElement("button");
//   yesBtn.textContent = "Yes";
//   yesBtn.className = "bg-green-300 border p-1 h-10 w-10";
//   yesBtn.id = "yes-btn";

//   let noBtn = document.createElement("button");
//   noBtn.textContent = "No";
//   noBtn.className = "bg-green-300 border p-1 h-10 w-10";
//   noBtn.id = "no-btn";

//   yesBtn.addEventListener("click", function () {
//     console.log("you Clicked Yes");
//     // playGame();
//   });

//   noBtn.addEventListener("click", function () {
//     console.log("you Clicked No");
//   });

//   qContainer.appendChild(yesBtn);
//   qContainer.appendChild(noBtn);
// }
// getQuestion();

// Game Logic
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let choices = ["rock", "paper", "scissors"];

  //   Game Container
  let gameContainer = document.createElement("div");
  gameContainer.textContent = "Rock Paper Scissors";
  gameContainer.className =
    "bg-orange-600 h-auto w-full flex flex-col justify-center items-center gap-6";
  document.body.appendChild(gameContainer);

  function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  let btnContainer = document.createElement("div");
  btnContainer.className = " h-full w-screen flex justify-center border-2";

  function getPlayerChoice() {
    let round = 0;

    choices.forEach(function (choice) {
      let btn = document.createElement("button");
      btn.textContent = choice;
      btn.className = "bg-green-300 border h-20 w-30 text-md text-stone-800 ";
      btn.dataset.target = choice;

      btn.addEventListener("click", function (e) {
        if (round >= 3) return;

        round++;

        const player = e.target.dataset.target;
        const computer = getRandomChoice();

        console.log(`\n --- Round ${round} ---`);
        console.log(`You chose: ${player}`);
        console.log(`Computer chose: ${computer}`);

        if (player === computer) {
          console.log("It's a draw!");
        } else if (
          (player === "rock" && computer === "scissors") ||
          (player === "scissors" && computer === "paper") ||
          (player === "paper" && computer === "rock")
        ) {
          console.log("You win this round!");
          humanScore++;
        } else {
          console.log("Computer wins this round!");
          computerScore++;
        }

        //   Results;

        if (round === 3) {
          console.log("\n == Game Over ==");
          if (humanScore > computerScore) {
            console.log("🏆 You won the game!");
          } else if (computerScore > humanScore) {
            console.log("💻 The computer won the game.");
          } else {
            console.log("🤝 It's a tie!");
          }
        }
      });

      gameContainer.appendChild(btnContainer);
      btnContainer.appendChild(btn);
    });
  }
  getPlayerChoice();
}

playGame();
