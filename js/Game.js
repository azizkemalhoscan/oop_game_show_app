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
    new Phrase('Programs must be written for people to read and only incidentally for machines to execute'),
    new Phrase('Peace in home peace in the world'),
    new Phrase('Sanatsiz kalan bir milletin hayat damarlarindan biri kopmus demektir'),
    new Phrase('Build a door'),
    new Phrase('herkes kendine yakisani giymeli')
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
  handleInteraction(button){
    console.log(button);
    button.disabled = true;
    if(this.activePhrase.phrase.includes(button.textContent)){
      button.classList = 'chosen';
      this.activePhrase.showMatchedLetter(button.textContent);
    } else {
      button.classList = 'wrong';
      this.removeLife();
    }
    this.checkForWin();
  }

  //  method to check if all letters are revealeds
  // THIS MAY NOT BE WORKING PROPERLY
  // this.gameOver(true ) implemented inside first return statment
  checkForWin(){
    let showedElements = document.getElementsByClassName('show letter');
    let spaceElements = document.getElementsByClassName('space');
    if((showedElements.length + spaceElements.length) === this.activePhrase.phrase.length){
      return this.gameOver(true);
    }
  }
//  This method will remove heart images from the screen each time it is called
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
    } else if( gameWon === true) {
      overlay.classList = 'win';
      gameOverMessage.textContent = "YOU WON GREAT!";
    }
  }

// This method is for reseting the whole game.
  resetBoardGame(){
    const selectUL = document.querySelector('#phrase ul');
    const imgHearts = document.querySelectorAll('.tries img');
    selectUL.innerHTML = "";
    const selectAllButtons = document.querySelectorAll('.keyrow button');
    for(let i = 0; i < selectAllButtons.length; i++){
      selectAllButtons[i].classList = "key";
      selectAllButtons[i].disabled = false;
    }
    for(let j =0; j <imgHearts.length; j++){
      imgHearts[j].src = "images/liveHeart.png"
    }

  }
}

















