export default class Player {
  turn;
  gameboard;

  constructor(gameboard) {
    this.turn = false;
    this.gameboard = gameboard;
  }

  setTurn() {
    this.turn = true;
  }

  makeMove(x, y) {
    if (!this.turn) {
      return false;
    }
    this.gameboard.receiveAttack(x, y);
    this.turn = false;
    return true;
  }
}
