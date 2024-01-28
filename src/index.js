import GameboardElement from "./gameboard-element";
import Gameboard from "./gameboard";
import Player from "./player";
import Game from "./game";

const helloWorld = document.createElement("h1");
helloWorld.textContent = "Hello World!";
document.body.appendChild(helloWorld);

const BOARD_SIZE = 10;

const container1 = document.querySelector("div.my-gameboard");
const container2 = document.querySelector("div.enemy-gameboard");
const player1 = new Player();
const player2 = new Player();
const element1 = new GameboardElement(BOARD_SIZE, container1, player1);
const element2 = new GameboardElement(BOARD_SIZE, container2, player2);
const gameboard1 = new Gameboard(BOARD_SIZE, element2);
const gameboard2 = new Gameboard(BOARD_SIZE, element1);
gameboard1.placeShip(5, 0, 0, true);
gameboard1.receiveAttack(0, 3);
gameboard1.receiveAttack(7, 9);
gameboard2.placeShip(3, 0, 0, false);

function onGameover() {
  alert("Game Over!");
}
new Game({ gameboard1, gameboard2, player1, player2, onGameover });
