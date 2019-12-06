describe("stays the same", () => {
    describe("A tub", () => {
        it("4 x 4", () => {
            const input = [
                [0, 1, 0, 0],
                [1, 0, 1, 0],
                [0, 1, 0, 0],
                [0, 0, 0, 0],
            ];
            const nextGen = simulate(input);

            expect(nextGen).toEqual(input);
        });
    });

    describe("A beacon", () => {
        it("4 x 4", () => {
            const input = [
                [1, 1, 0, 0],
                [1, 0, 0, 0],
                [0, 0, 0, 1],
                [0, 0, 1, 1],
            ];
            const nextGen = simulate(input);

            expect(nextGen).toEqual([
                [1, 1, 0, 0],
                [1, 1, 0, 0],
                [0, 0, 1, 1],
                [0, 0, 1, 1],
            ]);
        });
    });

    describe("A block", () => {
        
        it("4 x 4", () => {
            const input = [
                [0, 0, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 1, 0],
                [0, 0, 0, 0],
            ];
            const nextGen = simulate(input);

            expect(nextGen).toEqual(input);
        });
        it("3 x 3", () => {
            const input = [
                [0, 0, 0],
                [0, 1, 1],
                [0, 1, 1],
            ];
            const nextGen = simulate(input);

            expect(nextGen).toEqual(input);
        });
    });
});

describe("An oscilator", () => {

    it("rotates", () => {
        const input = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];
        const output = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
        ];
        const nextGen = simulate(input);

        expect(nextGen).toEqual(output);
    });

    it("rotates over and over", () => {
        const input = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0],
        ];
        const output = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0],
        ];
        const nextGen = simulate(input);

        expect(nextGen).toEqual(output);
    });
});

describe("calculating number of live neighbours", () => {

    it("no live neighbours", () => {
        const num = countLiveNeighbours([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0]
        ], { x: 1, y: 1 });

        expect(num).toBe(0);
    });

    it("two live neighbours", () => {
        const randomRow = Math.floor(Math.random() * 3);
        const liveRow = [1, 1, 1];
        const grid = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        grid.splice(randomRow, 0, liveRow);
        const num = countLiveNeighbours(grid, { x: 1, y: randomRow });

        expect(num).toBe(2);
    });

    it("random live neighbours", () => {
        let randomCount = Math.floor(Math.random() * 8);
        let todo = randomCount;
        const grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        for (let i = 0; i < grid.length; ++i) {
            for (let j = 0; j < grid.length; ++j) {
                if (i === 1 && j === 1) {
                    continue;
                }
                grid[i][j] = (todo-- > 0 ? 1 : 0);
            }
        }

        const num = countLiveNeighbours(grid, { x: 1, y: 1 });

        expect(num).toBe(randomCount);
    });

});