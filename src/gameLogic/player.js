import Ship from "./ship";

class Player {
  constructor(name) {
    this.map = [];
    this.name = name;
    this.ships = [];
    this.previousAttack = [];
    this.futureAttack = [];
    this.previousAttackDirection = null;
  }
  initMap() {
    this.ships = [];
    for (let i = 0; i < 10; i++) {
      this.map.push([]);
      for (let j = 0; j < 10; j++) {
        this.map[i].push(null);
      }
    }
  }
  initShip() {
    [
      { size: 5, name: 'carrier' },
      { size: 4, name: 'battleship' },
      { size: 3, name: 'cruiser' },
      { size: 3, name: 'submarine' },
      { size: 2, name: 'destroyer' }
    ].forEach(ship => this.ships.push(new Ship(ship.size, ship.name)));
  }
  initShipOnMap() {
    this.ships.forEach(ship => {
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      let direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      while (!this.checkIfShipAround(ship, x, y, direction)) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      }
      this.placeShip(ship, x, y, direction);
    });
  }

  checkIfShipAround(ship, x, y, direction) {
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        // Check bounds for the main cell and immediate adjacent cells
        if (y + i >= this.map[0].length || x < 0 || x >= this.map.length) {
          return false;
        }
        // Check the main cell and immediate adjacent cells
        if (this.map[x][y + i] !== null ||
            (x-1 >= 0 && this.map[x-1][y + i] !== null) ||
            (x+1 < this.map.length && this.map[x+1][y + i] !== null)) {
          return false;
        }
        // Check diagonals
        if ((x-1 >= 0 && y+i-1 >= 0 && this.map[x-1][y+i-1] !== null) ||
            (x-1 >= 0 && y+i+1 < this.map[0].length && this.map[x-1][y+i+1] !== null) ||
            (x+1 < this.map.length && y+i-1 >= 0 && this.map[x+1][y+i-1] !== null) ||
            (x+1 < this.map.length && y+i+1 < this.map[0].length && this.map[x+1][y+i+1] !== null)) {
          return false;
        }
        // Check left and right cells
        if ((y-1 >= 0 && this.map[x][y-1] !== null) ||
        (y+ship.length < this.map[0].length && this.map[x][y+ship.length] !== null)) {
        return false;
        }
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        // Check bounds for the main cell and immediate adjacent cells
        if (x + i >= this.map.length || y < 0 || y >= this.map[0].length) {
          return false;
        }
        // Check the main cell and immediate adjacent cells
        if (this.map[x + i][y] !== null ||
            (y-1 >= 0 && this.map[x + i][y-1] !== null) ||
            (y+1 < this.map[0].length && this.map[x + i][y+1] !== null)) {
          return false;
        }
        // Check diagonals
        if ((x+i-1 >= 0 && y-1 >= 0 && this.map[x+i-1][y-1] !== null) ||
            (x+i-1 >= 0 && y+1 < this.map[0].length && this.map[x+i-1][y+1] !== null) ||
            (x+i+1 < this.map.length && y-1 >= 0 && this.map[x+i+1][y-1] !== null) ||
            (x+i+1 < this.map.length && y+1 < this.map[0].length && this.map[x+i+1][y+1] !== null)) {
          return false;
        }
        // Check top and bottom cells
        if ((x-1 >= 0 && this.map[x-1][y] !== null) ||
        (x+ship.length < this.map.length && this.map[x+ship.length][y] !== null)) {
        return false;
        }
      }
    }
    return true;
  }
  checkWhichShip(x, y) {
    return this.ships.find(ship => ship.coordinates.some(coord => coord[0] === x && coord[1] === y));
  }

  placeShip(ship, x, y, direction) {
    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        ship.coordinates.push([x, y + i]);
        this.map[x][y + i] = "ship";
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        ship.coordinates.push([x + i, y]);
        this.map[x + i][y] = "ship";
      }
    }
  }

  attack(x, y, enemy) {
    if (enemy.map[x][y] === null) {
      enemy.map[x][y] = "miss";
    } else if (enemy.map[x][y] === "ship"){
      enemy.map[x][y] = "hit";
      const ship = enemy.checkWhichShip(x, y);
      ship.hit();
    }
  }

  robotAttack(x, y, enemy) {
    if (enemy.map[x][y] === null) {
      enemy.map[x][y] = "miss";
    } else if (enemy.map[x][y] === "ship"){
      enemy.map[x][y] = "hit";
      const ship = enemy.checkWhichShip(x, y);
      this.algorithmAttack(x, y, enemy);
      ship.hit();
    }
  }

  attackRobot(enemy) {
    if (this.futureAttack.length > 0) {
      const [x, y] = this.futureAttack.shift();
      this.robotAttack(x, y, enemy);
    } else {
      console.log("this is random");
      this.previousAttackDirection = null;
      this.previousAttack = [];
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      while (enemy.map[x][y] === "miss" || enemy.map[x][y] === "hit") {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
      this.robotAttack(x, y, enemy);
    }
  }

  algorithmAttack(x, y, enemy) {
    let directions = [[-1, 0, "up"], [1, 0, "down"], [0, -1, "left"], [0, 1, "right"]];
    if(enemy.map[x][y] === "hit" && this.previousAttack.length > 0) {
      const [prevX, prevY] = this.previousAttack.pop();
      if (prevX === x) {
        this.previousAttackDirection = "horizontal";
        this.futureAttack = this.futureAttack.filter(coord => coord[0] === x);
        directions = directions.splice(2, 2);
      } else if (prevY === y) {
        this.previousAttackDirection = "vertical";
        this.futureAttack = this.futureAttack.filter(coord => coord[1] === y);
        directions = directions.splice(0, 2);
      }
    }
    console.log(directions);
    for (const [dx, dy, side] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < enemy.map.length && newY >= 0 && newY < enemy.map[0].length) {
        if (enemy.map[newX][newY] !== "miss" && enemy.map[newX][newY] !== "hit") {
          this.futureAttack.push([newX, newY, side]);
        }
      }
    }
    if (this.futureAttack.length === 0) {
      this.previousAttack = []
    }
    this.previousAttack.push([x, y]);
  }

}

export default Player;