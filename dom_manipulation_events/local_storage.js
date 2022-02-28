// SET LOCAL STORAGE ITEM
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// SESSION STORAGE
// sessionStorage.setItem('name', 'Beth');

// REMOVE FROM STORAGE
// localStorage.removeItem('name');

/*
const nameFirst = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(nameFirst);
console.log(age);

localStorage.clear(name, age);
*/

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else{
        tasks= JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('task saved');

    e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
})