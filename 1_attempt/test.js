const readline = require("readline-sync");

const question = readline.question("Would you like to play a game of Rock, Paper, Scissors? (yes/no)").toLowerCase() === "yes";{



    if (question === true) {
        console.log("Great! Let's play!\n");
        // Here you would call the function to start the game
        
        
        function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let choices = ["rock", "paper", "scissors"];

    function getRandomChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function getPlayerChoice(){
        while (true) {
            const userInput = readline.question("Enter rock, paper or scissors.\n").trim().toLowerCase();
            if (choices.includes(userInput))
            return userInput; {
            }
            console.log("Invalid choice. Try again")
        }
    }

        for (let round = 1; round <= 5; round++){
        console.log(`\n --- Round ${round} ---`);
        const player = getPlayerChoice();
        const computer = getRandomChoice();

        console.log(`You chose: ${player}`);
        console.log(`Computer chose: ${computer}`);
     

    if (player === computer) {
        console.log("It's a draw!")
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock") 
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!")
        computerScore++;
    }
    console.log(`Score: You ${humanScore} - Computer ${computerScore}\n`);
};

   

    // Results
    console.log("\n == Game Over ==");
    if (humanScore > computerScore){
        console.log("🏆 You won the game!")
    } else if(computerScore > humanScore){
        console.log("💻 The computer won the game.")
    } else{
        console.log("🤝 It's a tie!")
    }
    }

    playGame();
        
   
    } else {
    console.log("Maybe next time!");
    }};
