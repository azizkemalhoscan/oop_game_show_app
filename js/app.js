/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//  let game = 'null';
//  game = new Game();
//  console.log(game.phrase);
// document.getElementById('btn__reset').addEventListener('click', () => {
//   game.startGame();
// })
let game = 'null';
game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
  console.log(game.phrases);
  console.log(game.activePhrase);
})

// Bugs

/*
  Active phrase and the phrase that is logged to the
  dom does not match
*/
