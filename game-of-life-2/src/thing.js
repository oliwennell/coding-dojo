function emptyBoard() {
    return [
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
    ];
}

class Game {
    constructor() {
        this.board = emptyBoard();
    }

    step() {
        const newBoard = emptyBoard();
        this.board.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                let count = 0;
                if (this.board[rowIndex][cellIndex-1] === "X") {
                    count++;
                }

                if (this.board[rowIndex][cellIndex+1] === "X") {
                    count++;
                }

                if (count !== 2) {
                    newBoard[rowIndex][cellIndex] = " ";
                }
            });
        });

        this.board = newBoard;
    }

}