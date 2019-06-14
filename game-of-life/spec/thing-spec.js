describe("thing", () => {
        // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
        // Any live cell with two or three live neighbours lives on to the next generation.
        // Any live cell with more than three live neighbours dies, as if by overpopulation.
        // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
        
    [
        { before: ' X \nXXX\n   ', expected: '   \n X \n   ' },
        { before: '   \n X \n X ', expected: '   \n   \n   ' },
        { before: ' X \n X \n X ', expected: '   \n X \n   ' },
        { before: '  \n X', expected: '  \n  ' },
    ].forEach(({ before, expected }) => {
        it("Any live cell with fewer than two live neighbours dies, as if by underpopulation.", () => {
           const after = simulate(before);
            expect(after).toBe(expected);
        });
    });
});
