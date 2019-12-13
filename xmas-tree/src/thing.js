
String.prototype.pad = function(length) {
    return this.padStart(length+(this.length/2), ' ')
               .padEnd(Math.max(0, length * 2 - 1), ' ');
}

class ChristmasTree {

    static createTree(branchyHeighty) {

        const tree = [];

        for (let i = 0; i < branchyHeighty; i++) {
            const treeX = (i * 2) + 1;
            const level = "X".repeat(treeX).pad(branchyHeighty);
            tree.push(level);
        }
        return tree.concat(["X".pad(branchyHeighty)]).join("\n");
    }

}
