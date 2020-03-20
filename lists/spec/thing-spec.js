describe("DoublyLinkedList", () => {

    it("when doubly list is initialised it is empty", () => {
        const list = new DoublyLinkedList();
        expect(list.find("fred")).toBe(null);
    });

    it("should return the value", () => {
        const list = new DoublyLinkedList();
        list.append("fred");
        expect(list.find("fred").value()).toBe("fred");
    });
})




describe("SinglyLinkedList", () => {

    it("when list is initialised it is empty", () => {
        const list = new SinglyLinkedList();
        expect(list.find("fred")).toBe(null);
    });

    it("should return the value", () => {
        const list = new SinglyLinkedList();
        list.append("fred");
        expect(list.find("fred").value()).toBe("fred");
    });

    it("should return Sue the value", () => {
        const list = new SinglyLinkedList();
        list.append("fred");
        list.append("Sue");
        expect(list.find("Sue").value()).toBe("Sue");
        expect(list.find("fred").value()).toBe("fred");
    });

    it("should return null", () => {
        const list = new SinglyLinkedList();
        list.append("fred");
        expect(list.find("Sue")).toBe(null);
    });    

    it("should return Polly the value", () => {
        const list = new SinglyLinkedList();
        list.append("fred");
        list.append("Sue");
        list.append("Polly");
        expect(list.find("Sue").value()).toBe("Sue");
        expect(list.find("fred").value()).toBe("fred");
        expect(list.find("Polly").value()).toBe("Polly");
    });

    it('should display linked list', () => {
        const list = new SinglyLinkedList();
        list.append('z');
        list.append('y');

        const arr = [...list.displayList()]

        expect(arr).toEqual(['z', 'y']);
    });

    it("should remove an item", () => {
        const list = new SinglyLinkedList();
        list.append("fred");
        list.append("Sue");
        list.append("Polly");

        list.remove("Polly");

        expect(list.find('Polly')).toBe(null);
        expect(list.find("Sue").value()).toBe("Sue");
        expect(list.find("fred").value()).toBe("fred");
    });

    it("should remove an item from the start", () => {
        const list = new SinglyLinkedList();
        list.append("fred");
        list.append("Sue");
        list.append("Polly");

        list.remove("fred");

        expect(list.find('fred')).toBe(null);
        expect(list.find("Sue").value()).toBe("Sue");
        expect(list.find("Polly").value()).toBe("Polly");
    });

    it("should remove an item from the middle", () => {
        const list = new SinglyLinkedList();
        list.append("Sue");
        list.append("fred");
        list.append("Polly");

        list.remove("fred");

        expect(list.find('fred')).toBe(null);
        expect(list.find("Sue").value()).toBe("Sue");
        expect(list.find("Polly").value()).toBe("Polly");
    });
});