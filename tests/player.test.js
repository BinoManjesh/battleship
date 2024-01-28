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
  const turnFinished = jest.fn();
  const receiveAttack = jest.fn();
  const player = new Player();
  player.configure({ turnFinished }, { receiveAttack });
  expect(player.makeMove(5, 5)).toBe(false);
  player.setTurn();
  expect(player.makeMove(5, 5)).toBe(true);
  expect(turnFinished).toBeCalled();
  expect(receiveAttack).toBeCalled();
  expect(player.turn).toBe(false);
});
