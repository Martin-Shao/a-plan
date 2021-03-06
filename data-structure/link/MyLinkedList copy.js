function Node(element) {
    this.element = element;
    this.next = null;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = new Node('head');
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let current = this.head;
    for (let i = 0; i < index + 1; i++) {
        if(index === i) return current.element;
        else if (current) current = current.next;
        else return -1
    }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let current = this.head;
    let newNode = new Node(val);
    if(current.next) {
        newNode.next = current.next;
        current.next = newNode;
    } else {
        current.next = newNode;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let current = this.head;
    let newNode = new Node(val);
    while(current.next) {
        current = current.next;
    }
    current.next = newNode;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let current = this.head;
    let newNode = new Node(val);
    if(index < 0) {
        newNode.next = current.next;
        current.next = newNode
    }
    for (let i = 0; i < index + 1; i++) {
        if(index === i) {
            newNode.next = current.next;
            current.next = newNode
        }
        else if (current) current = current.next;
        else return -1
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let current = this.head;
    for (let i = 0; i < index + 1; i++) {
        if(index === i)  current.next = current.next.next;
        else if (current) current = current.next;
        else return -1
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let linkedList = new MyLinkedList();
linkedList.addAtHead('Hefei');
// linkedList.addAtHead('Beijing');
// linkedList.addAtHead('Shanghai');
// linkedList.addAtHead('Hangzhou');
// linkedList.addAtHead('Guangzhou');

