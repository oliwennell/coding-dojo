describe("empty board", () => {

    it("starts with an empty board", () => {

        const game = new Game();
        expect(game.board).toEqual(
            [
                [" ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " "],
            ]);
    });

});


[
    { x: 2, y: 3 },
    { x: 2, y: 2 },
].forEach(({ x, y }) => {
    describe("Any live cell with fewer than two live neighbours", () => {
        let game;

        beforeEach(() => {
            game = new Game();
            game.board[x][y] = "X";

        });
        
        it("dies, as if by underpopulation.", () => {
            game.step();
            expect(game.board[x][y]).toEqual(" ");
        });
    });
});

[
    { x: 2, y: 3 },
    { x: 2, y: 2 },
].forEach(({ x, y }) => {
    describe("Any live cell with two live neighbours", () => {
        let game;

        beforeEach(() => {
            game = new Game();
            game.board[x][y-1] = "X";
            game.board[x][y] = "X";
            game.board[x][y+1] = "X";
        });
        
        it("lives on to the next generation.", () => {
            game.step();
            expect(game.board[x][y]).toEqual("X");
        });
    });
});

// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.