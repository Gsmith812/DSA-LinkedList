// Write an algorithm to find the middle element of a linked list. Note You 
// may be tempted to add a length property to your linked list class. The 
// length property is not a typical property of linked list, therefore don't 
// make any modification to the linked list class that is provided to you. 
// Also, finding the size of the linked list using the size() function and 
// dividing it by half will not find the correct middle of the linked list. 
// So, don't use either of these approaches.

const middleOfList = linkedList => {
    // Check to see if the list is empty or doesn't exist
    if(!linkedList.head) {
        return `Linked list is empty`;
    }
    // Set node to traverse one node at a time
    let singleNode = linkedList.head;
    // Set node to traverse two nodes at a time to reach the end when the single node should be in the middle
    let doubleNode = linkedList.head;
    
    // While there are still values to traverse
    while( singleNode.next !== null && doubleNode.next.next !== null) {
        // Move double node by 2 nodes
        doubleNode = doubleNode.next.next;
        // Move single node by 1 node
        singleNode = singleNode.next;
    }

    // Return single node that should be at mid point
    return singleNode;
}