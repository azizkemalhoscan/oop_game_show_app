

 class Game {
  constructor(){
    this.miss = 0;
    // This is for me --I struglled here a lot because I wasnt paying attention to the type of objects.
    // I hard coded strings belove but It was expecting me to construct new Phrase objects
    // so I changed
    this.phrases = this.createPhrases();
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
    this.miss = 0;
    let ulElement = document.querySelectorAll('#phrase ul');
    let hearts = document.getElementsByClassName('tries');
    ulElement[0].innerHTML = " ";
    let button = document.querySelectorAll('.keyrow button');
      // let hideOverlay = document.getElementById('overlay');
      // hideOverlay.style.display = 'block';

// THERE CAN BE A STRANGE BEHAVIOUR IN THE CODE BELOW
      for(let i = 0; i < button.length; i++){
        button[i].disbaled = false;
        button[i].classList.remove('wrong');
        button[i].classList.remove('chosen');
        button[i].classList.add('key');
      }
        /*Do not forget this code*/
     //  let parent = document.querySelector('#phrase ul');
     //  while (parent.firstChild){
     //    parent.firstChild.remove();
     // }
     for(let i = 0; i < hearts.length; i++){
      hearts[i].firstElementChild.src = "images/liveHeart.png";
     }
  }


  checkForWin() {
      var liElements = document.querySelectorAll('#phrase li');
      var checkWinStatus = true;
      for(let i = 0; i < liElements.length; i++) {
        if((liElements[i].className === "wrong letter" || liElements[i].className == "space")) {
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
    overLay.style.display = 'block';
    // You can add some css to overlay
    if(gameWon){
      gameOverMessage.className += 'win';
      gameOverMessage.innerHTML = "YOU WON! GREAT!";
      overLay.style.display = 'block';
    } else {
      gameOverMessage.className += 'lose';
      gameOverMessage.innerHTML = "BAD LUCK TRY AGAIN!";
      overLay.style.display = 'block';
    }
  }



  createPhrases() {
    var phrase = [new Phrase("yurtta sulh cihanda sulh"),
            new Phrase("ben sporcunun zeki cevik ve ahlaklisini severim"),
            new Phrase("sanatsiz kalmis bir milletin hayat damarlarindan biri kopmus demektir. "),
            new Phrase("everything we see in the world is the creative work of women."),
            new Phrase("everything negative - pressure, challenges - is all an opportunity for me to rise.")];
    //var phrase = [];
    //phrase.push(new Phrase("Looks like we have got another mystery on our hands"));
    return phrase;
  }

  handleInteraction(button){
    var key = button.textContent;
    console.log(key);
    // alter this.
    button.disbaled = true;
    if(this.activePhrase.checkLetter(key)){
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(key);
      // let deneme = document.querySelectorAll('.keyrow .key')

      // if(countChosen === this.activePhrase.length){
        // this.activePhrase.showMatchedLetter(key);
        if(this.checkForWin()){
          this.gameOver(true);
        }
    } else {
      button.className = 'wrong';
      this.removeLife();
      // if(this.checkForWin()){
      //   this.gameOver(false);
      // }
  }
 }
}
