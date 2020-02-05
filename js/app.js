/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);


// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });
//--------------------------------------------------------
// THIS 'a' is importsnt here
// const a  = game.getRandomPhrase().split('');
// console.log(a);
// -------------------------------------------------------
// Use this to generate array of alphabet
// const alphabet = Array.from(Array(26), (e, i) => String.fromCharCode(i + 97));
// console.log(alphabet);
// -------------------------------------------------------
// const game = new Game();
// addPhraseToDisplay();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase}`);

var game;
document.getElementById('btn__reset').addEventListener('click', () => {
  var game = new Game();
  game.startGame();
  var elementsLi = document.querySelectorAll('#phrase li');
  elementsLi[1].className = "show letter";
});


var overLay = document.getElementById('overlay');
overLay.style.display = 'block';
overLay.style.backgroundColor = '7BCE85';
console.log(overLay);

// var keyboard = document.getElementById('qwerty');
// keyboard.addEventListener('click', (e) => {
//   console.log('pressed')
// })
// let li = document.createElement('LI');
// li.classList.add("space");

// li.classList.remove("space");
// // li.classList.remove("space");
// console.log(li);
    // var keyboard = document.getElementById('qwerty');
    // var selectLetter =document.getElementsByClassName('key');
    // console.log(selectLetter[1].innerHTML);
    // keyboard.addEventListener('clicked', (e) => {
    //   let indexArr = [];
    //   for(let i = 0; i < selectLetter.length; i++){
    //     for(let j = 0; j < this.phrase.length; j++){
    //       if(selectLetter[i] === this.phrase[j]){
    //         // indexArr.push(j);
    //         indexArr.push(this.phrse[j]);

    //       }
    //     }
    //   }
    //   return console.log(indexArr);
    // })
     // return indexArr;
/*
  STEP 6
  Here I looped over element of randomly picked phrase.
  and created list items relatively
*/
// const createLetterDiv = document.createElement('DIV');
// const createLetterUL = document.createElement('UL');
// createLetterDiv.appendChild(createLetterUL);
// for(let i=0; i < a.length; i++){
//   if(a[i].match(/[a-z]/i)){
//     let li = document.createElement('LI');
//     li.classList.add(`hide`, `letter`, `${a[i]}`);
//     li.innerHTML = a[i];
//     createLetterUL.appendChild(li);
//   } else if (a[i].match(/\s/)) {
//     let li = document.createElement('LI');
//     li.classList.add("space");
//     createLetterUL.appendChild(li);
//   }
// }
// const parentDiv = document.getElementById('overlay');
// const siblingElementAfter = document.getElementById('game-over-message');
// parentDiv.insertBefore(createLetterDiv, siblingElementAfter);



