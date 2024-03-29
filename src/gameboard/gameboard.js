import Ship from "../ship";

class Cell {
  #ship;
  #isHit;
  constructor(notifyElement) {
    this.notifyElement = notifyElement;
    this.#ship = null;
    this.#isHit = false;
  }

  set ship(ship) {
    this.#ship = ship;
    this.notifyElement(this);
  }

  get ship() {
    return this.#ship;
  }

  set isHit(isHit) {
    this.#isHit = isHit;
    this.notifyElement(this);
  }

  get isHit() {
    return this.#isHit;
  }
}

export default class Gameboard {
  board;
  size;
  ships;
  floatingShips;

  constructor(size, element) {
    this.size = size;
    this.board = new Array(size);
    for (let i = 0; i < size; ++i) {
      this.board[i] = new Array(size);
      for (let j = 0; j < size; ++j) {
        this.board[i][j] = new Cell((cell) => element.updateCell(i, j, cell));
      }
    }
    this.ships = new Array();
    this.floatingShips = 0;
  }

  clear() {
    for (const row of this.board) {
      for (const cell of row) {
        cell.ship = null;
        cell.isHit = false;
      }
    }
    this.ship = [];
    this.floatingShips = 0;
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
    ++this.floatingShips;
    return true;
  }

  receiveAttack(x, y) {
    const cell = this.board[x][y];
    if (cell.isHit) {
      return;
    }
    cell.isHit = true;
    if (cell.ship != null) {
      cell.ship.hit();
      if (cell.ship.isSunk()) {
        --this.floatingShips;
      }
    }
  }

  areAllSunk() {
    return this.floatingShips == 0;
  }
}
