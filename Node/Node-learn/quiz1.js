


console.log('start...');

let open = false;

setTimeout(function () {
    console.log('after timeout.. setting open=true');
    open = true;
}, 2000);
 
while (!open) { 
    //...
}

console.log('after while loop');
