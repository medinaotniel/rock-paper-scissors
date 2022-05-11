// 0 == rock
// 1 == paper
// 2 == scissors

console.log("test");
let userValue;
let cpuValue;
let gameResult;
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
  convert(userValue);
}

//converts user RPS to numerical value
function convert(value) {
  if (value === "rock") userValue = 0;
  else if (value === "paper") userValue = 1;
  else userValue = 2;
  cpuGetValue();
  getResult();
}
//CPU RPS is stored in variable
function cpuGetValue() {
  cpuValue = Math.floor(Math.random() * 3);
  console.log("Test");
}
//CPU RPS and user RPS is then sent to be evaluated to see if there is a tie or win/loss
function getResult() {
  switch (true) {
    case userValue === cpuValue:
      gameResult = null;
      break;
    case userValue === 0 && cpuValue === 2:
      gameResult = true;
      break;
    case userValue === 1 && cpuValue === 0:
      gameResult = true;
      break;
    case userValue === 2 && cpuValue === 1:
      gameResult = true;
      break;
    default:
      gameResult = false;
      break;
  }
  displayResult();
}
//The result is then stored and sent to another function that displays the result
//A function will receive the result and displays the appropriate result message
//The game is now over
function displayResult() {
  if (gameResult == true) console.log("You Win!");
  else if (gameResult == false) console.log("You Lose! HAHAHA");
  else console.log("Its a tie... boring");
}
//function that controls stack
//control();
function control() {}
