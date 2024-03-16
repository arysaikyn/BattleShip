import Player from "../gameLogic/player";
import Ship from "../gameLogic/ship";

test("Player has name", () => {
    const player = new Player("Player 1");
    expect(player.name).toBe("Player 1");
});

test("Player has map", () => {
    const player = new Player("Player 1");
    player.initMap();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(player.map[i][j]).toBe(null);
        }
    }
});

test("Player has ships", () => {
    const player = new Player("Player 1");
    player.initShip();
    for (let i = 0; i < 10; i++) {
        expect(typeof(player.ships[i].length)).toBe("number");
    }
});

test("Player's ships are actual ships", () => {
    const player = new Player("Player 1");
    player.initShip();
    for (let i = 0; i < player.ships.length; i++) {
        expect(player.ships[i]).toBeInstanceOf(Ship);
    }
});

test('Player ships can be hit', () => {
    const player = new Player("Player 1");
    player.initShip();
    for (let i = 0; i < player.ships.length; i++) {
        player.ships[i].hit();
        expect(player.ships[i].hitCount).toBe(1);
    }
});

test('Player ships can be sunk', () => {
    const player = new Player("Player 1");
    player.initShip();
    for (let i = 0; i < player.ships.length; i++) {
        for(let j = 0; j < player.ships[i].length; j++) {
            player.ships[i].hit();
        }
        expect(player.ships[i].sunk).toBe(true);
    }
});

test('Player can place ships on map', () => {
    const player = new Player("Player 1");
    player.initMap();
    player.initShip();
    player.initShipOnMap();
    let count = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if(player.map[i][j] !== null) {
                count++;
            }
        }
    }
    expect(count).toBe(20);
});

test("player can attack enemy map", () => {
    const player1 = new Player("Player 1");
    const player2 = new Player("Player 2");
    player1.initMap();
    player1.initShip();
    player1.initShipOnMap();
    player2.initMap();
    player2.initShip();
    player2.initShipOnMap();
    player1.attack(0, 0, player2.map);
    expect(player2.map[0][0]).toBe("miss");
});