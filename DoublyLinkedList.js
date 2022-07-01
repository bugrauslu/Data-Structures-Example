class Node{

    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLikedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let node=new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }


    pop(){
      if (!this.head) {
          return undefined;
      }
          let poppedNode = this.tail;
          if (this.length === 1){
              this.head = null;
              this.tail = null
          }else{
               this.tail = poppedNode.prev;
               this.tail.next = null;
          }
        this.length--;

          return poppedNode;
      }
    
      shift(){
          if(this.length === 0) return undefined;
          let oldHead=this.head;
          if (this.length === 1) {
              this.head = null;
              this.tail = null;
          }
          else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
          }
          this.length--;

          return oldHead;
      }
    
      unshift(val){
         let newNode= new Node(val);
         if (this.length === 0) {
              this.head = newNode;
              this.tail = newNode;
         }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
         }
         this.length++;

         return this;
      }

      get(index){
        if (index < 0 || index >= this.length) {
            return null;
        }
        let count , current;

        if (index <= this.length/2) {
            count = 0;
            current = this.head;
            while(count != index){
            current = current.next;
            count++;
            }

        }else{
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
         
        }    
        return current;
      }

      set(index, val){
        let foundNode = this.get(index);
            if (foundNode != null) {
                foundNode.val=val;
                return true;
            }
        return false;
        
      }

      insert(index,val){
        if (index < 0  ||  index > this.length) {
            return false;
        }
        
        if (index === 0) {
          return this.unshift(val);
        }

        if (index === this.length) {
           return this.push(val);
        }

        let newNode = new Node(val);
        let BeforeNode = this.get(index -1);
        let afterNode = BeforeNode.next;

        BeforeNode.next = newNode;
        newNode.prev = BeforeNode; 
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;

        return true;

      }

      remove(index){
        if (index < 0  ||  index >= this.length) {
            return false;
        }
        if (index === 0) {
            return this.shift();
          }
  
        if (index === this.length - 1 ) {
            return this.pop();
        }

        let removedNode = this.get(index);    
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;

      }

      



}



let list=new DoublyLikedList();

list.push(12);
list.push(13);
list.push(14);
list.push(15);
list.push(16);
list.push(17);