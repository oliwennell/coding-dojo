class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }

    value() {
        return this.data;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    find() {
        return this.head;
    }

    append(value) {
        this.head.next = new Node(value);
    }
}
