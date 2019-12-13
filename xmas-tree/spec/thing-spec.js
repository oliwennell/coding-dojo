
describe("it's xmas time nearly", () => {

    it("draws a trunk for zero tree", () => {
        const tree = ChristmasTree.createTree(0);

        expect(tree).toBe("X");
    });

    it("draws a tree with a trunk when passed 1", () => {
        const tree = ChristmasTree.createTree(1);

        expect(tree).toBe("X\nX");
    });

    it("draws a tree 3 in height when passed 2", () => {
        const tree = ChristmasTree.createTree(2);

        expect(tree).toBe(" X \nXXX\n X ");
    });

    it("draws a tree 3 with a star in height when passed 2 and 🌟", () => {
        const tree = ChristmasTree.createTree(2, '🌟');

        expect(tree).toBe(" * \n X \nXXX\n X ");
    });

    it("draws a mega tree", () => {
        const tree = ChristmasTree.createTree(42);

        console.log(tree);
    });

});