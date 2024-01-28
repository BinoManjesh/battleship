import Player from "./player";

export default class ComputerPlayer extends Player {
  setTurn() {
    super.setTurn();
    let numValid = 0;
    const board = this.enemyGameboard.board;
    const size = board.length;
    console.log(numValid);
    for (let i = 0; i < size; ++i) {
      for (let j = 0; j < size; ++j) {
        if (!board[i][j].isHit) {
          ++numValid;
        }
      }
    }
    const chosenMove = Math.floor(Math.random() * numValid);
    let numMove = 0;
    for (let i = 0; i < size; ++i) {
      for (let j = 0; j < size; ++j) {
        if (!board[i][j].isHit) {
          if (numMove == chosenMove) {
            this.makeMove(i, j);
            console.log("MADE MOVE " + i + " " + j);
            return;
          }
          ++numMove;
        }
      }
    }
  }
}
