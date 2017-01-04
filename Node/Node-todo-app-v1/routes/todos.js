var express = require('express');
var router = express.Router();

var Todo = require('../model/Todo');

router.route('/')
    .get(function (req, resp, next) {
        Todo.find({}, function (err, todos) {
            if (err) next(err);
            resp.json(todos);
        });
    })
    .post(function (req, resp, next) {
        var newTodo = new Todo(req.body);
        newTodo.save(function (err, todo) {
            if (err) { resp.status(406).json({ message: 'Title is missing' }) }
            resp.status(201).json(todo);
        });
    });


router.route('/:id')
    .all(function (req, resp, next) {
        req.id = req.params.id;
        next();
    })
    .delete(function (req, resp, next) {
        Todo.remove({ _id: req.id }, function (err, result) {
            if (err) next(err);
            resp.status(200).json(`todo has deleted`);
        })
    })
    .put(function (req, resp) {
        Todo.findOneAndUpdate({ _id: req.id }, req.body, function (err, todo) {
            if (err) next(err)
            resp.status(200).json(todo);
        })
    });



router.delete('/clear-completed', function (req, resp, next) {
    Todo.remove({ completed: true }, function () {
        resp.status(200).send('success');
    })
})
router.put('/complete-all', function (req, resp, next) {
    var status = req.query.status;
    Todo.update({}, { completed: status }, function () {
        resp.status(200).send('success');
    })
});

module.exports = router;