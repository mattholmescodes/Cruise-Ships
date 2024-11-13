const Ship = require("../src/cruise")

describe ("constructor", () => {
    it ("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it ("has a starting port", () => {
        const ship = new Ship("Dover");
        expect(ship.startingPort).toEqual("Dover");
    });
    it ("can set sail", () => {
        const ship = new Ship;
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});