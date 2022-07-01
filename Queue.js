class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let NewNode = new Node(val);
        if (!this.first) {
            this.first = NewNode;
            this.last= NewNode;
        }else{
            this.last.next = NewNode;
            this.last = NewNode;
        }
        return ++this.size;

    }

    dequeue(){
        if (!this.first) {
            return null;
        }
         let temp = this.first;
         if (this.first === this.last) {
            this.last = null;
         }
         this.first = this.first.next;
         this.size--;
         return temp.value;

    }

}

