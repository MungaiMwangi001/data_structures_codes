
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    pop() {
        if (!this.head) return null;
        
        let current = this.head;
        let prev = null;
        
        while (current.next) {
            prev = current;
            current = current.next;
        }

        if (prev) {
            prev.next = null;
            this.tail = prev;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length--;
        return current.value;
    }

    shift() {
        if (!this.head) return null;

        const removedNode = this.head;
        this.head = this.head.next;

        if (!this.head) this.tail = null;
        this.length--;

        return removedNode.value;
    }

    find(value) {
        let current = this.head;
        
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }

        return false;
    }

    print() {
        let current = this.head;
        let output = [];

        while (current) {
            output.push(current.value);
            current = current.next;
        }

        console.log(output.join(" -> "));
    }
}

const list = new LinkedList()
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print();
console.log(list.find(20));
console.log(list.shift()); // Output: 5