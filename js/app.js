/*as a user i want to be able to see an updated score as i play along
as a user i want to see visual actions for wrong choices. i.e 
  the parts of Hangman.
  disapearring letters.
 as a user i want to be able to mute the music on the page.
 as a user correct letter choices should be displayed on the screen.
 i want the game to randomize the word choices.
 a clear message sould be displayed when winning a round of the game
 a reset button should be available 
 
*/

 


let gameBoard ;

const footballTeams = [
    "Manchester United",
    "Liverpool",
    "Chelsea",
    "Arsenal",
    "Manchester City",
    "Tottenham Hotspur",
    "Leicester City",
    "Everton",
    "West Ham United",
    "Aston Villa",
    "Newcastle United",
    "Wolverhampton Wanderers",
    "Leeds United",
    "Southampton",
    "Crystal Palace",
    "Brighton hove and albion",
    "Burnley",
    "Fulham",
    "Sheffield United",
    "West Bromwich Albion"
];
   
   





/*-------------------------------- Variables --------------------------------*/

let wordChoice = []

let selectedWord 

let playerGuess = []

let incorrectGuesses 

let maxGuesses = 6;


let displayWord = []


/*


/*------------------------ Cached Element References ------------------------*/





const keyPadBtn = document.querySelectorAll('#keyPadBtn')


const restartbtn = document.getElementById('restart')

const lettersContainers = document.getElementById('letters')

const display = document.getElementById('display')

const guesses = document.getElementById('guesses')

const guessCount = document.getElementById('max-guesses')




/*-------------------------------- Functions --------------------------------*/



function init()  {
   selectedWord =  footballTeams[Math.floor(Math.random() * footballTeams.length)].toLowerCase()
   playerGuess = []
   incorrectGuesses = 0;
   displayWord = ''
   display.textContent = ''
   guesses.textContent = ''
   guessCount.textContent = `you have ${maxGuesses} guesses left`
   //console.log(playerGuess)
   lettersContainers.innerHTML = ''
  
   
   for (let i = 0; i < 26 ; i++ ){
    const letter = document.createElement('div')
    letter.classList.add('letter')
    letter.textContent = String.fromCharCode(65 + i)
    letter.addEventListener('click', listenLetterClick)
    lettersContainers.appendChild(letter)
    
 

    console.log(selectedWord)
   }
   
   console.log(displayWord)




  }

init()

function listenLetterClick(e) {
  const letter = e.target;
  const text = letter.textContent.toLowerCase()
  letter.removeEventListener('click', listenLetterClick)
 
 let isCorrectGuess = false;

 for (let i = 0; i < selectedWord.length; i++) {
  if (selectedWord[i] === text) {
    if (!playerGuess.includes(text)) {    //reveals all the ties of a guess letter
      playerGuess.push(text);
    }
    isCorrectGuess = true;
  }

 }

 if (isCorrectGuess) {
  console.log('correct'); 
  guesses.textContent = 'correct'
 } else {
  incorrectGuesses++
  guessCount.textContent = `You have ${maxGuesses - incorrectGuesses} guesses left`
  console.log(maxGuesses)
  console.log('incorrect')
  guesses.textContent = 'wrong'

 }

 updateWordDisplay()
 checkWin()
 
 

}
function updateWordDisplay() {
  displayWord = selectedWord.split('').map(letter =>           //
    playerGuess.includes(letter) || letter === ' ' ? letter : '_' ).join('');
    display.textContent = displayWord
    
console.log(display)
  

 
}  


function checkWin() {

  const guessedWord = selectedWord.split('').map(letter =>
    playerGuess.includes(letter) || letter === ' ' ? letter : '_').join('')
  
  if (guessedWord === selectedWord) {
     guesses.textContent = 'Congrats you won'
    disableAllLetters()

  } else if ( incorrectGuesses === maxGuesses) {
   
     guesses.textContent = 'Game Over'
     
    disableAllLetters()
  }
}  





  

  
  




function disableAllLetters() {
  const letters = document.querySelectorAll('.letter')
  letters.forEach(letter => letter.removeEventListener('click', listenLetterClick))
}









/*----------------------------- Event Listeners -----------------------------*/


  restartbtn.addEventListener('click', init,)
  
  
  
  

  //create Arrays

  //diplay buttons
  //check if word chossen includes a letter that was picked
  //if it happens i want something to happen
  //if not something else.
  
