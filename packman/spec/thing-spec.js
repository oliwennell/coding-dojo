describe('Packman game', () => {
    it('there is a grid', () => {
        var grid = createGrid();
        expect(grid).toEqual([
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.']
        ])
    })
})