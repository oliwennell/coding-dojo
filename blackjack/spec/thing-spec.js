describe("", () => {

    it("we give it an array of numbers and it adds it all up", () =>  {
        const {score} = runGame([ "4", "3" ]);
        expect(score).toBe(7);
    });

    it("picture cards", () => {
        const {score} = runGame([ "King", "Jack" ]);
        expect(score).toBe(20);
    });

    it("picture cards with a Queen", () => {
        const {score} = runGame([ "Queen", "Jack" ]);
        expect(score).toBe(20);
    });

    it("going bust", () => {
        const {isBust} = runGame([ "Queen", "Jack", "10" ]);
        expect(isBust).toBe(true);
    });

    it("Aces 11", () => {
        const {score} = runGame([ "Queen", "Ace" ]);
        expect(score).toBe(21);
    })

    it("Aces 1", () => {
        const {score} = runGame([ "Queen", "7", "Ace" ]);
        expect(score).toBe(18);
    })

    it("has more than one ace and goes bust", () => {
        const {isBust} = runGame([ "Queen", "King", "Ace", "Ace" ]);
        expect(isBust).toBe(true);
    })
    
    it("has more than one ace and doesn't go bust", () => {
        const {score} = runGame([ "Queen", "7", "Ace", "Ace" ]);
        expect(score).toBe(19);
    })

    it("has three aces", () => {
        const {score} = runGame([
            "Ace", "Ace", "Ace", "10", "6"
        ]);
        expect(score).toBe(19);
    })

    it("has something else Alex said", () => {
        const {score} = runGame([
            "Ace", "Ace", "6"
        ]);
        expect(score).toBe(18);
    })

    it("21", () => {
        const { score, isBust } = runGame([
            "Ace", "Ace", "Ace", "10", "8"
        ]);
        expect(score).toBe(21);
        expect(isBust).toBe(false);
    })

    it("22", () => {
        const { score, isBust } = runGame([
            "Ace", "Ace", "Ace", "10", "9"
        ]);
        expect(score).toBe(22);
        expect(isBust).toBe(true);
    })
});