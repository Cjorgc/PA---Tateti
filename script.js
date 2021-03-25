
function startGame(){
    let playerTurn = true;
    let turn = document.getElementById("turno");
    let cell = document.getElementsByTagName("td");

    for(let td of cell){
        td.addEventListener('click', event => {
            let text;
            playerTurn ? text = "X" : text = "O";
            
            if(event.target.textContent == ""){
                event.target.textContent = text;
                playerTurn = !playerTurn;
                turn.textContent = "Turn " + text + " player"
            }
            else{
                alert("Casillero ocupado");
            }
            checkForWin(text,cell)
        })
    }
    
}

function restartGame(){
    let cell = document.getElementsByTagName("td");
    for(let td of cell){
        td.textContent = "";
    }
}


function checkForWin(player,cells){

    let array = Array.from(cells);

    array = array.map((x,i) => x.textContent == player ? 1 : 0)

    if(     (array [0] == 1 && array [1] == 1 && array [2] == 1) ||
            (array [0] == 1 && array [3] == 1 && array [6] == 1) ||
            (array [0] == 1 && array [4] == 1 && array [8] == 1) ||
            (array [6] == 1 && array [7] == 1 && array [8] == 1) ||
            (array [2] == 1 && array [4] == 1 && array [6] == 1) ||
            (array [2] == 1 && array [5] == 1 && array [8] == 1) ||
            (array [1] == 1 && array [4] == 1 && array [7] == 1))  {

                alert("Player " + player + " Wins")
                restartGame();
            }
    
    array = Array.from(cells);
            
    if(!(array.map(node => node.textContent).some(text => text == ""))){
        alert("Empate!")
    }        
}

startGame();