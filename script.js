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
        }
        else{
            alert("Casillero ocupado");
        }

    })
}

function checkForWin(){
    
}
