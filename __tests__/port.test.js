const Port = require("../src/port");

describe ("port", () => {
    it("can be instantiated", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it("has a name", () => {
        const port = new Port("Belfast");
        expect(port.name).toEqual("Belfast");
    });
});