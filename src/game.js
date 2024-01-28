export default class Game {
  constructor(gameboard1, gameboard2, player1, player2) {
    player1.configure(this, gameboard2);
    player2.configure(this, gameboard1);
    this.currentPlayer = player1;
    this.nextPlayer = player2;
    this.currentPlayer.setTurn();
  }

  turnFinished() {
    if (this.currentPlayer.enemyGameboard.areAllSunk()) {
      return;
    }
    const temp = this.currentPlayer;
    this.currentPlayer = this.nextPlayer;
    this.nextPlayer = temp;
    this.currentPlayer.setTurn();
  }
}
