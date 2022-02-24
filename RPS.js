const moves = ["ROCK", "PAPER" ,"SCISSORS"] ;
let computerSelection;
let playerMove = document.querySelector("#player-move");
let humanPick = document.querySelector("#human-pick");
let computerPick = document.querySelector("#computer-pick") ;
let roundResults = document.querySelector("#round-results");
let finalResult = document.querySelector("#final-result");
let gameButton = document.querySelector("#game");
let triesLeft = document.querySelector("#tries-left");
const yourScoreCount = document.querySelector("#your-score")
const computerScoreCount = document.querySelector("#computer-score")
let tryAgain = document.querySelector("#try-again")
let message ;
let tries = 4 ;
let yourScore = 0 ;
let computerScore = 0 ;

function computerPlay(){
    let  i = Math.floor(Math.random()*3);
    computerSelection = moves[i] ;
    computerPick.innerText = "Computer picked: " + computerSelection + "!";
} 


function triesContent(){
    triesLeft.textContent = "Remaining Tries : " + tries;
}

function gameScoreCount(){

    if (message =="You Won"){
        yourScore += 1 ;
    } else if(message =="You Lost"){
        computerScore += 1 ;
    } 

    yourScoreCount.textContent = "Your Score : " + yourScore ;
    computerScoreCount.textContent = "Computer's Score : " + computerScore ;


}

gameButton.addEventListener("click", () => {
    humanPick.innerText = "You picked: " + playerMove.value + "!";
    tries -= 1 ;
}
)

function game(){
    computerPlay();

    let finalMessage ;
   
    let human = playerMove.value;
    human = human.toUpperCase();
    
    if (human == computerSelection){
        message = "It's a Tie " ;
    } else if (human == "ROCK" && computerSelection =="PAPER"){
        message = "You Lost" ;
    } else if (human == "PAPER" && computerSelection =="SCISSORS"){
        message = "You Lost" ;
    } else if (human == "SCISSORS" && computerSelection =="ROCK"){
        message = "You Lost" ;
    }else if (human == "SCISSORS" && computerSelection =="PAPER"){
        message = "You Won" ;
    }else if (human == "ROCK" && computerSelection =="SCISSORS"){
        message = "You Won" ;
    }else if (human == "PAPER" && computerSelection =="ROCK"){
        message = "You Won" ;} 
     else {
            message = "Check your Answer"
        }
 


   if (tries == 0){
       finalGameResults()
   } else if(tries == -1)(
    location.reload(true)
   )
    
gameScoreCount() ;
triesContent();
console.log(human);
console.log(computerSelection);
roundResults.innerText = "Round Results: " + message + "!"
}


function finalGameResults(){

    if (yourScore > computerScore){
        finalMessage = "You Won the Game ! Try again ?"
    } else if (computerScore > yourScore){
        finalMessage = "You Lost, try again ?"
    } else {
        finalMessage = " It's a tie , try again?"
    }


    finalResult.textContent = "Final Game Results :" + finalMessage;
    
}

function tryAgainButton(){
    location.reload(true);
}