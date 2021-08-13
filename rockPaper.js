const computerPlay() => { //Randomly returns 'Rock', 'Paper', or 'Scissors'
  let choices = ['Rock', 'Paper', 'Scissors'];
  return let computerChoice = choices[Math.floor(Math.random() * choices.length)];  
}
