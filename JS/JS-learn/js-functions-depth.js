

/**
 *
 *  we can create function-objs in 2 ways
 *
 *  a. function declerations
 *
 *     --> always get hoisted function-obj at context-creation phase.
 *
 *    when to use?
 *    --> to create function-obj at contect-creation phase.
 *
 *
 *  b. function expressions
 *
 *   when to use?
 *    --> to create function-obj at contect-execution phase. ( based on event,input,condition)
 *
 *
 */


// 1. function declerations ( Named functions )

// console.log(add(12,13));  // 'add'' function already hoisted with function-obj. it works
// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(12,13));

//-----------------------------------------------

// 2. function expressions ( anonymous functions )

// console.log(add(12,13)); // 'add'' function  hoisted with undefined. it will not works
// var add = function(n1,n2) {
//     return n1 + n2;
// }
// console.log(add(12,13));

//-------------------------------------------------



// functions as values:

// function sayHello() {
//     console.log('Hello...');
// }

// var sayHi = sayHello;  // as value
// sayHi();


// functions as args :

// function greet(f) {
//     if (f) {
//         f();
//         return;
//     }
//     console.log('Hello...');
// }

// greet();
// greet(function () { console.log('ola..'); });

// // e.g

// var arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// // arr.sort();
// arr.sort(function (a, b) { return a - b; });
// console.log(arr);


// function as return-value

// function teach() {
//     var notes = "js-notes";
//     var learn=function() {
//         console.log('learning '+notes);
//     }
//     //learn();
//     return learn;
// }

// var learnFunc = teach();
// learnFunc();
// learnFunc();


//------------------------------------------------


// function reflect() {
//     console.dir(arguments);
//     return arguments[0];
// }

// console.log(reflect(12,13,14));

//------------------------------------------------

// can we overload functions ?

// function eat() {
//     console.log('nothing to eat...');
// }
// var eat = new Function('.....');

// function eat(food) {
//     if (arguments.length === 0) {
//         console.log('nothing to eat...');
//         return;
//     }
//     console.log('eating...'+food);
// }
// // var eat = new Function('.....');

// eat('biryani');

//------------------------------------------------
