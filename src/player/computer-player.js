import Player from "./player";

export default class ComputerPlayer extends Player {
  setTurn() {
    super.setTurn();
    const board = this.enemyGameboard.board;
    const size = board.length;
    let seenSpecial = false;
    const isSpecial = function (x, y) {
      for (const [i, j] of [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ]) {
        if (board[i] == undefined || board[i][j] == undefined) {
          continue;
        }
        const cell = board[i][j];
        if (cell.isHit && cell.ship != null) {
          return true;
        }
      }
      return false;
    };
    let choices = [];
    for (let i = 0; i < size; ++i) {
      for (let j = 0; j < size; ++j) {
        const special = isSpecial(i, j);
        if (!board[i][j].isHit) {
          if (seenSpecial) {
            if (special) {
              choices.push([i, j]);
            }
          } else {
            if (special) {
              seenSpecial = true;
              choices = [[i, j]];
            } else {
              choices.push([i, j]);
            }
          }
        }
      }
    }
    console.log(choices);
    const move = choices[Math.floor(Math.random() * choices.length)];
    this.makeMove(...move);
  }
}
