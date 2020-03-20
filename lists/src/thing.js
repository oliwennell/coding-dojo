class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }

    value() {
        return this.data;
    }
}

class DoublyNode {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }

    value() {
        return this.data;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    find(value) {
        let node = this.head;
        return node;
    }

    append(value) {
        this.head = new DoublyNode();
        this.head.data = value;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    find(value) {
        let node = this.head;

        while(node && node.value() !== value){
            node = node.next
        }
        
        return node;
    }

    append(value) {
        const listHasItems = !!this.head;
        
        if (listHasItems){
            let node = this.head;
            while (node && node.next){ 
                node = node.next;
            }
            node.next = new Node(value);
        } else {
            this.head = new Node(value);
        }
    }

    *displayList(){
        let current = this.head;

        while(current !== null){
            yield current.data;
            current = current.next;
        }
    }

    remove(value) {
        let current = this.head;
        let previous = this.head;

        while(current !== null){
            if(current.data === value){
                
                if (this.head === current) {
                    this.head = this.head.next;
                } else {
                    previous.next = current.next;
                }
            }

            previous = current;
            current = current.next;
        }
    }

    removeFirstItem() {
        this.head = this.head.next;
    }
}
