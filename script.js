let playerTurn = true;
let turn = document.getElementById("turno");
let cell = document.getElementsByTagName("td");

cell.addEventListener(event => {
    if(playerTurn){
        console.log(event.target)
    }
})

