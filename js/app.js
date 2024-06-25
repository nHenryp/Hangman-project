/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



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
    "Brighton & Hove Albion",
    "Burnley",
    "Fulham",
    "Sheffield United",
    "West Bromwich Albion"
];
   
   


//const correctWord; ['',]  array


/*-------------------------------- Variables --------------------------------*/

let wordChoice = []

let selectedWord 

let getPlayerGuess
/*
 
let win = false;
let scoreBoard = 0;

let maxGuesses = 5




*/
/*------------------------ Cached Element References ------------------------*/

/*
const selectedWords
const randomWord
const buttonElement =

const scoreBoard =
*/
const keyPadBtn = document.querySelectorAll('#keyPadBtn')
console.log(keyPadBtn)

const restartbtn = document.getElementById('restart')

const lettersContainers = document.getElementById('letters')



/*-------------------------------- Functions --------------------------------*/



function init()  {
   selectedWord =  footballTeams[Math.floor(Math.random() * footballTeams.length)]
   getPlayerGuess = []
   lettersContainers.innerHTML = ''
   for (let i = 0; i < 26 ; i++ ){
    const letter = document.createElement('div')
    letter.classList.add('letter')
    console.log(letter)
   }



console.log(selectedWord)
listenLetterClick()
  }

init()

function listenLetterClick(e) {

}


/*
}

const getPlayerGuess () {
get player letter choices

if statments



}





const checkWin = () => {
see if players choices = random word
if(wordChoice === randomWord)
}
   
const checkLoss = () => {
check if maxguesses have been used  
if()
}


const updateGame() =>
update players score, + points for correct guesses






const checkLetter = () =>{
   if guess === randomWord move to next round
}

const displayResult = () => {
display win or lose on the screen
}
 

const scoreBoard = () => {

 }


const hintBtn = () => {

}





const resetGame = () => {

    } 

   const endGame = () => {
    
    }


render()


/*----------------------------- Event Listeners -----------------------------*/


  restartbtn.addEventListener('click', init)
  letters
  
  
  

  //create Arrays

  //diplay buttons
  //check if word chossen includes a letter that was picked
  //if it happens i want something to happen
  //if not something else.
  
