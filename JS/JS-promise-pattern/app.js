

var teachBtn = document.getElementById('teachBtn');


var hotel = {
    getFood() {
        var promise = new Promise(function (resolve, reject) {
            // preparing food......
            setTimeout(function () { 
                resolve('biryani...');
                //reject('no biryani');
            },5000);
        });
        return promise;
    }
};


var hotel2 = {
    getFood() {
        var promise = new Promise(function (resolve, reject) {
            // preparing food......
            setTimeout(function () { 
                resolve('other food...');
                //reject('no biryani');
            },10000);
        });
        return promise;
    }
};


teachBtn.addEventListener('click', function (e) {

    console.log('teaching start.....');
    console.log('feels hungry..requesting food');
    var promise1 = hotel.getFood(); // asynch call
    var promise2 = hotel2.getFood(); // asynch call
    console.log('got promise, deferring actions to future');
    
    var newPromise=Promise.all([promise1,promise2]).then(function (results) { 
        console.log('yummy ' + results);
        //return "half-biryani";
    }, function (error) { 
        console.log('oops - '+error);
    }).catch(function () {
        //...
    })
    
    
    newPromise.then(function (result) { 
        console.log(result);
    });
    


    console.log('further teaching..... ends');

})