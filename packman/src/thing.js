function createGrid(rowPositionPackman, columnPositionPackman) {
    let arr = [];
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    arr.push(['.', '.', '.']);
    
    if(Number.isInteger(rowPositionPackman) && Number.isInteger(columnPositionPackman)) {

        arr[rowPositionPackman][columnPositionPackman] = "V";
    }

    return arr;
}
