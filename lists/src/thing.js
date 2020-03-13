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

    find(value) {
        let node = this.head;

        while(node && node.value() !== value){
            node = node.next
        }
        
        return node;
    }

    append(value) {
        const listIsEmpty = !!this.head;

        if (listIsEmpty){
            this.head = new Node(value);
        } else {
            let node = this.head;
            while (node && node.next){ 
                node = node.next;
            }
            node.next = new Node(value);
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
        if (this.head.data === value) {
            this.removeFirstItem();
            return;
        }

        let current = this.head;
        let previous = this.head;

        while(current !== null){
            if(current.data === value){
                previous.next = current.next;
            }

            previous = current;
            current = current.next;
        }
    }

    removeFirstItem() {
        this.head = this.head.next;
    }
}
