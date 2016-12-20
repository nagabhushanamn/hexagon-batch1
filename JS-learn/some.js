

function f1() {
    function f2() {
        console.log(this.myname);
        console.log(myname);
    }
    f2(); // f2-context ==> f1-context
}

f1();  // f1-context ==> global-context