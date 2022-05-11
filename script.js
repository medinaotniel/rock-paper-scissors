console.log("test");
let userGame;
let cpuGame;
// User is prompted with welcome message and asked to play RPS
userValue();
//User then inputs RPS
//The user RPS value is then stored in a variable and a function
//is called to get CPU RPS
function userValue() {
  userGame = prompt(
    "Welcome to RPS. Type 'rock', 'paper', or 'scissors' to play."
  );
  cpuValue();
}

//CPU RPS is stored in variable
//CPU RPS and user RPS is then sent to be evaluated to see if there is a tie or win/loss
//The result is then stored and sent to another function that displays the result
//A function will receive the result and displays the appropriate result message
//The game is now over
