

var es = require('./es');
var en = require('./en');

// console.log('hello');

function internal() {

}

function sayHello(lang) {
    if (lang === 'en') {
        en();
        return;
    }
    if (lang === 'es') {
        es();
        return;
    }
    console.log('welcome');
}


// function sayName() {
//     console.log('im Nag..');
// }

// function sayAge() {
//     console.log('im ..');
// }

// module.exports.sayName = sayName;
// module.exports.sayAge = sayAge;

// module.exports = {
//     sayName: sayName,
//     sayAge:sayAge
// };

module.exports = {
    // sayName,
    // sayAge,
    sayHello
};