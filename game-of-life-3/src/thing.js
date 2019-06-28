
class Game {
    constructor(initialGrid){
        this.grid = initialGrid;
        this.callCount = 0;
    }

    generate() {
        let newGrid = [[0,0,0],[0,0,0],[0,0,0]];
        for(let row=0; row<3; row++){
            for(let column=0; column<3; column++) {
                const north = row === 0 ? 0 : this.grid[row-1][column];
                const south = row === 2 ? 0 : this.grid[row+1][column];
                const east = column === 2 ? 0 : this.grid[row][column+1];
                const west = column === 0 ? 0 : this.grid[row][column-1];

                const cell = new Cell(north, south, east, west);
                if (cell.shouldSurvive()) {
                    newGrid[row][column] = 1;
                }
                else {
                    newGrid[row][column] = 0;
                }
            }
        }
        return newGrid;
    }
}

class Cell {
    constructor(north, south, east, west){
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
    }

    shouldSurvive(){
        const sum = this.north + this.south + this.east + this.west;
        return sum >= 2;
    }
}