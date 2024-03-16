class Ship {
  constructor(length, name) {
    this.length = length;
    this.type = name;
    this.hitCount = null;
    this.sunk = false;
    this.coordinates = [];
  }
  hit() {
    if(this.sunk != true){
      this.hitCount++;
    }
    this.isSunk();
  }
  isSunk() {
    if (this.hitCount === this.length) {
      this.sunk = true;
    }
    else {
      this.sunk = false;
    }
  }
}

export default Ship;
