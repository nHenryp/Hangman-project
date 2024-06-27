/*as a user i want to be able to see an updated score as i play along
as a user i want to see visual actions for wrong choices. i.e 
  the parts of Hangman.
  disapearring letters.
 as a user i want to be able to mute the music on the page.
 as a user correct letter choices should be displayed on the screen.
 i want the game to randomize the word choices.
 a clear message sould be displayed when winning a round of the game
 a reset button should be available 
 and hint button should be present if user needs assistance.
*/

 /*-------------------------------- Constants --------------------------------*/


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
let scoreBoard = 0;






*/
/*------------------------ Cached Element References ------------------------*/

/*
const selectedWords
const randomWord
const buttonElement =

const scoreBoard =
*///console.log(keyPadBtn)//const display = document.
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
   display.textContent = ''
   guesses.textContent = ''
   guessCount.textContent = ''
   //console.log(playerGuess)
   lettersContainers.innerHTML = ''
  
   //console.log(typeof displayWord
   for (let i = 0; i < 26 ; i++ ){
    const letter = document.createElement('div')
    letter.classList.add('letter')
    letter.textContent = String.fromCharCode(65 + i)
    letter.addEventListener('click', listenLetterClick)
    lettersContainers.appendChild(letter)
    
 

    //console.log(letter)
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
  maxGuesses-- 
  guessCount.textContent = `You have ${maxGuesses} Guesses`
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
//updateWordDisplay()
//innerhtml
//create varible = selectedword
//breakwork into letter
//map the word
//includes() that letter
//join()
//display.textContent = 

 

/*
 function checkGameStatus() {
  
   if (!display.textContent.includes('_')) {
    console.log('you win')
   }
   disableAllLetters();

  }
*/
function checkWin() {

  const guessedWord = selectedWord.split('').map(letter =>
    playerGuess.includes(letter) || letter === ' ' ? letter : '_').join('')
  
  if (guessedWord === selectedWord) {
     guesses.textContent = 'Congrats you won'
    disableAllLetters()

  } else if ( maxGuesses === 0) {
     guesses.textContent = 'Game Over'
    disableAllLetters()
  }
  

  



  

  
}  




function disableAllLetters() {
  const letters = document.querySelectorAll('.letter')
  letters.forEach(letter => letter.removeEventListener('click', listenLetterClick))
}





//const getPlayerGuess () {
  //if ()

//get player letter choices

//if statments

//}

/*


const updateGame() =>
update players score, + points for correct guesses


const displayResult = () => {
display win or lose on the screen
}
 

const scoreBoard = () => {

 }


const hintBtn = () => {

}



render()


/*----------------------------- Event Listeners -----------------------------*/


  restartbtn.addEventListener('click', init)
  
  
  
  

  //create Arrays

  //diplay buttons
  //check if word chossen includes a letter that was picked
  //if it happens i want something to happen
  //if not something else.
  
