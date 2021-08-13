// Solving https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors
//Randomly returns 'Rock', 'Paper', or 'Scissors'
// @ts-check
let computerScore = 0;
let playerScore = 0;
let roundWinner = "";


const computerPlay = () => { 
  let choices = ['rock', 'paper', 'scissors'];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    computerScore++;
    playerSelection++;
    return "It's a tie";
  } else {
    switch (playerSelection) {
      case 'rock':
        switch (computerSelection) {
          case 'paper':
            computerScore++;
            return "You Lose! Paper beats Rock";
          case 'scissors':
            playerScore++;
            return "You Win! Rock beats Scissors";
        }
      case 'paper':
        switch (computerSelection) {
          case 'rock':
            playerScore++;
            return "You Win! Paper beats Rock";
          case 'scissors':
            computerScore++;
            return "You Lose. Scissors beats Paper";
        }
      case 'scissors':
        switch(computerSelection) {
          case 'rock':
            computerScore++;
            return "You Lose. Rock beats scissors";
          case 'paper':
            playerScore++;
            return "You Win. Scissors beats Paper";
        } 
      }

  }
}

const game = () => { // Plays a 5 round game that keeps score and reports a winner or loser at the end.
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("You are the final WINNER!");
  } else if (computerScore > playerScore) {
    console.log("Sorry, you LOSE");
  } else {
    console.log("It's a TIE");
  }
}

let playerSelection = window.prompt("Rock, Paper, Scissors?", "Rock");

game();