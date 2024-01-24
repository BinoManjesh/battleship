import "./gameboard.css";

import Empty from "../images/empty.png";
import EmptyAttacked from "../images/empty-attacked.png";
import ShipAttacked from "../images/ship-attacked.png";
import Ship from "../images/ship.png";

export default class GameboardElement {
  grid;

  constructor(size, container) {
    this.grid = new Array(size);
    container.classList.add("gameboard");
    for (let i = 0; i < size; ++i) {
      this.grid[i] = new Array(size);
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < size; ++j) {
        const cell = document.createElement("img");
        cell.textContent = "E";
        cell.src = Empty;
        row.appendChild(cell);
        this.grid[i][j] = cell;
      }
      container.appendChild(row);
    }
  }

  updateCell(x, y, cell) {
    console.log(cell);
    let img;
    if (cell.isHit) {
      if (cell.ship == null) {
        img = EmptyAttacked;
      } else {
        img = ShipAttacked;
      }
    } else {
      if (cell.ship == null) {
        img = Empty;
      } else {
        img = Ship;
      }
    }
    this.grid[x][y].src = img;
  }
}
