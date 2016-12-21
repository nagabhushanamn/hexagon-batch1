




// var o = {
//     doWork() {
//         console.log('A work...');
//     }
// };

(function () {

    var private = {};

    hexagon.b.doWork();
    hexagon.c.doWork();

    var o = {
        doWork() {
            console.log('A work...');
        }
    };

    hexagon.a = o;

})();
