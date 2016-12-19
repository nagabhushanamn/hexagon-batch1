


var teachBtn = document.getElementById('teachBtn');

var trainer = {
    name:'Ria'
};

var trainerService = {
    doTeach: function () {
        console.log(this.name+' teaching .js');
    }
};

// teachBtn.addEventListener('click',trainerService.doTeach);

// teachBtn.addEventListener('click', function () {
//     trainerService.doTeach.call(trainer);
// });

// or

teachBtn.addEventListener('click', trainerService.doTeach.bind(trainer));
