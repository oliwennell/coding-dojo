describe('Packman game', () => {
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
    })

    it('place packman on the correct column', () => {
        let grid = createGrid(1, 2);
        expect(grid).toEqual([
            ['.', '.', '.'],
            ['.', '.', 'V'],
            ['.', '.', '.']
        ]);
    })

    it('place packman on the correct column', () => {
        let grid = createGrid(0, 1);
        expect(grid).toEqual([
            ['.', 'V', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ]);
    })

});