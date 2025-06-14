/* function get computer choice will
return rock, paper, scissors at random. */

let humanScore = 0;
let computerScore = 0;

function getChoices() {
   return ["rock", "paper", "scissors"];
};

function getComputerChoice() {
    const choices = getChoices();
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}




/* get humans choice and return a valid choice for the user
input. Us prompt method to get user's input. no error handling 
for now. */

function getPlayerChoice(){
    const userInput = prompt("Enter rock, paper or scissors.");
    return userInput.trim().toLocaleLowerCase();
}


function playRound() {
    const player = getPlayerChoice();
    const computer = getComputerChoice();

    console.log("Player:", player);
    console.log("Computer:", computer);
            
  if (player === computer){ // input if you tie.
    console.log(player + " It's a tie! Try again.");

    // input if you Lose.
    } else if (player === "rock" && computer === "paper") {
        console.log("paper beats rock! Try Again.");
    }else if(player === "paper" && computer === "scissors"){
        console.log("scissors beat paper! Try Again.");
    }else if(player === "scissors" && computer === "rock"){
        console.log("rock beats scissors! try again");
    // input if you WIN
    } else if (player === "rock" && computer === "scissors"){
        console.log("rock beats scissors. You Win!");
    }else if(player === "paper" && computer === "rock"){
        console.log("paper beat rock. You Win!");
    }else if(player === "scissors" && computer === "paper"){
        console.log("scissors beats paper. You Win!");
    }else{
        prompt("Invalid input. Please enter rock, paper, or scissors.")
        playRound(console.log());
    }};
playRound([5]);

    // function playRound(getComputerChoice, userInput) {
    // if (getComputerChoice === userInput) {
    //     return console.log(" its a tie");
    // }
