// Write an algorithm that will sort a given linked list. For example given 
// a list such as 3->2->5->7->1, your program will output the sorted version 
// of this list which will be 1->2->3->5->7. You may not use another list or 
// any other data structure such as an array to store the data.

const LinkedList = require('../linked-list');
const _Node = require('../node');

const SortedList = new LinkedList;

let listItems = [3, 2, 5, 7, 1];
listItems.map(item => SortedList.insertLast(item));


const sortedList = head => {
    // Check to see that we have at least 2 values
    if(head === null || head.next === null) {
        return head;
    }
    // Set up base variables
    let prevNode = null;
    let singleNode = head;
    let dblNode = head;

    // While doulbe time iterations have values
    while(dblNode !== null && dblNode.next !== null) {
        // move double node 2 forward
        dblNode = dblNode.next.next;
        // Set previous node to single node
        prevNode = singleNode;
        // Move single node forward 1
        singleNode = singleNode.next;
    }

    // Separate first half of the list
    prevNode.next = null;

    // Recursivly split the lists into separate lists
    const list1 = sortedList(head);
    const list2 = sortedList(singleNode);

    // Use helper function to merge and sort lists
    return mergeLists(list1, list2);
};

// Create helper function to help sort and merge separated lists
const mergeLists = (list1, list2) => {
    // Set new head
    const head = new _Node();

    // Set current node
    let curr = head;

    // While items are in both lists iterate through
    while(list1 !== null && list2 !== null) {
        // If list 1's value is less than list 2
        if(list1.value < list2.value) {
            // Set next value to list 1's value
            curr.next = list1;
            // Move on to next part of list 1
            list1 = list1.next;
        } else {
            // Set next value to list 2's value
            curr.next = list2;
            // Move on to next part of list 2
            list2 = list2.next;
        }
        // Move on to next current
        curr = curr.next;
    }

    // Place the last value into the end of the lists
    curr.next = (list1 === null) ? list2 : list1;

    return head.next;
}
sortedList(SortedList.head);