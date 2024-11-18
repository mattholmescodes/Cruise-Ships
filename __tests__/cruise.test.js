const Ship = require("../src/cruise");
const Port = require("../src/port");

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
    it ("can dock at a different port", () => {
        const dover = new Port("Dover");
        const ship = new Ship(dover);
        const calais = new Port("Calais");
        ship.dock(calais);
        expect(ship.currentPort).toBe(calais);
    });
});