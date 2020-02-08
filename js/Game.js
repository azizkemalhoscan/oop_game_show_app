/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
  constructor(){
    this.miss = 0;
    // This is for me --I struglled here a lot because I wasnt paying attention to the type of objects.
    // I hard coded strings belove but It was expecting me to construct new Phrase objects
    // so I changed
    this.phrases = [new Phrase('hello'), new Phrase('ea sports'), new Phrase('taksim'), new Phrase('inigeym'), new Phrase('buycak')];
    this.activePhrase = this.getRandomPhrase();
  }

  getRandomPhrase() {
    let randomPickInteger = Math.floor(Math.random() * this.phrases.length)  ;
    return this.phrases[randomPickInteger];
  }


  startGame(){
    let hideOverlay = document.getElementById('overlay');
    hideOverlay.style.display = 'none';
    let randomPhrase = this.getRandomPhrase();
    let phrase = this.activePhrase;
    phrase = randomPhrase;
    // this.activePhrase = this.getRandomPhrase();
    phrase.addPhraseToDisplay();
  }



  handleInteraction(){

  }


  checkForWin() {
      var liElements = document.querySelectorAll('#phrase li');
      var sentinal = true;
      for(let i = 0; i < liElements.length; i++) {
        if(!(liElements[i].className == "show char" || liElements[i].className == "space")) {
          sentinal = false;
       }
    }
    console.log("checkforwin is " + sentinal);
     return sentinal;
  };

// // // ---------------------------------------------------------------
//   checkForWin(){
//     var elementsLi = document.querySelectorAll('#phrase li');
//     const filteredElements = elementsLi.filter(element => { element.className === "show char" ? true : false})
//       if(filteredElements.length === phrase.length){
//         return true;
//       }
//     }

  removeLife(char){
    this.miss += 1;
    if(this.miss < 5){
      var orderedList = document.getElementById('scoreboard').firstElementChild;
      orderedList.removeChild(orderedList.firstElementChild);
    } else {
      this.gameOver(false);
    }
  }

  gameOver(gameWon){
    var gameOverMessage = document.getElementById('game-over-message');
    var overLay = document.getElementById('overlay');
    // You can add some css to overlay
    if(gameWon){
      gameOverMessage.innerHTML = "YOU WON! GREAT!";
      overLay.style.display = 'block';
    } else {
      gameOverMessage.innerHTML = "BAD LUCK TRY AGAIN!";
      overLay.style.display = 'block';
    }
  }


// Fill this method later ... Already hard coded up below constructor method.

  createPhrases() {
  }

  handleInteraction(button) {
    var char = button.textContent;
    //console.log(this.activePhrase.checkchar(char));
    button.disabled = 'true';
    if(this.activePhrase.checkLetter(char)){
      this.activePhrase.showMatchedLetter(char);
      button.classList.add('chosen');
      if(this.checkForWin()){
        this.gameOver(true);
      }
    }else{
      this.removeLife();
      button.classList.add('wrong');
    }
  }
}

