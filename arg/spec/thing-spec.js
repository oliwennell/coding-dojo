describe("", () => {

    // it("should parse arguments", () => {

    //     const result = parseArgs("-l -p 8080 -d /usr/logs");

    //     expect(result).toEqual([
    //         { logging: true },
    //         { port: 8080 },
    //         { directory: "/usr/logs" }
    //     ]);
    // });

    it("should parse login as true when specified", () => {
        const result = parseArgs("-l");
        expect(result).toEqual([
            { logging: true }
        ]);
    });

    it("should parse login as false when not specified", () => {
        const result = parseArgs("");
        expect(result).toEqual([
            { logging: false }
        ]);
    });

    it("should parse ", () => {
        const result = parseArgs("-l -p");
        expect(result).toEqual([
            { logging: true },
            { ploppy: true }
        ]);
    });

});