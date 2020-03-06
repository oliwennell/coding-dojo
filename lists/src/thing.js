class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }

    value() {
        return this.data;
    }
}

class List {
    constructor() {
        this.head = new Node();
    }

    find() {
        return this.head;
    }

    add(value) {
        this.head.data = value;
    }
}
