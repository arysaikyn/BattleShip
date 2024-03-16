import "../styles/styles.css";


class gameBoard {
    constructor(players) {
        this.players = [...players];
        this.currentPlayer = null;
        this.winner = null;
        this.gameOn = false;
    }
    changeGameStatus(){
        this.gameOn = !this.gameOn;
    }
    initGame(){
        this.players.forEach(player => {
            player.initMap();
            player.initShip();
            player.initShipOnMap();
        });
        this.currentPlayer = this.players[0];
    }
    determineTurns(){
        this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    }
    receiveAttack(x, y){
        this.currentPlayer.attack(x, y, this.players[1]);
        this.players[1].attackRobot(this.players[0]);
        this.determineTurns();
    }
    checkWin(){
        let loser = this.players.find(player => player.ships.every(ship => ship.sunk === true));
        this.winner = this.players.find(player => player !== loser);
        return this.players[0].ships.every(ship => ship.sunk === true) || this.players[1].ships.every(ship => ship.sunk === true);
    }
    animateBoard(){
        for(let i = 0; i < this.players.length; i++){
            const board = document.querySelector(`#${this.players[i].name}`);
            for(let j = 0; j < this.players[i].map.length; j++){
                for(let k = 0; k < this.players[i].map[j].length; k++){
                    const cellElement = document.createElement("div");
                    cellElement.dataset.x = j;
                    cellElement.dataset.y = k;
                    cellElement.classList.add("cell")
                    if(this.players[i].map[j][k] === "hit"){
                        cellElement.classList.add("hit");
                    }
                    else if(this.players[i].map[j][k] === "miss"){
                        cellElement.classList.add("miss");
                    }
                    else if(this.players[i].map[j][k] === "ship"){
                        cellElement.classList.add(`${this.players[i].ships.find(ship => ship.coordinates.some(coordinate => coordinate[0] === j && coordinate[1] === k)).type}`);
                        cellElement.classList.add("ship");
                    }
                    board.appendChild(cellElement);
                }
            }
        }
    }
    cleanBoard(){
        for(let i = 0; i < this.players.length; i++){
            const board = document.querySelector(`#${this.players[i].name}`);
            while(board.firstChild){
                board.removeChild(board.firstChild);
            }
        }
    }
}

export default gameBoard;

