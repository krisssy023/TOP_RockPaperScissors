const colors = ["BLUE", "VIOLET", "BLACK","GRAY", "GREEN", "RED","YELLOW","ORANGE","PINK"]
let human ;
let winningColor = document.getElementById("winning-color")

function botPick(){
    let  i = Math.floor(Math.random()*9);
    let botColor = colors[i] ;
    winningColor.innerText = `Winning Color : ${botColor} !`
   
}

console.log(botPick())