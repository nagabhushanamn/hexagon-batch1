

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im '+this.name);
    }
}

// Person('Abc',100); // never call constructor func without 'new';
var p = new Person('Abc',100);