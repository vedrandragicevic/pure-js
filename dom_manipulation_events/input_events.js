const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select')

// form.addEventListener('submit', runEvent);

// Empty input field value
taskInput.value = '';

// KEYDOWN EVENT
//taskInput.addEventListener('keydown', runEvent);

// KEYUP EVENT
// taskInput.addEventListener('keyup', runEvent);

// KEYPRESS
// taskInput.addEventListener('keypress', runEvent);

// FOCUS
// taskInput.addEventListener('focus', runEvent);

// BLUR
// taskInput.addEventListener('blur', runEvent);

// CUT
// taskInput.addEventListener('cut', runEvent);

// PASTE
// taskInput.addEventListener('PASTE', runEvent);

// INPUT - anything we do with the input will fire off this event
// taskInput.addEventListener('input', runEvent);

// Change event for the select list, disable materialize.min.css from index.html to show the select list
select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // console.log(e.target.value);

    // heading.innerText = e.target.value

    // Input field values
    // console.log(taskInput.value);

    // e.preventDefault();
}