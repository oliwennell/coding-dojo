function createGrid(rowPositionPackman, columnPositionPackman) {
    let arr = [];
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    
    if(rowPositionPackman && columnPositionPackman) {
        arr[rowPositionPackman][columnPositionPackman] = "V";
    }

    return arr;
}

