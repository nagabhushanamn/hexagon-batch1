
"use strict";

// let : keyword

// console.log(productId); // throw error
// let productId = 12;
// console.log(productId);

//-------------------------------------------


// var productId = 12;
// {
//     let productId = 123;
// }
// console.log(productId);


//-------------------------------------------


// function f() {
    
//     {
//         let i = 100;
//     }

//     //................


// }

//-------------------------------------------


// {
//     let productId = 2000;
// }
// console.log(productId);


//-------------------------------------------


// function updateFunc() {
//     productId = 123;
// }

// let productId;
// updateFunc();
// console.log(productId);

//-------------------------------------------

// let i = 100;
// for (let i = 0; i < 10; i++){
//     //...
// }
// console.log(i);

//-------------------------------------------

// var updateFuncs = [];

// for (let i = 0; i < 2; i++){
//     updateFuncs.push(function () { return i});
// }

// console.log(updateFuncs[0]());
// console.log(updateFuncs[1]());


//-------------------------------------------


// const : keyword


// ES-5

// var PI = 3.14;
// Object.defineProperty(window, 'PI', {writable:false});


// const PI = 3.14;


// const counter = {
//     doCount: function () {
        
//     },
//     getCount:function() {
        
//     }
// };


// counter = {};