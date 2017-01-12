

// using DOM API

// document.addEventListener('DOMContentLoaded', function (e) {

//     console.log('DOM ready');

//     let boxEle = document.querySelector('.jumbotron');
//     let hideBtn = document.querySelector('button.btn-danger');
//     let showBtn = document.querySelector('button.btn-primary');

//     // register event-listeners
//     hideBtn.addEventListener('click', function (e) {
//         boxEle.style.display = 'none';
//     });
//     showBtn.addEventListener('click', function (e) {
//         boxEle.style.display = '';
//     });

// });

//------------------------------------------------------------------------

/*

    formula to use jQuery library

    $(selector).action1().action2();

*/

$(document).ready(function () {

    let $boxEle = $('.jumbotron');
    $('button.btn-danger').click(function () {
        $boxEle.hide(5000);
    });
    $('button.btn-primary').click(function () {
        $boxEle.show(5000);
    });


});


//------------------------------------------------------------------------

// using DOM

// data-binding ( plain js)

// var inpField = document.getElementById('inpField');
// var loadBtn = document.getElementById('loadBtn');
// var resetBtn = document.getElementById('resetBtn');
// var spanEle = document.getElementById('spanEle');
// // ViewModel
// var user = {
//     name:''
// };
// function applyBinding() {
//     inpField.value = user.name;
//     spanEle.innerHTML = user.name;
// }
// applyBinding();
// loadBtn.addEventListener('click', function () {
//     // send AJAX req.
//     user.name = "Nagabhushanam";
//     applyBinding();
// });
// resetBtn.addEventListener('click', function () {
//     // send AJAX req.
//     user.name = "";
//     applyBinding();
// });
// inpField.addEventListener('keyup', function () { 
//     user.name = this.value;
//     applyBinding();
// });

//------------------------------------------------------------------------

// using jQuery ( almost similar above)

//------------------------------------------------------------------------

// using knockout  ( data-binding )


// ViewModel
function User(name) {
    var self = this;
    this.name = ko.observable(name);
    this.load = function () {
        self.name('Nagabhushanam');
    }
    this.reset = function () {
        // load name from server..
        self.name('');
    }
}
var vm = new User('Nag');
ko.applyBindings(vm, document.getElementById('ko_box'));

//------------------------------------------------------------------------


// using NG  ( data-binding )

var mod = angular.module('demo', []);
mod.controller('UserController', function ($scope) {
    $scope.name = '';
    $scope.load = function () {
        $scope.name = 'Nagabhushanam';
    }
    $scope.reset = function () {
        $scope.name = '';
    }
});