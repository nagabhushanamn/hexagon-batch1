
// console.log('in greet.js');


var en = require('./en');
var es = require('./es');


// public 
function greet(lang) {
    if (lang === 'en') {
        en();
    }
    if (lang === 'es') {
        es();
    }
}

module.exports = greet;