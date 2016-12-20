

// es5

// function func(a,b) {
    
//     // if (!a) {
//     //     a = 0;
//     // }
//     // if (!b) {
//     //     b = 100;
//     // }

//     // or

//     a = a || 0;
//     b = b || 100
    
//     return a + b;

// }

// console.log(func(10, 10));

//----------------------------------------

// es6

function func(a=0,b=100) { 
    return a + b;

}

console.log(func(10, 10));


//----------------------------------------