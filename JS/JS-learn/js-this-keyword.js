


/*

 this ==> owner of current execution-context.

 imp note:  to read/write any obj's property in func , we need reference

*/

// why we need 'this' keyword ?

// var person = {
//     name: 'Nag',
//     sayName: function () {
//         //console.log('im '+name); // will read context's name
//         //console.log('im '+person.name); // will read person's name
//         console.log('im '+this.name);
//     }
// };
// person.sayName();


// var p = person;
// person = {name:'Ria'};

// p.sayName();

//-------------------------------------------------------------------


// var p1 = { name: 'Nag', sayName: function () { console.log('im ' + this.name); } };
// var p2 = { name: 'Ria', sayName: function () { console.log('im ' + this.name); } };


// function sayNameForAll() {
//     console.log('im '+this.name);
// }

// static function binding
// var p1 = { name: 'Nag', sayName: sayNameForAll };
// var p2 = { name: 'Ria', sayName: sayNameForAll };

// sayNameForAll();  // im ??   // function-invocation  ( context owned by global-obj , this ==> global-obj)
// p1.sayName();     // im Nag  // method invocation    ( context owned by invoker-obj, this ==> invoker-obj)
// p2.sayName();     // im Ria

//-------------------------------------------------------------------



// third-party team
var greetService = {
    sayName: function (message,from) {
        console.log(message+ ' im '+this.name +": "+from);
    }
};


// our team
var p1 = { name: 'Nag' };
var p2 = { name: 'Ria' };


// with dynamic function binding

// way-1 ( for individial args)
// greetService.sayName.call(p1,"Hello","HYD");
// greetService.sayName.call(p2,"Hi","CHN");


// way-2 ( for array args)
// greetService.sayName.apply(p1,["Hello","HYD"]);
// greetService.sayName.apply(p2,["Hi","CHN"]);

// way-3 ( to execute function on event i.e bind now and execute later)
// var newF = greetService.sayName.bind(p1);

// // on event
// newF("Dude",'Universe');


//-------------------------------------------------------------------


// 1000+ person objs

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im '+this.name);
    }
}

var p1 = new Person('Nag', 32);  // constructor invocation ( context owned by new-obj , this ==> new-obj)
var p2 = new Person('Ria', 1);


//-------------------------------------------------------------------

// in JS-lan , we can invoke functions in 4 ways


/*

    1. function-invocation         ( this ==> global-obj)
    2. method-invocation           ( this ==> invoker-obj)
    3. constructor-invocation      ( this ==> new-obj)
    4. call/apply/bind -invocation ( this ==> arg-obj)


*/

//-------------------------------------------------------------------

