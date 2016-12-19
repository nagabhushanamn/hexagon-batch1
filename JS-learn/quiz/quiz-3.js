

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log('im '+this.name);
    }

    var self = this;    
    setInterval(function () { 
        self.age++;
        console.log(self.name+"->"+self.age);
    },1000);

}


var person = new Person('Ria',0);