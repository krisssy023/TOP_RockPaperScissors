
let computerPick = document.getElementById ("computer-pick") ;
let humanPick = document.getElementById ("human-pick") ;
let gameWinner = document.getElementById("winner") ;
let  i = Math.floor(Math.random()*3);
let humanSelection ;
let humanMove;


function computerPlay(){
    let moves = ["Rock", "Paper" ,"Scissors"] ;
    let computerSelection = moves[i]
    computerPick.textContent ="Computer picked : " + computerSelection + " !";

    console.log(computerSelection);
} 
computerPlay();


function game(){
    humanMove = document.getElementById("myText").value ;
    humanPick.textContent ="You picked : " + humanMove + " !";
 

    if (humanMove == "Rock"){
        return humanSelection = 0 ;
    }
    else if (humanMove == "Paper"){
        return humanSelection = 1 ;
    }
    else if (humanMove == "Scissors"){
        return humanSelection = 2 ;
    }
    else {
        return humanSelection = 3;
    }


}
console.log(humanMove)
