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

    *traverse(){
        let current = this.head;

        while(current !== null){
            yield current.data;
            current = current.next;
        }
    }

    remove(value) {
        let current = this.head;
        let previous = this.head;

        while(current!== null){
            if(current.data === value){
                previous.next = current.next;
            }
            previous = current;
            current = current.next;
        }
    }
}
