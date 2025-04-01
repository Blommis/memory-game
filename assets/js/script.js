function startGame(){
let name = document.getElementById("playerName").value; 
    if(name.trim() === ""){
        alert("You have to write in your username to play!");
        return;
    }
    // To remove intro section and add greeting instead
    let introSection = document.getElementById("intro");
    introSection.innerHTML = `<h2 id="greeting">Good luck, ${name}!</h2>`;
    
    document.getElementById("game").classList.remove("hidden");
}

function createGameBoard(){}
function flipCard(){}

function checkMate(){}
