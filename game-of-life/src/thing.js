function Game() {
}

Game.prototype.meaningOfLife = () => {
    console.log("Hello, world!");
    return 42;
}

function simulate(before) {
    const board = before.split("\n").map(row => row.split(''));
    const boardSize = board.length;
    function getCell(board, row, column) {
        const r = board[row];
        if (!r) {
            return '';
        } else {
            return r[column] || '';
        }
    }

    const newBoard = board.map((fullRow, row) => {
        return fullRow.map((cell, column) => {
            let aliveNeighbours = 0;
            if (getCell(board, row, column + 1) === 'X') aliveNeighbours++;
            if (getCell(board, row, column - 1) === 'X') aliveNeighbours++;
            if (getCell(board, row - 1, column) === 'X') aliveNeighbours++;
            if (getCell(board, row + 1, column) === 'X') aliveNeighbours++;

            if (aliveNeighbours < 2) {
                return ' ';
            }

            return cell;
        }).join('');
    }).join('\n');

    return newBoard;
    //const row = Array.from(new Array(boardSize), () => ' ').join('');

    // const board = Array.from(new Array(boardSize), (_, index) => {
    //     const old = rows[index];
    //     const numAlive = old.split('').filter(cell => cell === 'X').length;
    // 
    //     if (numAlive === 3) {
    //         return ' X ';
    //     } else {
    //         return ' '.repeat(boardSize);
    //     }
    // }).join("\n");
    // return board;
}

function printBoard(board) {
    const rows = board.split("\n");
    const boardSize = rows.length;
    const separatorRow = ' -'.repeat(boardSize);


    console.log(separatorRow);


    rows.forEach(rawRow => {
        const row = rawRow.split('');
        const formattedRow = `|${row.join('|')}|`;


        console.log(formattedRow);
        console.log(separatorRow);
    });
}


[
    { before: ' X \nXXX\n   ', expected: '   \n X \n   ' },
    { before: '   \n X \n X ', expected: '   \n   \n   ' },
    { before: ' X \n X \n X ', expected: '   \n X \n   ' },
    { before: '  \n X', expected: '  \n  ' },
].forEach(({ before, expected }) => {
    const after = simulate(before);
    printBoard(before);
    printBoard(after);
});