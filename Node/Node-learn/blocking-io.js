

// Blocking IO Model  ( synchronous )

/*
    // open file , get file description
    // read file , assign to variable
    // disply in console

    // do something else

*/



let fs = require('fs');

// step-1
let fd = fs.openSync('menu.txt', 'r');//..............blocks
console.log('file opened...');

// step-2
let data = fs.readFileSync(fd, 'utf8');//..................blocks
console.log('red file data');
console.log(data);

console.log('do something else...');
