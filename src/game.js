export default class Game {
  constructor(player1, player2) {
    this.currentPlayer = player1;
    this.nextPlayer = player2;

    this.currentPlayer.setTurn();
  }

  turnFinished() {
    console.log(this.currentPlayer);
    if (this.currentPlayer.enemyGameboard.areAllSunk()) {
      return;
    }
    this.nextPlayer.setTurn();
    const temp = this.currentPlayer;
    this.currentPlayer = this.nextPlayer;
    this.nextPlayer = temp;
  }
}
