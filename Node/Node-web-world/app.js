

var express = require('express');
// var logger = require('./middlewares/logger');
var morgan = require('morgan');
var bodyParser = require('body-parser')

var app = express();

// app.get("/", function (req, resp) {
//     resp.sendFile(__dirname + "/public/index.html");
// });

// app.get("/css/bootstrap.css", function (req, resp) {
//     resp.sendFile(__dirname + "/public/css/bootstrap.css");
// });

// app.use(logger); // mounting custom-logger-middleware
app.use(morgan('dev'));
app.use(express.static('public')); // mounting built-in middleware
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
// app.use(bodyParser.json())



// app.get("/todos", function (req, resp, next) { 
//     var todos = ['Learn JS', "learn Node","Learn Express","Learn Life"];
//     let count = req.query.count;
//     if (count > 0) {
//         resp.json(todos.slice(0,count));

//     } else {
//         resp.json(todos);
//     }
// });


// app.param("id", function (req, resp, next) {
//     req.id = req.params.id;
//     next();
// });


// // GET /todos/1

// app.get('/users/:id', function (req, resp, next) {
//     //
//     resp.send('user ' + req.id);
// });

// app.get('/users/:userId/todos/:todoId', function (req, resp, next) {
//     //
//     resp.send('returning users todos');
// });

// app.get('/todos/:id', function (req, resp) {

//     var todos = {
//         '1': {
//             title: 'Learn JS'
//         },
//         '2': {
//             title: 'Learn Life'
//         }
//     }
//     //var todoId = req.params.todoId;

//     if (todos[req.id]) {
//         resp.json(todos[req.id]);
//     } else {
//         // console.log('No todo');
//         resp.status(404).json('No todo');
//     }
// });

//--------------------------------------------------------


app.post('/todos', bodyParser.urlencoded({ extended: false }),bodyParser.json(),function (req, resp) {
    resp.send(req.body);
});


//--------------------------------------------------------

app.listen(3000, function () {
    console.log('listening on 3000');
});