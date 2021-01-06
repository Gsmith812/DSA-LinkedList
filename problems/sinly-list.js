// Write a function main. Within the function, using the linked list class 
// above, create a linked list with the name SLL and add the following items 
// to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
// Add Tauhida to the list.
// Remove Husker from the list.
// Implement a function called insertBefore() in the class that inserts a new 
// node before a given node containing a key.
// Implement a function called insertAfter() in the class that inserts a new 
// node after a node containing the key.
// Implement a function called insertAt() that inserts an item at a specific 
// position in the linked list.
// Add Athena before Boomer using your insertBefore() function.
// Add Hotdog after Helo using the insertAfter() method.
// Using the insertAt() method insert Kat in the 3rd position of the list.
// Remove Tauhida from the list.

const LinkedList = require('../linked-list');

const main = () => {
    // Create new instance of linked list
    const SLL = new LinkedList;
    // Add list of items to linked list
    let initialItems = ['Apollo','Boomer','Helo','Husker','Starbuck'];
    initialItems.map(item => SLL.insertLast(item));
    // Add Tauhida to end of the list
    SLL.insertLast('Tauhida');
    // Remove Husker from list
    SLL.remove('Husker');
    // Add Athena before Boomer with insertBefore()
    SLL.insertBefore('Athena', 'Boomer');
    // Add Hotdog after Helo with insertAfter()
    SLL.insertAfter('Hotdog', 'Helo');
    // Insert Kat at 3rd index with insertAt()
    SLL.insertAt('Kat', 3);
    // Remove Tauhida from the list
    SLL.remove('Tauhida');
}

main();