(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){



var greet = require('./greet');

console.log('from app.js');
greet.sayHello('es');

},{"./greet":4}],2:[function(require,module,exports){


function sayHello() {
    console.log('Hello..');
}

module.exports = sayHello;
},{}],3:[function(require,module,exports){


function sayHello() {
    console.log('Ola..');
}

module.exports = sayHello;
},{}],4:[function(require,module,exports){


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
},{"./en":2,"./es":3}]},{},[1]);
