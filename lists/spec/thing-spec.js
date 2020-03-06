describe("List", () => {

    it("when list is initialised it is empty", () => {
        const list = new List();
        expect(list.find("fred")).toBe(null);
    });

    it("should return the value", () => {
        const list = new List();
        list.append("fred");
        expect(list.find("fred").value()).toBe("fred");
    });

    it("should return Sue the value", () => {
        const list = new List();
        list.append("fred");
        list.append("Sue");
        expect(list.find("Sue").value()).toBe("Sue");
        expect(list.find("fred").value()).toBe("fred");
    });

    it("should return null", () => {
        const list = new List();
        list.append("fred");
        expect(list.find("Sue")).toBe(null);
    });    

    it("should return Polly the value", () => {
        const list = new List();
        list.append("fred");
        list.append("Sue");
        list.append("Polly");
        expect(list.find("Sue").value()).toBe("Sue");
        expect(list.find("fred").value()).toBe("fred");
        expect(list.find("Polly").value()).toBe("Polly");
    });
});