/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//  let game = 'null';
//  game = new Game();
//  console.log(game.phrase);
// document.getElementById('btn__reset').addEventListener('click', () => {
//   game.startGame();
// })

let button = document.querySelectorAll('.keyrow button');
console.log(button[0]);


let game = 'null';
game = new Game();
let phrase = 'null';
phrase = new Phrase(game.activePhrase);
document.getElementById('btn__reset').addEventListener('click', () => {
  if(game.checkForWin === false || game.miss < 5){
    game.startGame();
  } else if(game.gameOver(false)){
    game.resetGame();
  }
  // console.log(this.phrase);
  // console.log(game.activePhrase);
})

// document.getElementById('btn__reset').addEventListener('click', () => {
//   if(game.gameOver(true)){
//     game.startGame();
//   } else if(game.gameOver(false)){
//     game.resetGame();
//   }
//   // console.log(this.phrase);
//   // console.log(game.activePhrase);
// })

//   1- Need to check if the game ended.
//     . Check if the checkforwin is true - Game won

   // if (game.checkForWin === true || game.miss > 4){}

//     . Check if there is more than 5 misses -
//   2- Remove al LI elements from the ul element

  // let parent = document.querySelector('#phrase ul');
  // // If there is a firstchild remove that first child.
  // while (parent.firstChild){
  //   parent.firstChild.remove();

  // }


//   3- Remove all the css added during the game.
 // Element.disabled = false;

//   chosen wrong will turn into key again.

//   space show

// var key = button.textContent;
// for(let i = 0; i < this.activePhrase)



//   4- Reset the hearts.

  //   if (game.checkForWin === true || game.miss > 4){
  //     let parent = document.querySelector('#phrase ul');
  // // If there is a firstchild remove that first child.
  //     while (parent.firstChild){
  //       parent.firstChild.remove();
  //     }

  //   }









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

