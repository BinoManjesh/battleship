import GameboardElement from "./gameboard-element";
import Gameboard from "./gameboard";

const helloWorld = document.createElement("h1");
helloWorld.textContent = "Hello World!";
document.body.appendChild(helloWorld);

const container = document.querySelector("div.my-gameboard");
const element = new GameboardElement(10, container);
const board = new Gameboard(10, (...args) => element.updateCell(...args));
board.placeShip(5, 0, 0, true);
board.receiveAttack(0, 3);
board.receiveAttack(7, 9);
