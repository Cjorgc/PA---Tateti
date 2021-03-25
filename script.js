let playerTurn = true;
let turn = document.getElementById("turno");
let cell = document.getElementsByTagName("td");

for(let td of cell){
    td.addEventListener('click', event => {
        if(playerTurn){
            if(event.target.textContent == ""){
                event.target.textContent = "X";
                playerTurn = false;
            }
            else{
                alert("Casillero ocupado");
            }
        }
        else{
            if(event.target.textContent == ""){
                event.target.textContent = "O";
                playerTurn = true;
            }
            else{
                alert("Casillero ocupado");
            }
        }
    })
}

