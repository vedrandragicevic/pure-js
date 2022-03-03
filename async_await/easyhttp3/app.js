const http = new EasyHttp;

// Get Users
/*
const users = http.get('https://api.github.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));
*/

const data = {
    fullName: 'john Vex124',
    username: 'vexify',
    email: 'vexic@gmail.com'
}

// POST
/*
const users = http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(error => console.log(error));
*/


// PUT
/*
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error));
*/


/*
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log('DELETED'))
.catch(error => console.log(error));
*/

// ES6 DESTRUCTING
const {fullName, username, email} = data;
console.log(fullName, username);