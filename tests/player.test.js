import Player from "../src/player";

test("constructor", () => {
  const player = new Player();
  expect(player.turn).toBe(false);
});
test("setTurn", () => {
  const player = new Player();
  player.setTurn();
  expect(player.turn).toBe(true);
});
test("makeMove", () => {
  const mock = jest.fn();
  const player = new Player({ receiveAttack: mock });
  expect(player.makeMove(5, 5)).toBe(false);
  player.setTurn();
  expect(player.makeMove(5, 5)).toBe(true);
  expect(mock).toBeCalled();
  expect(player.turn).toBe(false);
});
