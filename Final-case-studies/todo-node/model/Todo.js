
var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
    id:Number,
    title: { type:String,required:true },
    completed:Boolean
});


var Todo = mongoose.model('Todo', TodoSchema, 'todos');

module.exports = Todo;