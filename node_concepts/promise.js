const deepika = require('./module')

const promise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve('Money is returned')
        reject(new Error("I don't have the money"))
    }, 1000)
});

promise.then((data) => {
    console.log('Coming in the then condition')
    console.log(data);
}).catch((error) => {
    console.log('Coming in the catch condition')
    console.log(error);
})

console.log(deepika.name);
console.log(deepika.hello('Deepika'))