import "./gameboard.css";

import Empty from "../../images/empty.png";
import EmptyAttacked from "../../images/empty-attacked.png";
import ShipAttacked from "../../images/ship-attacked.png";
import Ship from "../../images/ship.png";

export default class GameboardElement {
  grid;

  constructor(size, container, player) {
    this.grid = new Array(size);
    container.classList.add("gameboard");
    for (let i = 0; i < size; ++i) {
      this.grid[i] = new Array(size);
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < size; ++j) {
        const cell = document.createElement("div");
        cell.style.backgroundImage = `url(${Empty})`;
        if (player) {
          cell.addEventListener("click", () => player.makeMove(i, j));
        }
        row.appendChild(cell);
        this.grid[i][j] = cell;
      }
      container.appendChild(row);
    }
  }

  updateCell(x, y, cell) {
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
    this.grid[x][y].style.backgroundImage = `url(${img})`;
  }
}
