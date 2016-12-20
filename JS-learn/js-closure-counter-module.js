

function init() {
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

}

var counter = init();