/* function get computer choice will
return rock, paper, scissors at random. */

function getComputerChoice() {
   const choice ={
    1: "rock",
    2: "paper",
    3: "scissors"
    };

    const randomNum = Math.floor(Math.random() * 3) + 1;

    return choice[randomNum];
}

console.log(getComputerChoice());


// const userInput = document.getElementById("userInput");

// function getHumanChoice() {
// userInput.
// } {
    
// }
/* get humans choice and return a valid choice for the user
input. Us prompt method to get user's input. no error handling 
for now. */