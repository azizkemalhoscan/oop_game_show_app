

let game = 'null';
game = new Game();
let phrase = 'null';
phrase = new Phrase(game.activePhrase);
document.getElementById('btn__reset').addEventListener('click', () => {

    game.resetGame();
    game.startGame();

})
// let deneme = document.querySelectorAll('.keyrow .key')
// console.log(deneme[1].className);

const onScreenQwerty = document.getElementById('qwerty');
console.log(onScreenQwerty);
onScreenQwerty.addEventListener('click', (e) => {
  if(e.target.className === 'key'){
    game.handleInteraction(e.target);
  } else {
    console.log('wrong click')
  }
})
