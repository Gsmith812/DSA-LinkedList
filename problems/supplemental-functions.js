// Implement the following functions that operate on your linked list class. 
// Note that these should be free functions instead of methods of the linked 
// list class, so implement them outside the linked list class. Test each 
// function using the list created in exercise 1.  

// `display: displays the linked list`
// `size: returns the size of the linked list`
// `isEmpty: finds if the list is empty or not (without using the size() 
// function)`
// `findPrevious: finds the node before the item you are looking for`
// `findLast: returns the last node in the linked list`

const linkedListFunctions = {
    // displays linked list
    display: (linkedList) => {
        // Set up an array to hold our values
        listItems = [];

        // If there is no head property then it's empty or not a linked list
        if(linkedList.head === null) {
            return `Linked list is empty`;
        }

        // If head property exists, we will set up iterations on list
        if(linkedList.head) {
            linkedList = linkedList.head;
        }

        // Iterate through each item until we reach end of list
        while(linkedList.next !== null) {
            // Add items to array
            listItems.push(' - ' + linkedList.value);
            // Move to next node
            linkedList = linkedList.next;
        }
        // Push last list item to array
        listItems.push(' - ' + linkedList.value);
        // Return the array with line breaks
        return listItems.join('\n');
    },

    // size: returns the size of the linked list
    size: (linkedList) => {
        // Set a count to gather size of list and store values
        let count = 0;

        // If no head prop it is empty or not a linked list
        if(linkedList.head === null) {
            return `Linked list is empty`;
        }

        // If there is a head prop then we set up the iterations 
        if(linkedList.head) {
            linkedList = linkedList.head;
        }

        // Iterate through linked list until we reach the end
        while(linkedList.next !== null) {
            //Add items to count
            count++;
            // Move to next node
            linkedList = linkedList.next;
        }

        // Add final list item to the count
        count++;
        // Return the count
        return count;
    },

    // isEmpty: finds if the list is empty or not (without using the size() function)
    isEmpty: (linkedList) => {
        return !linkedList.head;
    },

    // findPrevious: finds the node before the item you are looking for
    findPrevious: (linkedList, node) => {
        // If head prop is null, linked list is empty or doesn't exist
        if(linkedList.head === null) {
            return `Linked List is empty`
        }

        // Set current node
        let currNode = linkedList.head;
        // Store prevNode as we move through list
        let prevNode = linkedList.head;

        // Iterate through nodes til we find match
        while(linkedList.value !== node) {
            // Return null if we reach end of list with no match
            if (currNode.next === null) {
                console.log('Item not found');
                return null;
            } else {
                //Move to next node
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
        // Return prevNode
        return prevNode;
    },

    // findLast: return the last node in the linked list
    findLast: (linkedList) => {
        // If the head prop is null then linked list is empty or doesn't exist
        if(linkedList.head === null) {
            return `Linked List is empty`;
        }

        // Set current head node
        let tempNode = linkedList.head;

        // Iterate through list til we reach end
        while(tempNode.next !== null) {
            // Set node as last node
            tempNode = tempNode.next;
        }
        // Return node
        return tempNode;
    },
}