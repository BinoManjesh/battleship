import GameboardElement from "./gameboard-element";

export default class EnemyGameboardElement extends GameboardElement {
  updateCell(x, y, cell) {
    if (!cell.isHit) {
      return;
    }
    super.updateCell(x, y, cell);
    console.log("bruh");
  }
}
