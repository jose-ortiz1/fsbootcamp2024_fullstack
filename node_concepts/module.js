const name = "Harsh";

function hello(name){
    console.log('Hello ' + name);
}

module.exports.name = name;
module.exports.hello = hello;

console.log(module);