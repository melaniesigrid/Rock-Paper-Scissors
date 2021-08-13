// Solving https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors
const computerPlay = () => { //Randomly returns 'Rock', 'Paper', or 'Scissors'
  let choices = ['rock', 'paper', 'scissors'];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else {
    switch (playerSelection) {
      case 'rock':
        switch (computerSelection) {
          case 'paper':
            return "You Lose! Paper beats Rock";
          case 'scissors':
            return "You Win! Rock beats Scissors";
        }
      case 'paper':
        switch (computerSelection) {
          case 'rock':
            return "You Win! Paper beats Rock";
          case 'scissors':
            return "You Lose. Scissors beats Paper"
        }
      case 'scissors':
        switch(computerSelection) {
          case 'rock':
            return "You Lose. Rock beats scissors";
          case 'paper':
            return "You Win. Scissors beats Paper"
        }
      }

  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

const game = () => { // Plays a 5 round game that keeps score and reports a winner or loser at the end.
  for (let i = 0; i < 5; i++) {
    computerPlay();
}