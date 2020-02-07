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
let phrase = new Phrase(game.activePhrase);


document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
})
