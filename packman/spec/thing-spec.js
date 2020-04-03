describe('Grid', () => {
    it('there is a grid', () => {
        let grid = createGrid();
        expect(grid).toEqual([
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]);
    });

    it('place packman on the grid', () => {
        let grid = createGrid(1, 1);
        expect(grid).toEqual([
            ['.', '.', '.'],
            ['.', 'V', '.'],
            ['.', '.', '.']
        ]);
    });

    it('place packman on the correct column', () => {
        let grid = createGrid(1, 2);
        expect(grid).toEqual([
            ['.', '.', '.'],
            ['.', '.', 'V'],
            ['.', '.', '.']
        ]);
    });

    it('place packman on the first row', () => {
        let grid = createGrid(0, 1);
        expect(grid).toEqual([
            ['.', 'V', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]);
    });
});

describe('move Packman', () => {
    it('move function', () => {
      const grid = createGrid(1,1)
      const nextGrid = movePackman(grid, "right")
      const result = createGrid(1,2)
      expect(nextGrid).toEqual(result)
    }) 
});