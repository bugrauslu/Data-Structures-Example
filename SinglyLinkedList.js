//singly linked list//

class node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
          let newNode=new node(val);
          if (!this.head) {
              this.head=newNode;
              this.tail=this.head;
          }else{
              this.tail.next=newNode;
              this.tail=newNode;
          }
          this.length++;
          return this;
    }

    pop(){
        if (!this.head) return undefined;
        let current=this.head;
        let newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail
        this.tail.next=null;
        this.length--;
        if (list.length===0) {
            this.head=null;
            this.tail=null;
        }
        return current;
    }

    shift(){
        if (!this.head) {
            return undefined;
        }
        let currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if (list.length===0) {
            this.head=null;
        }
        return currentHead;
    }

    unshift(val){
        let newNode= new node(val);
        if (!this.head) {
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
       
        this.length++;
        return this;
    }

    //search node
    get(index){
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter=0;
        let current =this.head;

        while(counter!==index){
            current=current.next;
            counter++;
            
        }
        return current;

    }

    set(index,val){
         //search node
        let foundNode = this.get(index);
        if (foundNode) {
            //update node
            foundNode.val=val;
            return true;
        }
        return false;

    }

    insert(index, val){
         if (index < 0 || index > this.length) {
             return false;
        }
        //last index insert
         if (index === this.length) {
            return this.push(val);
        }
        //first index insert
         if (index===0) {
            return this.unshift(val);
        }
        //intermediate index insert
        let newNode = new node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true

    }

    remove(index){
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
            return this.shift();
        }
        
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;

        return removed;

    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev=null;
        for (let i = 0; i < this.length; i++) {
           next = node.next;
           node.next = prev;
           prev = node;
           node = next;
            
        }
        return this;
    }






}


var list=new SinglyLinkedList()
list.push("one")
list.push("two")
list.push("tree")
list.push("four")
list.push("five");





















































































































































































































