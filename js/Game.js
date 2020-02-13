/*
  Construct game class
*/

class Game {
  constructor(){
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = this.getRandomPhrase();
  }


//  createPhrases method is a class method and creates an array of 5 phrases.
  createPhrases(){
    const phraseList = [
    new Phrase('te'),
    new Phrase('tes'),
    new Phrase('g muscles'),
    new Phrase('dont'),
    new Phrase('buycak')
    ]
    return phraseList
  }
// Get a random phrase from the list of createPhrases class method.
  getRandomPhrase(){
    const getARandomNumber = Math.floor(Math.random() * 5);
    return this.phrases[getARandomNumber];
  }
// Begins game by selecting a random phrase and displaying it to user
  startGame(){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    var phrase = this.activePhrase;
    phrase.addPhraseToDisplay();
  }

/* This method will handle several supporting methods for the game
The clicked/chosen letter must be captured.
 The clicked letter must be checked against the phrase for a match.
 If there’s a match, the letter must be displayed on screen instead of the placeholder.
 If there’s no match, the game must remove a life from the scoreboard.
 The game should check if the player has won the game by revealing all of the letters in
the phrase or if the game is lost because the player is out of lives.
 If the game is won or lost, a message should be displayed on screen.
*/
  handleInteraction(){

  }
// We need to check if all of the letters are revealed in the activephrase
  // checkForWin(){
  //   var LIElements = document.querySelectorAll('li');
  //   for(let i=0; i <LIElements.length; i++){
  //     if(LIElements[i].classList === 'hide letter'){
  //       return false;
  //     }else {
  //       return true;
  //     }
  //   }
  // }

  checkForWin(){
    let showedElements = document.getElementsByClassName('show letter');
    if(showedElements.length === this.activePhrase.phrase.length){
      return true
    } else {
      return false
    }
  }

  removeLife(){
    this.missed += 1;
    const imgHearts = document.querySelectorAll('.tries img');
    imgHearts[this.missed -1].src = "images/lostHeart.png";
    if(this.missed === 5){
      return this.gameOver(false);
    }
  }

// this method displays a message regarding win or lose
  gameOver(gameWon){
      const overlay = document.getElementById('overlay');
      const gameOverMessage = document.getElementById('game-over-message');
      let showedElements = document.getElementsByClassName('show letter');
      overlay.style.display = 'block';
    if(gameWon === false){
      overlay.classList = 'lose';
      gameOverMessage.textContent = 'Sorry You Lose! Maybe next time.'
    } else {
      overlay.classList = 'win';
      gameOverMessage.textContent = "YOU WON GREAT!";
    }
  }
}
















