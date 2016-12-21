

//"use strict"

/*

    syntax:
    
    input => body

*/

// var getPrice = () => 100.00;
// var getPrice = () => { return 100.00};
// var getPrice = (price) => { return price };
// var getPrice = (count,price) => { return count*price };
// var getPrice = (count, price) => count * price;


//----------------------------------------------------

// why we need ?

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     // var self = this;
//     // setInterval(function () { 
//     //     self.age++;
//     //     console.log(self.age);
//     // },1000);

//     setInterval(() => { this.age++ , console.log(this.age) }, 1000);
// }

// var p = new Person('Ria', 0);


//----------------------------------------------------

// var teachBtn = document.getElementById('teachBtn');
// teachBtn.addEventListener('click', function () { 
//     console.log(this);
// })

// teachBtn.addEventListener('click', () => { 
//     console.log(this);
// })

//----------------------------------------------------



// var trainer = {
//     name:'Nag',
//     teach: function () {
//         console.log(this.name +" teaching .js");
//         // function learn() {
//         //     console.log("learning js from "+this.name);
//         // }
//         //var learn = () => { console.log("learning js from " + this.name); }
//         return learn;
//     }
// };

// var learnFunc = trainer.teach();

// var emp = { name: 'Hexagon' };
// learnFunc.call(emp);


//------------------------------------------------------




var hexagon = {
    projectName: 'Abc',
    doProject: function () {
        // var workFunc = function () {
        //     console.log("working on " + this.projectName);
        // }
        return () => { console.log("working on " + this.projectName); };
        return workFunc;
    }
};

var workFunc = hexagon.doProject();
var fakeComp = { projectName: 'Fake-Prokect' };
workFunc.call(fakeComp);
