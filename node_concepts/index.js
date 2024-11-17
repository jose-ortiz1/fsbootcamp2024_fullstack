const path = require('path');
const os = require('os');
const fs = require('fs')
const data = require('./module');

console.log(path.parse(__filename));
console.log('Total Memory' + os.totalmem());
console.log('Free Memory' + os.freemem());
console.log(os.hostname())

//using async function
fs.readFile('promise.js', "utf8", (error, data) => {
    if(error) console.log('Error', error);
    console.log(data);
})

//using sync function
// try {
//     const data = fs.readFileSync('promise.js', "utf8");
//     console.log(data);
// } catch(errors){
//     console.log(errors);
// }

// this is done using function
// fs.readFile('filepath', 'encoding', function(e, d){

// })

//using arrow function
// fs.readFile('filepath', 'encoding', (e, d) => {

// })

console.log(data.name);
data.hello('Sam');
// console.log(data);