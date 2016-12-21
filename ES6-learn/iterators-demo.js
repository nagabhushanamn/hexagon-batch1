

// var menu = ['biryani', 'meals', 'snack'];

// console.log(Symbol.iterator in menu);

// var it = menu[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (let item of menu) {
//     console.log(item);
// }

// function food(item1, item2, item3) {
//     console.log(item1);
//     console.log(item2);
//     console.log(item3);
// }

// food(...menu);


//------------------------------------

let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8000; return {
            next() {
                let value = nextId > 8002 ? undefined : nextId++; let done = !value;
                return { value, done };
            }
        };
    }
};


// var it = idMaker[Symbol.iterator]();

// for (let id of idMaker) {
//     console.log(id);
// }


var ids = [...idMaker];
