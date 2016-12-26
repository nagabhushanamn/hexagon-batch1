


// IIFE ( Immediatly Invokable Function Expression ) / self executable function


var counter=(function () {

    var count = 0; // private
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }
    function inner() {

    }
    // public
    return {
        doCount: doCount,
        getCount: getCount
    };

})();