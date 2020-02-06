/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
  constructor(){
    this.miss = 0;
    this.phrases = ['hello', 'africa', 'tell', 'meow', 'congrolamate'];
    this.activePhrase = 'null';
  }

  getRandomPhrase() {
    let randomPickInteger = Math.floor(Math.random() * this.phrases.length)  ;
    return this.phrases[randomPickInteger];
  }


  startGame(){
    let hideOverlay = document.getElementById('overlay');
    hideOverlay.style.display = 'none';
    // const game = new Game();
    // let randomPhrase = this.getRandomPhrase();
    // let active = this.activePhrase;
    // active = randomPhrase;
    this.activePhrase = this.getRandomPhrase();
    // game.activePhrase = randomPhrase;
    // const phrase = game.activePhrase;
    this.activePhrase.addPhraseToDisplay();
  }



  // handleInteraction(){

  // }


// INVESTIGATE THIS CODE **
// createPhrases() {
//     var phrase = [new Phrase("Looks like we got another mystery on our hands"),
//             new Phrase("Would you do it for a Scooby Snack"),
//             new Phrase("What would you do for a Klondike bar"),
//             new Phrase("The best time to wear a striped sweater is all the time"),
//             new Phrase("No soup for you")];
//     //var phrase = [];
//     //phrase.push(new Phrase("Looks like we have got another mystery on our hands"));
//     return phrase;
//   }
  checkForWin() {
    console.log(liElements);
      var liElements = document.querySelectorAll('#phrase li');
      var sentinal = true;
      for(let i = 0; i < liElements.length; i++) {
        if(!(liElements[i].className == "show letter" || liElements[i].className == "space")) {
          sentinal = false;
       }
    }
    console.log("checkforwin is " + sentinal);
     return sentinal;
  };

// ---------------------------------------------------------------
//   checkForWin(){
//     var elementsLi = document.querySelectorAll('#phrase li');
//     const filteredElements = elementsLi.filter(element => { element.className === "show letter" ? true : false})
//       if(filteredElements.length === phrase.length){
//         return true;
//       }
//     }

  removeLife(char){
    this.miss += 1;
    if(this.miss < 5){
      var orderedList = document.getElementById('#scoreboard').firstElementChild;
      ol.removeChild(ol.firstElementChild);
    } else {
      gameOver(false);
    }
  }

  gameOver(gameWon){
    var gameOverMessage = document.getElementById('game-over-message');
    var overLay = document.getElementById('overlay');
    if(gameWon){
      gameOverMessage.innerHTML = "YOU WON! GREAT!";
    } else {
      gameOverMessage.innerHtml = "BAD LUCK Try AGAIN!";
    }
  }


// Fill this method later ...
  createPhrases() {
  }

  handleInteraction(button) {
    var letter = button.textContent;
    //console.log(this.activePhrase.checkLetter(letter));
    button.disabled = 'true';
    if(this.activePhrase.checkLetter(letter)){
      this.activePhrase.showMatchedLetter(letter);
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

