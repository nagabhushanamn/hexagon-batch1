


var updateFuncs = [];

// function createFunc(i) {
//    return function () { return i}
// }

for (var i = 0; i < 2; i++) {
    updateFuncs.push(
        function (i) {
            return function () { return i }
        } (i)
    );
}

console.log(updateFuncs[0]()); // 0
console.log(updateFuncs[1]()); // 1