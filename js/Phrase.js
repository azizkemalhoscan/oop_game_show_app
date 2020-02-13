/*
  1. Constructung Phrase class
*/

class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }


/*
 Display phrase on game board.

<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>
*/
  addPhraseToDisplay(){
    const selectUL = document.querySelector('#phrase ul');
    // const LIElements = '';
    for(let i =0; i < this.phrase.length; i++){
      const LIElements = document.createElement('LI');
      LIElements.textContent = this.phrase[i];
      var space = /\s/;
      if(space.test(this.phrase[i])){
        LIElements.classList = 'space'
      } else {
        LIElements.classList = 'hide letter';
      }
      selectUL.appendChild(LIElements);
    }
  }
//  Checks if passed letter is in the phrase
  checkLetter(letter){
    if(this.phrase.includes(letter)){
      return true;
    } else {
      return false;
    }
  }

// shows matched letter in the phrase rather than placehodler
// gets only the first index so it does not work
  showMatchedLetter(letter){

    let showedElements = document.getElementsByClassName('show letter')
    var LIElements = document.querySelectorAll('li');
    if(this.checkLetter(letter)){
      for(let i = 0; i < LIElements.length; i++){
        if(LIElements[i].textContent === letter){
          LIElements[i].classList = 'show letter';
        }
      }
    }
  }
}
