import body from "./body.html";
import GameboardElement from "./gameboard/gameboard-element";
import Gameboard from "./gameboard/gameboard";
import Player from "./player/player";
import Game from "./game";
import ComputerPlayer from "./player/computer-player";
import randomize from "./randomizeBoard";
import EnemyGameboardElement from "./gameboard/enemy-gameboard-element";

document.body.innerHTML = body;

const BOARD_SIZE = 10;
const SHIP_COUNT = { 2: 1, 3: 2, 4: 1, 5: 1 };

const container1 = document.querySelector("div.my-gameboard");
const container2 = document.querySelector("div.enemy-gameboard");
const player1 = new Player();
const player2 = new ComputerPlayer();
const element1 = new EnemyGameboardElement(BOARD_SIZE, container1, player1);
const element2 = new GameboardElement(BOARD_SIZE, container2);
const gameboard1 = new Gameboard(BOARD_SIZE, element2);
const gameboard2 = new Gameboard(BOARD_SIZE, element1);
const game = new Game({ gameboard1, gameboard2, player1, player2, onGameover });
shuffle();

document.querySelector("button#shuffle").addEventListener("click", shuffle);
document.querySelector("button#start").addEventListener("click", () => {
  game.start();
});

function onGameover() {
  alert("Game Over!");
}

function shuffle() {
  if (!game.started) {
    randomize(gameboard1, SHIP_COUNT);
    randomize(gameboard2, SHIP_COUNT);
  }
}
