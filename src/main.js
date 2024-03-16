import GameBoard from "./gameLogic/gameBoard.js";
import Player from "./gameLogic/player.js";

const windowContainerElement = document.querySelector(".windowContainer");
const windowElement = document.querySelector(".window");
const windowButtonElement = document.querySelector(".window>button");
const windowMessageElement = document.querySelector(".window>h1");

const messageContainerElement = document.querySelector(".messageContainer>h1");
const robotBoardElement = document.querySelector(".boardContainer>#robot");
const BATTLESHIP_MESSAGE = 'Battleship';


// Game initialization
let game;

function startGame() {
    human = new Player("human");
    robot = new Player("robot");
    game = new GameBoard([human, robot]);
    game.initGame();
    game.cleanBoard();
    game.animateBoard();
    game.changeGameStatus();
    messageContainerElement.textContent = BATTLESHIP_MESSAGE;
    windowMessageElement.textContent = "Welcome to BattleShip Game";
    windowButtonElement.textContent = "Start Game";
    windowButtonElement.classList.add("startButton");
}

windowButtonElement.addEventListener("click", () => {
    if(windowButtonElement.classList.contains("startButton")){
        windowElement.style.display = "none";
        windowContainerElement.style.display = "none";
        windowMessageElement.textContent = "";
        windowButtonElement.textContent = "";
        windowButtonElement.classList.remove("startButton");
    }
    else if (windowButtonElement.classList.contains("resetButton")){
        windowButtonElement.classList.remove("resetButton");
        startGame();
    }
});

robotBoardElement.addEventListener("mousedown", (e) => {
    if(game.gameOn && !e.target.classList.contains("hit") && !e.target.classList.contains("miss") && e.target.dataset.x !== "undefined" && e.target.dataset.y !== "undefined"){
        const x = parseInt(e.target.dataset.x);
        const y = parseInt(e.target.dataset.y);
        game.receiveAttack(x, y);
        game.cleanBoard();
        game.animateBoard();
        if(game.checkWin()){
            game.changeGameStatus();
        }
    }
});

document.addEventListener("click", () => {
    if(!game.gameOn){
        windowElement.style.display = "flex";
        windowContainerElement.style.display = "flex";
        windowContainerElement.style.backgroundColor = "rgb(33,33,33,0.5)";
        windowMessageElement.textContent = `${game.winner.name} wins!`;
        windowButtonElement.textContent = "Play Again?";
        windowButtonElement.classList.add("resetButton");
    }
});

// Start the game
startGame();