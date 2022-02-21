const moves = ["ROCK", "PAPER" ,"SCISSORS"] ;
let computerSelection;
let playerMove = document.querySelector("#player-move");
let humanPick = document.querySelector("#human-pick");
let computerPick = document.querySelector("#computer-pick")
let winner = document.querySelector("#winner")
let gameButton = document.querySelector("#game")



function computerPlay(){
    let  i = Math.floor(Math.random()*3);
    computerSelection = moves[i] ;
    computerPick.innerText = "Computer picked: " + computerSelection + "!";
} 


gameButton.addEventListener("click", () => {
    humanPick.innerText = "You picked: " + playerMove.value + "!";
}
)

function game(){
    computerPlay();
    let message ;
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
 


console.log(human);
console.log(computerSelection);
winner.innerText = "Result: " + message + "!"
}