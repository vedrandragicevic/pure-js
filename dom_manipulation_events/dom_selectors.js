// SELECTORS
// Get element by id
console.log(document.getElementById('task-title'));

console.log(document.getElementById('task-title').id);

// // Change styling
document.getElementById('task-title').style.background = '#333'
document.getElementById('task-title').style.color = '#fff'
// Hide it
// document.getElementById('task-title').style.display = 'none'

// Change content
document.getElementById('task-title').textContent = 'Task List'
document.getElementById('task-title').innerText = 'My tasks'
document.getElementById('task-title').innerHTML = '<span> TASK LIST</span>'

const taskTitle = document.getElementById('task-title');

taskTitle.innerHTML = '<span style="color:red">AGSAGAGASG </span>'


// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'HEY MAN';


// Get elements by class name
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'black';
items[3].textContent = 'Hello Vexify'

const list_items = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(list_items);

// Get elements by tag name
let tag_items = document.getElementsByTagName('li');
console.log(tag_items);

// Convert HTML item into array
lis = Array.from(tag_items);
lis.reverse()

lis.forEach(function(li, index){
  console.log(li);
  li.textContent = `${index}: Hello`;
})
console.log(lis)


// Query selection all
const items_second = document.querySelectorAll('ul.collection li.collection-item');

items_second.forEach(function(item, index){
  item.textContent = `${index}: Hello`;
})
console.log(items_second);