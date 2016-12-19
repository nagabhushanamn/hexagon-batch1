
"use strict"


/**
 *
 *  Execution Context:
 *
 *   memory with given arg and local variables to execute instructions.
 *
 *
 *   context - 2 phases
 *
 *   a. creation-phase
 *
 *      --> all variables declared any-where in program, will get hoist(lifting-up)
 *          to top with default value ( undefined )
 *
 *   b. execution-phase
 *
 *      --> will execute context's instruction in sequence.
 *
 *   
 *  imp note:
 *
 *    by default every JS-runtime has one global-context and global-obj,
 *    will be created at begining.
 *
 *    global-obj
 *
 *    browser envi ==> window
 *    node envi    ==> process
 
 *    --------------------------------------------
 *
 *    imp note:
 *
 *    every function-invocation also
 *    created new-context which is child of above context.
 *    
 *    bt default every-context will use its own-data
 *    else look into parent ( chaining upto global-context)
 *   
 *   --------------------------------------------
 *
 *   best-practive : to avoid histing confuse, always declare variables
 *                   at top.
 *
 *   --------------------------------------------
 */



var v = 12;

function f1() {
    //var v = 13;
    function f2() {
        //var v = 14;
        console.log(v);
    }
    //f2(); // f2-context ==> f1-context
    var v = 13;
    return f2;
}

var f2FuncRef = f1(); // f1-context ===> global-context
f2FuncRef(); // // f2-context ==> f1-context




// Quiz-1

// function f() {
//     // block
//     {
//         var v = 100;
//     }
//     console.log(v);
// }

// f();





// Quiz-2

function ff() {
    "use strict"
    kk = 100;  // will throw error in 'strict-mode'
}
ff();
console.log(kk);



// avoid writing variables without 'var' keyword

// best practice : always write code for 'strict-mode';