

/*
    TEST CODES GO HERE
    ------------------------------------------------
*/
// const phrase = new Phrase();
// const game = new Game();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
// const logPhrase = (phrase) => {
// console.log(`Phrase - phrase: `, phrase.phrase);
// };
// const game = new Game();
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// TAKE A LOOK AGAIN BELOW
// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

/* TEST CODES ABOVE
--------------------------------------------------
*/

// ===================================================
// RANDOM CODE TRY AREA









// ====================================================
// APP JS CODES GO DOWN HERE


// added an eventlistnere to start the game when start game button clicked.
let game;
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
  game = new Game();
  game.startGame();
  console.log(game.activePhrase);
// var LIelements = document.querySelectorAll('li');
// console.log(LIelements[0].classList);
// let showedElements = document.getElementsByClassName('hide letter')
//  console.log(showedElements[1])
})








