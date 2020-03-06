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
            let node = this.head;
            while(node && node.next){ 
                node = node.next;
            }
            node.next = new Node(value);
        }
    }
}
