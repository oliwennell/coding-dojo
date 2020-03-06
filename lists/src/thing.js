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
        if(!this.head){
            this.head = new Node(value);
        }else{
            this.head.next = new Node(value);
        }
    }
}
