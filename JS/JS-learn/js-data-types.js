

/*

    imp Note : all data types are dynamic ( loosly typed )

    types of data-types

    a. simple / primitives ==> simple values

       string
       nummber
       boolean
       null
       undefined

       symbol ( es6 )

    b. complex / reference ==> objects

*/

//-------------------------------------------------------------

// primitives


// 1. string
var name = "Nag";
var selection = 'a';

// 2. numbers

var count = 10;
var cost = 12.12;

// 3. boolean

var found = false;

// imp-note : falsy-values ==> false,0,"",null,undefined,NAN
// ref : https://dorey.github.io/JavaScript-Equality-Table/


// 4. undefined

var v;

// 5. null

var person = null;

//-------------------------------------------------------------


// reference types ==> objects

/*

    object ==> collection of key(property):value pair of any entity.

    how to create object in js-lang ?

    syntax:

    var ref=new ConstructorFunction();

    e.g

    Object
    Array

    var arr=new Array();

*/

var person = new Object(); // create one obj-wrapper.

// imp note : js-objs are extensible & configurable by default.

person.name = 'Nag';
person.age = 32;
person.sayName = function () {
    console.log('im .....');
}

delete person.age;

//--------------------------------------------


// literal style objects


// 1. Object


var person = new Object(); // obj wrapper
person.name = 'Nag';
person.age = 32;
person.sayName = function () {
    console.log('im .....');
}

// or literal style

var person = {
    name: 'Nag',
    age: 32,
    sayName: function () {
        console.log('im .....');
    }
};


// 2. Array

var arr = new Array();
arr.push('biryani');
arr.push('andra-meals');
arr[2] = 'snack';
// or
var arr = ['biryani', 'andra-meals'];
arr.push('beer');
arr[2] = 'wine';



// 3. RegExp
var ssn = new RegExp("\\d{3}-\\d{2}-\\d{4}");

// or

var ssn=/\d{3}-\d{2}-\d{4}/;


// imp note : in JS-lang , every func is an object behind. it can have props and methods

// 4. Function
//var add = new Function("n1", "n2", "var result=n1+n2;return result;");

// or

function add(n1,n2) {
    var result = n1 + n2;
    return result;
}

add.num1 = 0;
add.num2 = 0;
add.m = function () {
    //..
}

//----------------------------------------------------


// how to acess obj's properties

var person = { name: 'Nag','full-name':'Nagabhushanam N' };

// '.' notation if property is valid identifier

// person.name = 'New Nag';
// console.log(person.name);

// else use '[]' notation
person['full-name'] = ".......";
console.log(person['full-name']);




