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
    it('move packman - right', () => {
      const grid = createGrid(1, 1)
      const nextGrid = movePackman(grid, "right")
      expect(nextGrid).toEqual([
        ['.', '.', '.'],
        ['.', '.', 'V'],
        ['.', '.', '.']
    ])
    })

    it('move packman - left', () => {
        const grid = createGrid(1, 1)
        const nextGrid = movePackman(grid, "left")
        expect(nextGrid).toEqual([
            ['.', '.', '.'],
            ['V', '.', '.'],
            ['.', '.', '.']
        ])
    })

    it('move packman - up', () => {
        const grid = createGrid(1, 1)
        const nextGrid = movePackman(grid, "up")
        expect(nextGrid).toEqual([
            ['.', 'V', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ])
    })

    it('move packman - down', () => {
        const grid = createGrid(1, 1)
        const nextGrid = movePackman(grid, "down")
        expect(nextGrid).toEqual([
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', 'V', '.']
        ])
    })
});