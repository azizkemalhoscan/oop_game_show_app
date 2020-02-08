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
let phrase = 'null';
phrase = new Phrase(game.activePhrase);
document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
  console.log(this.phrase);
  console.log(game.activePhrase);
})

// Added event listener for on screen keyboard clicks
const onScreenQwerty = document.getElementById('qwerty');
console.log(onScreenQwerty);
onScreenQwerty.addEventListener('click', (e) => {
  if(e.target.className === 'key'){
    game.handleInteraction(e.target);
  } else {
    console.log('wrong click')
  }
})

// BUGS TO FIX!!!

/*
  Active phrase and the phrase that is logged to the
  dom does not match

  handle interaction disable rather than removing
*/
