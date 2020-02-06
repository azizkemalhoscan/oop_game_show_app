/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

      /*
  STEP 6
  Here I looped over element of randomly picked phrase.
  and created list items relatively
*/

addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = this.phrase[i];
      if (this.phrase[i] === " ") {
        li.className = "space";
        //else class name is hide letter because it must be a letter if it is not a space,
        //also adding this.phrase[i] to add the letter type to the end of the class name
      } else {
        li.className = "hide letter " + this.phrase[i];
      }
      //li element is appended to ul which already exists and has the id phrase
    }
      document.querySelector('#phrase ul')
        .appendChild(li);
  }


  // addPhraseToDisplay(){

  //   for(let i=0; i < this.phrase.length; i++){
  //     let li = document.createElement('LI');
  //     li.innerHTML = this.phrase[i];
  //     if(this.phrase[i].match(/[a-z]/i)){
  //       li.classList.add(`hide`, `letter`, `${this.phrase[i]}`);
  //     } else if (this.phrase[i].match(/\s/)) {
  //       li.classList.add("space");
  //     }
  //     document.querySelector('#phrase ul').appendChild(li);
  //   }
  // }


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
      if(elementsLi[i].innerHTML === char){
        elementsLi[i].className = 'show letter';
      }
    }
  }
}
