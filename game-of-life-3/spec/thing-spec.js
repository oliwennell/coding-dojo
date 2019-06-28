
describe("Cells die due to underpopulation", () => {    
    let actualGrid;
    let expectedGrid;
    let game;
    let initialGrid;

    beforeEach(() => {
        initialGrid = 
        [
            [ 0, 0, 0 ],
            [ 0, 1, 0 ],
            [ 0, 0, 0 ] 
        ];
        expectedGrid = 
        [
            [ 0, 0, 0 ],
            [ 0, 0, 0 ],
            [ 0, 0, 0 ] 
        ];
        game = new Game(initialGrid);
        actualGrid = game.generate();
    });

    it("then the grid is not the same", () => {
        expect(actualGrid).toEqual(expectedGrid);
    });
});

describe("Cell with two or three live neighbours lives on", () => {    
    let actualGrid;
    let expectedGrid;
    let game;
    let initialGrid;

    beforeEach(() => {
        initialGrid = [
            [ 0, 0, 0 ],
            [ 1, 1, 1 ],
            [ 0, 0, 0 ] 
        ];
        expectedGrid = 
        [
            [ 0, 0, 0 ],
            [ 0, 1, 0 ],
            [ 0, 0, 0 ] 
        ];
        game = new Game(initialGrid);
        actualGrid = game.generate();
    });

    it("then the grid is not the same", () => {
        expect(actualGrid).toEqual(expectedGrid);
    });
});