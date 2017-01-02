
// Blocking IO Model  ( asynchronous , via callbacks )

var fs = require('fs');

//---------------------------------------------------------

// fs.open('menu.txt', 'r', function (err, fd) {
//     if (err) throw err;
//     console.log('file opened..');
//     fs.readFile(fd, 'utf8', function (err, data) {
//         if (err) throw err;
//         console.log('file red');
//         console.log(data);
//         fs.close(fd, function () { });
//     });
// });

// console.log('do something else.....');

//---------------------------------------------------------

// simplified 

function callback(err, data) {
    if (err) throw err;
    console.log(data);
}


fs.readFile('menu1.txt', 'utf8', callback);
console.log('reading menu2.txt file also..');
fs.readFile('menu2.txt', 'utf8', callback);

//---------------------------------------------------------