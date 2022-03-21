const moves = ["ROCK", "PAPER" ,"SCISSORS"] ;
let computerSelection;
let playerMove ;
let humanPick = document.querySelector("#human-pick");
let computerPick = document.querySelector("#computer-pick") ;
let roundResults = document.querySelector("#round-results");
let finalResult = document.querySelector("#final-result");
let gameButton = document.querySelector("#game");
let triesLeft = document.querySelector("#tries-left");
const yourScoreCount = document.querySelector("#your-score")
const computerScoreCount = document.querySelector("#computer-score")
let tryAgain = document.querySelector("#try-again");
let roundNumber = document.querySelector("#round-number");
let message ;
let tries = 4 ;
let round = 1 ;
let yourScore = 0 ;
let computerScore = 0 ;
let human ;

function computerPlay(){
    let  i = Math.floor(Math.random()*3);
    computerSelection = moves[i] ;
    computerPick.innerText = "Computer picked: " + computerSelection + "!";
   

    if(i === 0){
        document.getElementById("computerFighterPic").src = "images/rock.JPG";
    } else if ( i === 1){
        document.getElementById("computerFighterPic").src = "images/paper.JPG";
    }else if( i === 2) {
        document.getElementById("computerFighterPic").src = "images/scissor.JPG";
    } else {
        document.getElementById("computerFighterPic").src =" images/rps.gif"
    }
    
    
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

    console.log(computerScore);
    console.log(yourScore);
}

function roundAndTriesCounter() {
    humanPick.innerText = "You picked: " + playerMove + "!";

    round += 1 ;

    tries -= 1 ;

    if (round == 6){
        finalGameResults();
        roundNumber.innerText = "Game Done !" ;
    } else {
        roundNumber.innerText = "Round #  " +round;
    }
}


function rock(){
    human = "ROCK";
    playerMove = "ROCK";
    game();
    roundAndTriesCounter() ;

}

function paper(){
    human = "PAPER";
    playerMove = "PAPER" ;
    game();
    roundAndTriesCounter() ;

}

function scissors(){
    human = "SCISSORS";
    playerMove = "SCISSORS"
    game();
    roundAndTriesCounter() ;

}

function game(){
    computerPlay();
   
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
 
if(tries == -1){
    location.reload(true);
}

   
    
gameScoreCount() ;
triesContent();
console.log(human);
console.log(computerSelection);
roundResults.innerText = "Round Results: " + message + "!"
}

function finalGameResults(){
let finalMessage ;

    if (yourScore == computerScore){
        finalMessage = "It's a tie , try again?"
    }else if (computerScore > yourScore){
        finalMessage = "You Lost, try again ?"
    } else {
        finalMessage = "You Won the Game ! Try again ?"}

    finalResult.textContent = "Final Game Results :" + finalMessage;
    

}

function tryAgainButton(){
    location.reload(true);
}

