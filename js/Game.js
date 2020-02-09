

 class Game {
  constructor(){
    this.miss = 0;
    // This is for me --I struglled here a lot because I wasnt paying attention to the type of objects.
    // I hard coded strings belove but It was expecting me to construct new Phrase objects
    // so I changed
    this.phrases = [new Phrase('asli'), new Phrase('burcak'), new Phrase('taksim'), new Phrase('inigeym'), new Phrase('dila')];
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

  resetGame(){
      let button = document.querySelectorAll('.keyrow button');
      let hideOverlay = document.getElementById('overlay');
      hideOverlay.style.display = 'block';
      for(let i = 0; i < button.length; i++){
        button[i].classList.remove('wrong');
        button[i].classList.remove('chosen');
        button[i].classList.add('key');
      }
    // if(game.checkForWin === true || game.miss > 4){
      // const linkElements = document.querySelector('#phrase li');
      // button.disabled = 'false';
      let parent = document.querySelector('#phrase ul');
      while (parent.firstChild){
        parent.firstChild.remove();
     }
      // linkElements.innerHTML = " ";
    // }
  }

  checkForWin() {
      var liElements = document.querySelectorAll('#phrase li');
      var checkWinStatus = true;
      for(let i = 0; i < liElements.length; i++) {
        if(!(liElements[i].className == "show letter" || liElements[i].className == "space")) {
          checkWinStatus = false;
       }
    }
    console.log("checkforwin is " + checkWinStatus);
     return checkWinStatus;
  };

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



  createPhrases() {
  }

  handleInteraction(button){
    var key = button.textContent;
    console.log(key);
    // alter this.
    // button.remove();
    if(this.activePhrase.checkLetter(key)){
      button.className = 'chosen';
      this.activePhrase.showMatchedLetter(key);
      if(this.checkForWin()){
        this.gameOver(true);
      }
    } else {
      button.className = 'wrong';
      this.removeLife();
      if(this.checkForWin()){
        this.gameOver(false);
      }
  }
 }
}

