

/*

A closure is a function having access to the parent scope, even after the parent function has closed.


why/where we use?

   1. to abstract public-behav of any module.
   2. while executing any func async , to access parent scoped data.

*/

function teach(sub) {
    console.log('teaching ' + sub);
    var notes = sub + " notes";
    var i = 100;
    //...
    function learn() {
        console.log('learning with '+notes);
    }
    console.log('teaching ends...');
    return learn;
}  // conhtext - destroyed

var learnFunc=teach('.js'); //  new-context with args and local


learnFunc();