describe("List", () => {

    it("when list is initialised it is empty", () => {
        const list = new List();
        expect(list.find("fred")).toBe(null);
    });

    it("should return the value", () => {
        const list = new List();
        list.add("fred");
        expect(list.find("fred").value()).toBe("fred");
    });
});