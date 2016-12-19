
function startSession() {
    
    function Trainer(name){
        this.name = name;
        this.doteach=function () {
            console.log(this.name + " teaching .js");
            var notes = "......";
            var self = this;        
            function learn() {
                console.log(this.name+' learning .js from '+self.name);
            }
            return learn;
        }
    };

    var trainer1 = new Trainer('Nag'); // constructor invocation
    var learnFunc=trainer1.doteach();  // method invocation


    var emp1 = { name: 'Intergraph' };
    var emp2 = { name: 'hexagon' };

    learnFunc.call(emp1);  // call/apply/bind invocation
    learnFunc.call(emp2);



}


startSession(); // function invocation