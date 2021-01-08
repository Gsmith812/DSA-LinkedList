// Write an algorithm to find whether a linked list has a cycle (i.e., 
// whether a node in the list has its next value pointing to an earlier node in 
// the list). For this exercise, create a linked list with the name 
// CycleList. Be sure to insert nodes in the list so that it has a cycle. 
// Then test your program with a cycleList function.

const LinkedList = require('../linked-list');

const linkListFunctions = require('./supplemental-functions');

const CycleList = new LinkedList;
let listItems = ['George', 'Darren', 'Victor', 'Laura', 'Brian'];
listItems.map(item => CycleList.insertLast(item));

const isCycle = linkedList => {
    // Set single node to move 1 node at a time
    let singleNode = linkedList.head;
    // Set double node to move 2 nodes at a time
    let doubleNode = linkedList.head;

    // While there are still values for each stored node iterate forward
    while(singleNode.next !== null && doubleNode.next.next !== null) {
        // Move doulbe node 2 nodes forward
        doubleNode = doubleNode.next.next;
        // Move single node 1 node forward 
        singleNode = singleNode.next;

        // Check to see if there is a cycle
        if(doubleNode == singleNode) {
            return true;
        }
    }
    // No cycle found
    return false;
}

// Create cycle in list

CycleList.head.next.next.next.next = CycleList.head.next.next;
isCycle(CycleList);