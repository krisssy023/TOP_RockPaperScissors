
const colors = document.getElementById("color-container").childNodes
const winningColorPicker = document.getElementById("color-box")
let colorArray = []

// const hoverRed = document.getElementById("red").addEventListener(click,pickedByClient)

// function pickedByClient(){
//    let fontSize = document.getElementById("red").style.fontSize;
//    fontSize = 20;
// }

function getColors(){
    for (let i = 0; i < colors.length;i++){
        let colorId = colors[i].id;
        if (typeof(colorId) !== "undefined"){
            colorArray.push(colorId)
        }
    }
}
getColors();


function colorBoxes(){
    for (let i = 0 ; i < colorArray.length; i++){
       let box = document.getElementById(colorArray[i]);
       box.style.backgroundColor = colorArray[i];
    }
}
colorBoxes()


