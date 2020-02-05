/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

      /*
  STEP 6
  Here I looped over element of randomly picked phrase.
  and created list items relatively
*/
  addPhraseToDisplay(){
    // const a  = game.getRandomPhrase().split('');
    // const createLetterDiv = document.createElement('DIV');
    // createLetterDiv.id = 'phrase';
    // createLetterDiv.class = 'section';
    // const createLetterUL = document.createElement('UL');
    // createLetterDiv.appendChild(createLetterUL);
    for(let i=0; i < this.phrase.length; i++){
      let li = document.createElement('LI');
      li.innerHTML = this.phrase[i];
      if(this.phrase[i].match(/[a-z]/i)){
        li.classList.add(`hide`, `letter`, `${this.phrase[i]}`);
      } else if (this.phrase[i].match(/\s/)) {
        li.classList.add("space");
      }
      document.querySelector('#phrase ul').appendChild(li);
    }
  }
  checkLetter(char){
    if(this.phrase.indexOf(char) > -1){
      return true;
    } else {
      return false;
    }
  }


  showMatchedLetter(char){
    var elementsLi = document.querySelectorAll('#phrase li');
    for(let i = 0; i < elementsLi.length; i++){
      if(char === elementsLi[i].innerHTML){
        elementsLi[i].className = 'show letter';
      }
    }
  }
};
