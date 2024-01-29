export default class Game {
  constructor({ gameboard1, gameboard2, player1, player2, onGameover }) {
    player1.configure(this, gameboard2);
    player2.configure(this, gameboard1);
    this.currentPlayer = player1;
    this.nextPlayer = player2;
    this.onGameover = onGameover;
    this.started = false;
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.currentPlayer.setTurn();
    }
  }

  turnFinished() {
    if (this.currentPlayer.enemyGameboard.areAllSunk()) {
      this.onGameover();
      return;
    }
    const temp = this.currentPlayer;
    this.currentPlayer = this.nextPlayer;
    this.nextPlayer = temp;
    this.currentPlayer.setTurn();
  }
}
