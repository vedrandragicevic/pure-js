/*
document.querySelector('.clear-tasks').addEventListener('click',
function(e){
console.log('Hello world');
e.preventDefault();
}
)
*/

// Arrow function
/*
document.querySelector('.clear-tasks').addEventListener('click',
(e) => {
console.log('Hello world');
e.preventDefault();
}
)
*/

document.querySelector('.clear-tasks').addEventListener('click', onClick);
// document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

// e = element
function onClick(e){
    // console.log('HELLO MAN!');

    let val;

    // Target element
    val = e.target;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello man!';

    // Event type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    console.log(val);
}