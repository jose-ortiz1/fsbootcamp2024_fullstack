class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

var p: Person = new Person("Jose","Ortiz");
var p2: Person = new Person("Laura","Pacheco");
var p3: Person = new Person("Sam","Lopez");
var p4: Person = new Person("Rick","Was");


var full_name = p.fullName();
// var full_name_p2 = p2.fullName();
// var full_name_p3 = p3.fullName();
// var full_name_p4 = p4.fullName();

console.log(p);
console.log(full_name);
// console.log(full_name_p2);
// console.log(full_name_p3);
// console.log(full_name_p4);



class Male extends Person {
    age: number;

    constructor(firstName: string, lastName: string, age: number){
        super(firstName, lastName);
        this.age = age;
    }
    
}

var home = new Male('Pepito','Perez',30);
console.log(home.fullName());