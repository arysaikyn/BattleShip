import Ship from '../gameLogic/ship';

test('ship has a length', () => {
  const ship = new Ship(4);
  expect(ship.length).toBe(4);
});

test('ship has a hit', () => {
    const ship = new Ship(4);
    expect(ship.hitCount).toBe(null);
});

test('ship has a sunk', () => {
    const ship = new Ship(4);
    expect(ship.sunk).toBe(null);
});

test('ship can be hit', () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hitCount).toBe(1);
});

test('ship can be sunk', () => {
    const ship = new Ship(4);
    for(let i = 0; i < 4; i++) {
        ship.hit();
    }
    expect(ship.sunk).toBe(true);
});

