function createGrid(rowPositionPackman, columnPositionPackman) {
    let arr = [];
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    arr[rowPositionPackman][columnPositionPackman] = "V";
    return arr;
}

