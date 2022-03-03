/*const sayHello = function() {
    console.log('HELLO');
}
*/

/*
const sayHello = () => {
    console.log('HELLO');
}
*/


// ONE LINE FUNCTION DOES NOT NEED BRACES
// const sayHello = () => console.log('HEY');

// ONE LINE RETURNS
// const sayHello = () => 'Hello';


// OBJECT LITERAL
// const sayHello = () => ({msg: 'hey'});


// SINGLE PARAM DOESN'T NEED PARANTHESIS
// const sayHello = (name) => console.log(`Hello ${name}`);


// const sayHello = (name, lastName) => console.log(`Hello ${name} ${lastName}`);

// sayHello('Vexify', 'Kico');




const users = ['Vex', 'John', 'Sam'];
/*
const nameLengths = users.map(function(name) {
    return name.length
});


// SHORTER SYNTAX
const nameLengths = users.map((name) => {
    return name.length
});
*/

// SHORTEST
const nameLengths = users.map(name => name.length);

console.log(nameLengths);