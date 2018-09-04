const mongoose = require('mongoose');

const Todo = mongoose.model('todo', {

    text: {
        type: String
    }, 
    completed: {
        type: Boolean, 
        default: false
    }
});

module.exports.Todo = Todo;