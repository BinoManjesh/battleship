import Gameboard from "../src/gameboard";

test("constructor", () => {
  const gameboard = new Gameboard(10);
  expect(gameboard.size).toBe(10);
  expect(gameboard.board.length).toBe(10);
  for (const row of gameboard.board) {
    expect(row.length).toBe(10);
  }
});
describe("placeShip", () => {
  test("normal case", () => {
    const gameboard = new Gameboard(5, () => 0);
    for (let i = 0; i < 5; ++i) {
      expect(gameboard.board[2][i].ship).toBe(null);
    }
    expect(gameboard.placeShip(5, 2, 0, true)).toBe(true);
    for (let i = 0; i < 5; ++i) {
      const temp = gameboard.board[2][i].ship;
      expect(temp).toBeTruthy();
    }
  });

  test("out of grid ver", () => {
    const gameboard = new Gameboard(3);
    expect(gameboard.placeShip(1, 0, 4, false)).toBe(false);
  });

  test("out of grid hor", () => {
    const gameboard = new Gameboard(3);
    expect(gameboard.placeShip(1, 0, 4, true)).toBe(false);
  });

  test("overlap", () => {
    const gameboard = new Gameboard(10, () => 0);
    for (let i = 0; i < 5; ++i) {
      expect(gameboard.board[7][i].ship).toBe(null);
    }
    expect(gameboard.placeShip(5, 7, 0, true)).toBe(true);
    for (let i = 0; i < 5; ++i) {
      expect(gameboard.board[7][i].ship).not.toBe(null);
    }
    expect(gameboard.placeShip(6, 2, 0, false)).toBe(false);
  });

  test("no overlap", () => {
    const gameboard = new Gameboard(10, () => 0);
    for (let i = 0; i < 5; ++i) {
      expect(gameboard.board[7][i].ship).toBe(null);
    }
    expect(gameboard.placeShip(5, 7, 0, true)).toBe(true);
    for (let i = 0; i < 5; ++i) {
      expect(gameboard.board[7][i].ship).not.toBe(null);
    }
    expect(gameboard.placeShip(6, 1, 0, false)).toBe(true);
  });
});

describe("receive attack", () => {
  test("basic case", () => {
    const gameboard = new Gameboard(10, () => 0);
    gameboard.receiveAttack(4, 5);
    expect(gameboard.board[4][5].isHit).toBe(true);
  });

  test("ship sinks", () => {
    const gameboard = new Gameboard(4, () => 0);
    gameboard.placeShip(3, 2, 1, true);
    expect(gameboard.floatingShips).toBe(1);
    gameboard.receiveAttack(2, 1);
    expect(gameboard.floatingShips).toBe(1);
    gameboard.receiveAttack(2, 2);
    expect(gameboard.areAllSunk()).toBe(false);
    expect(gameboard.floatingShips).toBe(1);
    gameboard.receiveAttack(2, 3);
    expect(gameboard.floatingShips).toBe(0);
    expect(gameboard.areAllSunk()).toBe(true);
  });
});
