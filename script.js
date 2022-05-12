// 0 == rock
// 1 == paper
// 2 == scissors

//necessary global values to keep track of 5 round score
let userScore = 0;
let cpuScore = 0;
let playerSelection = "";

//Algorithm
//
// User is prompted with welcome message and asked to play RPS
//User then inputs RPS
//The user RPS value is then stored in a variable and a function
//User RPS is sent to be converted from string to numerical value
//is called to get CPU RPS
//CPU RPS is stored in variable
//CPU RPS and user RPS is then sent to be evaluated to see if there is a tie or win/loss
//The result is then stored and sent to another function that displays the result
//A function will receive the result and displays the appropriate result message
//The game is now over

function game() {
  for (let i = 0; i < 5; i++) {
    getPlayerSelection();
    console.log(`You played ${playerSelection}.`);
    let computerSelection = computerPlay();
    console.log(`The computer plays ${computerSelection}.`);
    let gameResult = playRound(playerSelection, computerSelection);
    displayResult(gameResult, playerSelection, computerSelection);
    score(gameResult);
  }
  if (userScore === cpuScore) console.log("Tie. No one wins the game");
  else if (userScore > cpuScore) console.log("You win the game");
  else console.log("CPU wins the game");
}
game();

function getPlayerSelection() {
  let input = prompt(
    "Welcome to RPS. Type 'rock', 'paper', or 'scissors' to play."
  );
  if (
    input == null ||
    input == undefined ||
    (input.toLowerCase() !== "rock" &&
      input.toLowerCase() !== "paper" &&
      input.toLowerCase() !== "scissors")
  ) {
    alert('Invalid input. Please type "rock" , "paper", or "scissors".');
    getPlayerSelection();
  } else {
    input = input.toLowerCase();
    return (playerSelection = input);
  }
}

//function check(value) {}

function computerPlay() {
  cpuValue = Math.floor(Math.random() * 3);
  if (cpuValue == 0) return "Rock";
  else if (cpuValue == 1) return "Paper";
  else return "Scissors";
}

function playRound(userValue, cpuValue) {
  userValue = userValue.toLowerCase();
  cpuValue = cpuValue.toLowerCase();

  switch (true) {
    case userValue === cpuValue:
      return null;
      break;
    case userValue === "rock" && cpuValue === "scissors":
      return true;
      break;
    case userValue === "paper" && cpuValue === "rock":
      return true;
      break;
    case userValue === "scissors" && cpuValue === "paper":
      return true;
      break;

    default:
      return false;
      break;
  }
}

function displayResult(result, player, cpu) {
  if (result == true) console.log("You Win! " + `${player} beats ${cpu}.`);
  else if (result == false)
    console.log("You Lose! HAHAHA. " + `${cpu} beats ${player}.`);
  else console.log("Its a tie... boring");
}

function score(gameResult) {
  if (gameResult == true) userScore += 1;
  else if (gameResult == false) cpuScore += 1;
  else (userScore += 0.5), (cpuScore += 0.5);
  let gameScore = `The score is: User ${userScore} - ${cpuScore} CPU`;
  console.log(gameScore);
}
