// 0 == rock
// 1 == paper
// 2 == scissors

console.log("test");
let userValue;
let cpuValue;
// User is prompted with welcome message and asked to play RPS
userGetValue();
//User then inputs RPS
//The user RPS value is then stored in a variable and a function
//User RPS is sent to be converted from string to numerical value
//is called to get CPU RPS
function userGetValue() {
  userValue = prompt(
    "Welcome to RPS. Type 'rock', 'paper', or 'scissors' to play."
  );
  cpuGetValue();
  convert();
}

//converts user RPS to numerical value
//CPU RPS is stored in variable
function cpuGetValue() {
  cpuValue = Math.floor(Math.random() * 3);
}
//CPU RPS and user RPS is then sent to be evaluated to see if there is a tie or win/loss
//The result is then stored and sent to another function that displays the result
//A function will receive the result and displays the appropriate result message
//The game is now over
