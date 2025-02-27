//linear data structure where elemnts (nodes)are connected using pointers.
// do not have contiguous memory(like arrays),  insertions and deletions are more efficient

/**
 * Dynamic memory allocation - do not require a fixed sized
 * Sequenial access - random acess is not possible
 * Efficent deletions and Insertions
 * Each node contains data and  a pointer
 * 
 */

/**
 *  TYPES 
 * 1. Singly linked list - each node poinys to the next node only
 * 2. Doubly linked list - each node  has  two pointers : one to the next  node and one to the previous node
 * 3. Circular linked list -last node points back to the first node.
 * 
 */


//Approach 1
/**
 * OPERATIONS
 * INSERTATHEAD() O(1) - insert node at the beginning
 * INSERTATATAIL() O(n) - insert node at the end
 * DELETEATHEAD() O(1) -  removes the first node
 * DELETEATTAIL() O(n) - removes the last node
 * SEARCH()  O(n) - finds  a node witha specific value
 * SIZE() O(N) -   returns the number of nodes
 */


//IMPLEMENTATION OFA SINGLY LINKED LIST 


// Define a Node Class
// Each node in a linked list contains:
// - Value (data)
// - Pointer (reference to the next node)

class Node{
    constructor(value){
        this.value = value; // Stores the data
        this.next = null; //point to thenext node
    }
}

class linkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert node at the beginning O(1) (prepend)
    insertAtHead(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

     //Delete node at the head(1)
   deleteAtHead(){
    if(!this.head) return  null;
    this.head = this.head.next;
    this.size--;
   } 

    //insert node at the tail/end O(n)
    insertAtTail(value){
        let  node = new Node(value)
        if (!this.head){
            this.head  = node
        } else {
            let current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }

    


    //delete at tail O(n)
    deleteAtTail(){
        if(!this.head) return null;
        if(!this.head.next){
            this.head = null
        }  else {
            let current = this.head;
            while(current.next.next){
                current = current.next
            }
            current.next = null;        
        }
        this.size--;
    }

    //search for a vlaue O(n)
    search(value){

        let current = this.head;
        while(current){
            if(current.value === value) return true;
            current = current.next;        
        }
         return false;
    }

    //print the linked list
    //concantenate
    print(){
        let  current = this.head;
        let result  = " " ;
        while(current){
            result += current.value + "  ->  ";
            current = current.next;
        }
        console.log(result || "Empty List");

    }

    //join method
    print2() {
        let current = this.head;
        let output = [];
        
        while (current) {
            output.push(current.value);
            current = current.next;
        }
        
        console.log(output.join(" -> "));
    }

}

//example usage
const list = new linkedList();
list.insertAtHead(10);
list.insertAtHead(13)
list.insertAtTail(14);

list.print2();



//approach 2
//the complexities differ

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
    

    //O(1) - we are tracking the tail insert at the end
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
    

    //Insert at the Beginning  O(1)
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
    

    //remove from the end O(n) trasverse
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

const list2 = new LinkedList()
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.print();
console.log(list.find(20));
console.log(list.shift()); // Output: 5
