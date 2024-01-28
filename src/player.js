export default class Player {
  turn;
  game;
  enemyGameboard;

  constructor() {
    this.turn = false;
  }

  configure(game, enemyGameboard) {
    this.game = game;
    this.enemyGameboard = enemyGameboard;
  }

  setTurn() {
    this.turn = true;
  }

  makeMove(x, y) {
    if (!this.turn) {
      return false;
    }
    this.enemyGameboard.receiveAttack(x, y);
    this.turn = false;
    this.game.turnFinished();
    return true;
  }
}
