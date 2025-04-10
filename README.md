# Mr.Memory website 

## How to View the Project
- [View the live version here](https://blommis.github.io/memory-game/)

## Description
Mr.Memory is a fun and engaging memory game designed to challenge your cognitive skills and improve memory retention. In this game, players are tasked with matching pairs of hidden icons by flipping over cards. The objective is to uncover all pairs with the fewest moves possible.

## How to play
1. Start by entering your username: Type in your username to begin playing.

2. Flip the cards: Cards are arranged in a grid and initially hidden. Click on any card to flip it over and reveal its icon.

3. Match pairs: Try to find matching pairs of icons by remembering the cards you’ve flipped over.

4. Complete the game: The game ends once all pairs have been matched.

## Features
*  Challenging gameplay: Test your memory by matching pairs of different icons, from animals to objects.

* Simple, clean design: A straightforward interface that’s easy to navigate.

* Responsive: Optimized for both mobile and desktop devices for a seamless experience.

* Fun and engaging: Perfect for players of all ages looking to improve their memory skills in a playful setting.

## Wireframes
(assets/images/wireframe.png)

## User stories

### Must haves 
1. #### User Story:
As a player, I want to enter my username before starting the game so that my name can be displayed during gameplay.

#### Acceptance Criteria:
* The game displays an input field for entering a username.
* a "Let’s Play!" button is present.
* The game does not start until a username is entered.
* The entered username is displayed on the game screen.

#### Tasks:
* Add an input field for the username in the HTML.
* Add a "Let’s Play!" button that triggers the game start.
* Store the entered username and display it in the game UI.
* Prevent the game from starting if the input field is empty.

(assets/images/letsplay-image.png)
(assets/images/errormessage-toplay.png)

2. #### User Story:
As a player, I want to flip two cards at a time and check if they match so that I can progress in the game.

#### Acceptance Criteria:
* The player can click on a card to flip it.
* Two flipped cards stay visible until checked for a match.
* If the cards match, they remain face-up.
* If they don’t match, they flip back after a short delay.
* The game ends when all pairs are matched.

#### Tasks:
* Create an HTML structure for the cards.
* Add CSS for card styling and animations.
* Implement JavaScript logic to handle card clicks and matching.
* Add a delay before flipping unmatched cards back.
* Display a message when the game is completed.
(assets/images/unfliped-gameboard.png)
(assets/images/twopairsimage.png)
(assets/images/flipped-gameboard.png)

3. ### User Story:
As a player, I want to see my score based on the number of points so that I can try to improve my performance.

#### Acceptance Criteria:
* Each move (flipping two cards) increases the correct or wrong points.
* The total moves are displayed during and after the game.

#### Tasks:
* Add a score counter in the UI.
* Update the counter on each move.
* Display the score at the end of the game.

(assets/images/scoreboard-reset.png)
(assets/images/scoreboard-withpoints.png)

## Should haves
### User Story:
As a player, I want to receive feedback messages on my progress so that I know how well I'm doing during the game.

#### Acceptance Criteria:
* A message appears when the player matches a pair.
* A final message appears when the game is completed, congratulating the player.

#### Tasks:
* Create a function to display feedback messages based on the player's actions.
* Implement logic to check if the selected cards match or not.
* Update the UI to show messages dynamically as the game progresses.

(assets/images/feedbackmessage1.png)
(assets/images/feedbackmessage2.png)

## Could have
### User Story:
As a player, I want smooth animations when flipping cards so that the game feels polished and fun.

#### Acceptance Criteria:
* Cards flip smoothly with a CSS animation.
* The animation duration is short and responsive.
* Cards should not flicker or behave unexpectedly.

#### Tasks:
* Add CSS animations for card flipping.
* Ensure animations work correctly on all devices.

## Images
(assets/images/memory-game-image.png)

## Technologies Used
#### HTML 
for structure and content.

#### CSS 
for layout and styling.

#### JavaScript (coming soon)
 To handle the interactive logic and game functionality.


## Bugs discovered 
* I Had hard time to figure out why the game board wont work. Until I realized that my startGame function was being called, but the CreateBoardGame() function wasn’t included in it. Once I added CreateBoardGame() to the startGame function, the game board started working as expected.
* I encountered a bug while working on the scoring system for the memory game. The correct and wrong points were not increasing when I had a match or mismatch. After some troubleshooting, I realized the issue was caused by the placement of wrongPoints++. It was incorrectly placed inside the block where matches were being counted: 

(assets/images/bug-discovered-wrongplace.png)


The wrongPoints++ line was being executed even for correct matches, which was why the scoring logic didn’t work as intended. I fixed the issue by moving wrongPoints++ to the correct block where mismatched cards are handled:

(assets/images/bug-discovered-rightplace.png)


## Validations testing
### HTML Valitdator
### CSS Valitdator
### Javascript Valitdator

## Lighthouse 

## Deployment 

## Version Control 
## Development Process and commands 

## Manuel testing 

### Testing the card flip functionality
- Verified that clicking on a card reveals its icon.
- Ensured that matched pairs remain visible and unmatched cards are flipped back.

### Testing responsiveness
- Tested the game layout on desktop, tablet, and mobile devices using Chrome Developer Tools.
- Verified that the grid adjusts correctly on smaller screens.

### Testing the scoring system
- Ensured that correct matches increment the score.
- Checked that mismatched pairs correctly count as wrong moves.

## Google fonts 

* Primary-font: "Funnel Sans", sans-serif
* Secondary-font: "Luckiest Guy", cursive

I chose "Funnel Sans" for its modern, clean look, providing readability and professionalism, making the game easy to navigate. "Luckiest Guy", a playful cursive font, adds a fun, creative touch, fitting the game's lighthearted and engaging theme. Together, they balance simplicity with personality, making the game both approachable and enjoyable.

## Credits
### Image Creation
* I generated the image of the fictional character using AI in Canva's Dream Lab. To create the image, I used the prompt: "Create a happy guy with costume game character." [Canva](https://www.canva.com/dream-lab).

### Code
* To make the feedback message move, I used keyframes.. I took inspiration and tips from [W3Schools](https://www.w3schools.com/cssref/atrule_keyframes.php).

## Finished Product

