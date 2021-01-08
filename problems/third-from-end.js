// Write an algorithm to find the 3rd element from the end of a linked list. 
// Note You may be tempted to add a length property to your linked list class. 
// The length property is not a typical property of linked list, therefore 
// don't make any modification to the linked list class that is provided to 
// you.

const thirdFromEnd = linkedList => {
    // Set first node
    let currNode = linkedList.head;

    // Check to see if list is long enough
    if(!currNode.next || !currNode.next.next) {
        return `List is not at least 3 items long`;
    }
    // While 3 nodes exist from currNode iterate through
    while( currNode.next.next.next !== null) {
        //Move to next node
        currNode = currNode.next;
    }
    return currNode;
};