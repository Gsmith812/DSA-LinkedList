const LinkedList = require('../linked-list');
// Write an algorithm to reverse a linked list. The time complexity of your 
// algorithm should be linear (O(n)). For this exercise, notice we are not 
// asking you just to print the linked list in reverse or use another linked 
// list to store the value in reverse order. Your program should reverse the 
// direction of a given singly linked list. In other words, all pointers 
// should point backward. BONUS: Solve this problem using both recursive and 
// iterative algorithms.

// Iterative solution

const reverseList = linkedList => {
    // Set first node
    let currNode = linkedList.head;

    // Set stored values for nodes
    let prevNode;
    let tempNode;

    // Iterate through while we have a currNode
    while(currNode) {
        // Store next node
        tempNode = currNode.next;
        // Set current node's next node to the previous node
        currNode.next = prevNode;
        // Set previous node to currNode
        prevNode = currNode;
        // Change stored node to the currNode
        currNode = tempNode;
    }

    // Change head to prevNode
    linkedList.head = prevNode;
    // Return reversed list
    return linkedList;
};

// Recursive solution

const recursiveReverse = (linkedList, original) => {
    original = original || linkedList;
    let head;

    // If linked list exists set head to linked list head
    if(linkedList.head) {
        head = linkedList.head;
    } else {
        head = linkedList;
    }

    if(!head || !head.next) {
        original.head = head;
        return original;
    }
    let temp = recursiveReverse(head.next, original);
    head.next.next = head;
    head.next = undefined;
    return temp;
};

