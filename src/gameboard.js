import Ship from "./ship";

class Cell {
  ship;
  isHit;

  constructor() {
    this.ship = null;
    this.isHit = false;
  }
}

export default class Gameboard {
  board;
  size;
  ships;

  constructor(size) {
    this.size = size;
    this.board = new Array(size);
    for (let i = 0; i < size; ++i) {
      this.board[i] = new Array(size);
      for (let j = 0; j < size; ++j) {
        this.board[i][j] = new Cell();
      }
    }
    this.ships = new Array();
  }

  placeShip(length, x, y, horizontal) {
    for (let i = 0; i < length; ++i) {
      const currX = horizontal ? x : x + i;
      const currY = horizontal ? y + i : y;
      if (
        0 > currX ||
        currX >= this.size ||
        0 > currY ||
        currY >= this.size ||
        this.board[currX][currY].ship != null
      ) {
        return false;
      }
    }
    const ship = new Ship(length);
    this.ships.push(ship);
    for (let i = 0; i < length; ++i) {
      const currX = horizontal ? x : x + i;
      const currY = horizontal ? y + i : y;
      this.board[currX][currY].ship = ship;
    }
    return true;
  }
}
