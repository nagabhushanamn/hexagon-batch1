

// sync stream processing...

var arr = [1, 2, 3, 4];
arr .map(x => x * 2)
    .filter(x => x > 5)
    .forEach(function (x) { console.log(x)});


//------------------------------------------

// Rx.Observable.from([1, 2, 3, 4, 5])
//     .map(x => x * 2)
//     .filter(x => x > 5)
//     .subscribe(x=>console.log(x));


//--------------------------------------------

// const input = $('#inp');

// var obervable = Rx.Observable.fromEvent(input, 'keyup');

// obervable.subscribe(() => {
//     console.log('keyup....');
// });

//--------------------------------------------


// const observable=Rx.Observable.create((observer) => { 

//     setInterval(function () {
//         observer.next('hello..'); // event...
//      },2000);

// });


// observable.subscribe((value) => { 
//     console.log(value);
// });


//--------------------------------------------



var observable = Rx.Observable.range(1, 10)
    .map(x => {
        // if (x === 5) {
        //     throw new Error('Something Went Wrong');
        // } else {
        //     return x; // event
        // }
        return x;
    })
    .filter(x=>x>20);



observable.subscribe(function (result) {
    console.log(result);
}, function (error) {
    console.log(error);
}, function (message) {
    console.log('done...');
});