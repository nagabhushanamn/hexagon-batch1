

var assert = require('assert');

describe('tes suite', function () {

    // it('shud be true', function () {

    // })
    // it('shud be false', function () {

    // })
    // it('shud be null', function () {

    // })

    describe('Synch func test..', function () {
        describe('#indexOf()', function () {
            it('should return -1 when the value is not present', function () {
                assert.equal(-1, [1, 2, 3].indexOf(4));
            });
        });
    });

     describe('Asycnh func Test..', function () {
        describe('timeout action', function () {
            it('should return after timeout', function (done) {
                setTimeout(function () { 
                    //..
                    done();
                },5000);
            });
        });
    });

});