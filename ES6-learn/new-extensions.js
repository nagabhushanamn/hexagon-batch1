

var person = {
    name: 'Nag',
    age:32
};
Object.defineProperty(person, 'age', {enumerable:false});

var comp = {
    cname:'hexagon'
};


var details = {};

Object.assign(details, person, comp);

console.log(details);




// for (let prop in person) {
//     console.log(prop);
// }

