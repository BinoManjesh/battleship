import Ship from "../src/ship";

test("Constructor", () => {
  const ship = new Ship(5);
  expect(ship.length).toBe(5);
  expect(ship.hits).toBe(0);
});

test("hit", () => {
  const ship = new Ship(4);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});
