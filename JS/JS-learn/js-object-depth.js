
"use strict"

// var person = { name: 'Nag',age:32 };

// Object.defineProperty(person, "name", { configurable: false, writable: false });
// Object.defineProperties


// delete person.name;
// person.name = "praveen";

// Object.preventExtensions(person);
// Object.seal(person); // + Object.preventExtensions(person);
// Object.freeze(person);  // +  Object.seal(person); // + Object.preventExtensions(person);


// person.newProp = "new-value";
// delete person.age;
// person.age = 0;

// console.log(person.name);

//----------------------------------------------------------------

/*

    JS-objects can have 2 types of properties

    a. data properties
    b. accessor(set,get) properties

*/

var person = {
    _name: 'Nag',
    age: 32,
    set name(name) {
        if (name) {
            this._name = name;
        }
    },
    get name() {
        return this._name;
    }
};


person.name = "";  // set

console.log(person.name); // get