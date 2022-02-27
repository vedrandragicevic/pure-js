// WINDOW METHODS, OBJECT AND PROPERTIES

//ALERT
window.alert('Hello man!');

// PROMPT
const input = prompt();
alert(input);

//CONFIRM
if (confirm('Are you sure?')){
    console.log('YES');
} else{
    console.log('NO MAN!');
}

let val;

// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// WINDOW INFO
val = window.location;
window.location.reload();

// HISTORY OBJECT
window.history.go(-2);

// Navigator
val = window.navigator;
val = window.navigator.platform

console.log(val);