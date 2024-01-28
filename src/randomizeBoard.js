function randInt(max) {
  return Math.floor(max * Math.random());
}

function randBool() {
  return Math.random() >= 0.5;
}

export default function randomize(gameboard, shipCount) {
  for (let len in shipCount) {
    for (let i = 0; i < shipCount[len]; ++i) {
      while (
        !gameboard.placeShip(
          len,
          randInt(gameboard.size),
          randInt(gameboard.size),
          randBool()
        )
      );
    }
  }
}
