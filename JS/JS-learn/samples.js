

// sample-1

function f(b){
  var a = 12;
  return a+b+35;
}

function g(x){
  var m = 4;
  return f(m*x); // New-context
}

g(21); // New-context


//sample-2

function foo() {
    throw new Error('i hate JS');
}
function bar() {
    foo();
}
function baz() {
    bar();
}
baz();

// sample-3

function foo() {
    foo();
}
foo();

// sample-4


function task1() {
    var i = 0;
    while (i < 10) {
        console.log('im late...');
        i++;
    }
}

function task2() {
    console.log('im quick');
}

task1();
task2();


// sample-5


/*

    <button class="a">button-1</button>
    <button class="b">button-2</button>

*/


console.log('start......');

$.on('.a', 'click', function handler1() { 
    console.log('handling click event .a elements');
});

$.on('.b', 'click', function handler2() { 
    console.log('handling click event .b elements');
});


function task1() {
    var i = 0;
    while (i < 1000) {
        console.log('im late...');
        i++;
    }
}

task1();


console.log('.........');
