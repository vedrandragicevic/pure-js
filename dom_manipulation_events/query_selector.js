let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// Get children element nodes
val = list.children;
val = list.children[1].textContent = 'Hello';

// Children of children
val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0].id;

// val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
// Parent element from a parent element
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; // Tries to get previous element from the first li item

console.log(val);