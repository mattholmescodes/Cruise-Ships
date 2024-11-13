const Ship = require("../src/cruise")

describe ("constructor", () => {
    it ("returns an object", () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});