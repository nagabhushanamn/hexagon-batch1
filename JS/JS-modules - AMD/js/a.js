
define('js/a', ['js/b','js/c'], function (bMod,cMod) {


    bMod.doWork();
    cMod.doWork();
    
    var o = {
        doWork() {
            console.log('A work...');
        }
    };

    return o;

});