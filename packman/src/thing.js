function createGrid(rowPositionPackman, columnPositionPackman) {
    let arr = [];
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    
    if (Number.isInteger(rowPositionPackman) && Number.isInteger(columnPositionPackman)) {

        arr[rowPositionPackman][columnPositionPackman] = "V";
    }

    return arr;
}

function movePackman(grid, direction) {
    // ['.', '.', '.'],
    // ['.', 'V', '.'],
    // ['.', '.', '.']

    // =>

    // ['.', '.', '.'],
    // ['.', '.', 'V'],
    // ['.', '.', '.']

    // calculate coordinates of packman
    let rowPosition;
    let columnPosition;

    grid.forEach((row, index) => {
        const packmanPosition = row.indexOf('V');

        if (packmanPosition > -1) {
            columnPosition = packmanPosition;
            rowPosition = index;
        }
    });

    // calculate new coordinates based on direction
    if (direction === 'right') {
        columnPosition += 1;
    }

    if (direction === 'left') {
        columnPosition -= 1;
    }

    if (direction === 'up') {
        rowPosition -= 1;
    }

    if (direction === 'down') {
        rowPosition += 1;
    }

    // update grid with new coordinates
    const nextGrid = createGrid(rowPosition, columnPosition);

    return nextGrid;
}
