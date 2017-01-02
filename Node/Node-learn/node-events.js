

// Node ==> Event-Driven model


/*
    All objects that emit events are instances of the EventEmitter class
*/

let EventEmitter = require('events').EventEmitter;

let ee = new EventEmitter();


//--------------------------------------------------

// ee.setMaxListeners(15)

// ee.on('some-event', function () { console.log('some event handled...1');});
// ee.on('some-event', function () { console.log('some event handled...2'); });
// ee.on('some-event', function () { console.log('some event handled...3');});
// ee.on('some-event', function () { console.log('some event handled...4');});
// ee.on('some-event', function () { console.log('some event handled...5');});
// ee.on('some-event', function () { console.log('some event handled...6');});
// ee.on('some-event', function () { console.log('some event handled...7');});
// ee.on('some-event', function () { console.log('some event handled...8');});
// ee.on('some-event', function () { console.log('some event handled...9');});
// ee.on('some-event', function () { console.log('some event handled...10'); });
// ee.on('some-event', function () { console.log('some event handled...11');});


// ee.emit('some-event');

//--------------------------------------------------

// ee.once('some-event', function () { 
//     console.log('some-event handled once..');
// });

// ee.emit('some-event');
// ee.emit('some-event');

//--------------------------------------------------


// ee.on('new-user', function (err, user) { 
//     if (err) throw err;
//     console.log('new user '+user.name+' joined..');
// });


// // ee.emit('new-user', {message:'failed'},null);
// ee.emit('new-user', null, { name: 'nag' });
// ee.emit('new-user', null, { name: 'ria' });


//--------------------------------------------------


// ee.on('some-event', function () { console.log('some event handled...1');});
// ee.on('some-event', function () { console.log('some event handled...2'); });
// ee.on('some-event', function () { console.log('some event handled...3');});
// ee.on('some-event', function () { console.log('some event handled...4'); });

// ee.removeAllListeners();

// ee.emit('some-event');


//----------------------------------------------------

// let handler1 = function () {
//     console.log('some event handled...1');
// };
// let handler2 = function () {
//     console.log('some event handled...2');
// };


// ee.on('some-event', handler1);
// ee.on('some-event', handler2);

// ee.removeListener('some-event',handler1);


// ee.emit('some-event');

//----------------------------------------------------




class Door extends EventEmitter{

    open() {
        console.log('door opened...');
        this.emit('door-open');
    }
    close() {
        console.log('door closed...');
        this.emit('door-close');
    }

}

let door = new Door();

setTimeout(function () { 
    door.open();
    setTimeout(function () {
        door.close();
     },0);
}, 0);


//-------------------------------------------------


class Light{
    setUp() {
        door.on('door-open', function () {
            console.log('Light ON');
        });
        door.on('door-close', function () {
            console.log('Light OFF');
         });
    }
}

let light = new Light();
light.setUp();



class AC{
    setUp() {
        door.on('door-open', function () {
            console.log('AC ON');
        });
        door.on('door-close', function () {
            console.log('AC OFF');
         });
    }
}

let ac = new AC();
ac.setUp();

//-------------------------------------------------