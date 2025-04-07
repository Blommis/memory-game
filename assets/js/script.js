function startGame(){
let name = document.getElementById("playerName").value; 
    // To make sure user has to write in username before pressing play
    if(name.trim() === ""){
        alert("You have to write in your username to play!");
        return;
    } 

    // To remove intro section and add greeting instead
    let introSection = document.getElementById("intro");
    introSection.innerHTML = `<h2 id="greeting">Good luck, ${name}!</h2>`;
    
    document.getElementById("game").classList.remove("hidden");
    createGameBoard();
}

//make sure the user only can flip 2 cards each time
let selectedCards = [];
let matchedPairs = 0;


const icons = [
    { icon: 'fa-sun', color: '#FFD43B' }, { icon: 'fa-sun', color: '#FFD43B'},
    { icon: 'fa-dog', color: '#ff4000' }, { icon: 'fa-dog', color: '#ff4000' },
    { icon: 'fa-cat', color: '#63E6BE' }, { icon: 'fa-cat', color: '#63E6BE' },
    { icon: 'fa-house', color: '#74C0FC' }, { icon: 'fa-house', color: '#74C0FC' },
    { icon: 'fa-face-smile', color: '#ee17e6' }, { icon: 'fa-face-smile', color: '#ee17e6' },
    { icon: 'fa-thumbs-up', color: '#2aea10' }, { icon: 'fa-thumbs-up', color: '#2aea10' },
];


//Random switching the cards to create varition every new game
function createGameBoard() {
    let shuffledIcons = icons.sort(() => Math.random() - 0.5);
    const gameBoard = document.getElementById("game-board");
   // Clean out the previsouly game
    gameBoard.innerHTML = ""; 

    shuffledIcons.forEach((iconObj, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = iconObj.icon; 
        card.dataset.index = index;
        
        // creates a icon for each card and puts the right color
        let icon = document.createElement("i");
        icon.classList.add("fa-solid", iconObj.icon); 
        icon.style.color = iconObj.color; 

        card.appendChild(icon);
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (selectedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        selectedCards.push(this);
    }

    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
// Function to update scores on page 
let correctPoints = 0;
let wrongPoints = 0;
// Score display
const correctPointsElement = document.querySelector(".correct-points");
const wrongPointsElement = document.querySelector(".wrong-points");

// function to update scores on the page
function updateScores (){
    correctPointsElement.textContent = `Correct: ${correctPoints}`;
    wrongPointsElement.textContent = `Wrong: ${wrongPoints}`;
}
// Reset the game 
document.querySelector(".reset-button").addEventListener("click", resetGame);
function resetGame(){
    matchedPairs =0;
    correctPoints = 0;
    wrongPoints = 0;
    updateScores(); //reset score
    createGameBoard(); //Recreate the game
}
function showFeedbackMessage(){
    const feedbackElement = document.createElement("div");
    feedbackElement.classList.add("feedback-message");
    feedbackElement.textContent = message;

    // Append the feedback element in the index.html 
    document.body.appendChild(feedbackElement);
    // Remove the message after 1.5s 
    setTimeout(() => {
        feedbackElement.remove();
    }, 1500);
}

    // if the pairs are mathced. empty the list (selectedCards) and increase the count of matched pairs.
function checkMatch() {
    if (selectedCards[0].dataset.icon === selectedCards[1].dataset.icon) {
        selectedCards = [];
        matchedPairs++;
        correctPoints++; //increase correct points
        updateScores();
        
        // check if everbody matches
        if (matchedPairs === icons.length / 2) {
            alert("Congrats! You won!");
        }
    } else {
        selectedCards.forEach(card => {
            card.classList.remove("flipped");
        });
        selectedCards = [];
        wrongPoints++; //increase wrong points
        updateScores();
    }
}


