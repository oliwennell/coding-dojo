function spawn(grid) {
    let newGrid = grid.map((row) => [...row]);

    if (newGrid[1][0] === '🎅') {
        newGrid[1][1] = '🎅';
        newGrid[1][0] = '💀';
        return newGrid;
    } 
    return [
        ['💀','💀','💀'],
        ['💀','💀','💀'],
        ['💀','💀','💀']
    ];
}
