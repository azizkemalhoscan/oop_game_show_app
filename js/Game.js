/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game {
  constructor(){
    this.miss = 0;
    this.phrases = ['hello', 'africa', 'tell', 'meow', 'congrolamate'];
    this.activePhrase = this.getRandomPhrase();
  }
  getRandomPhrase() {
    let randomPickInteger = Math.floor(Math.random() * this.phrases.length)  ;
    return this.phrases[randomPickInteger];
  }
  startGame(){
    let hideOverlay = document.getElementById('overlay');
    hideOverlay.style.display = 'none';
    const game = new Game();
    const randomPhrase = game.getRandomPhrase();
    const phrase = new Phrase(randomPhrase);
    phrase.addPhraseToDisplay();
  }
  handleInteraction(){

  }

  checkForWin(){
    var elementsLi = document.querySelectorAll('#phrase li');
    const filteredElements = elementsLi.filter(element => { element.className === "show letter" ? true : false})
      if(filteredElements.length === phrase.length){
        return true;
      }
    }

  removeLife(char){
    this.miss += 1;
    if(this.miss < 5){
      var orderedList = document.getElementById('#scoreboard').firstElementChild;
      ol.removeChild(ol.firstElementChild);
    } else {
    // I FUCKING DONT KNOW GOSSSSHSHHHH
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
}

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();
