

// ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im '+this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im '+this.age);
// }

// var p1 = new Person('Nag',32);

// ES6

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log('im '+this.name);
    }
    sayAge() {
        console.log('im '+this.age);
    }
}

var p1 = new Person('Nag', 32);


class Employee extends Person{
    
}