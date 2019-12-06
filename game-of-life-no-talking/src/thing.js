function simulate(input) {
    return input.map((row, x) => 
        row.map((cell, y) => {
            if (countLiveNeighbours(input, { x, y }) === 3) return 1;
            if (countLiveNeighbours(input, { x, y }) === 2) return cell;
            return 0;
        })
    );
}

function countLiveNeighbours(grid, { x, y }) {
    let numAlive = 0;
    for (let i = Math.max(x -  1, 0); i < Math.min(grid.length, x + 2); ++i) {
        for (let j = Math.max(y -  1, 0); j < Math.min(grid.length, y + 2); ++j) {
            if (i === x && j === y) continue;
            
            numAlive += grid[i][j];
        }
    }
    return numAlive;
}