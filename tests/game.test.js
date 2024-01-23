import Game from "../src/game";

test("game starts", () => {
  const setTurn1 = jest.fn();
  const setTurn2 = jest.fn();
  new Game({ setTurn: setTurn1 }, { setTurn: setTurn2 });
  expect(setTurn1).toBeCalled();
  expect(setTurn2).not.toBeCalled();
});

test("turnFinished", () => {
  const player1 = {
    setTurn: jest.fn(),
    enemyGameboard: { areAllSunk: () => false },
  };
  const player2 = { setTurn: jest.fn() };
  const game = new Game(player1, player2);
  game.turnFinished();
  expect(player2.setTurn).toBeCalled();
});

test("game finishes", () => {
  const gameboard2 = { areAllSunk: () => true };
  const player1 = {
    name: "p1",
    setTurn: jest.fn(),
    enemyGameboard: gameboard2,
  };
  const player2 = { setTurn: jest.fn() };
  const game = new Game(player1, player2);
  game.turnFinished();
  expect(player2.setTurn).not.toBeCalled();
});
