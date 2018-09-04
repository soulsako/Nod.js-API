const express = require('express');
const { mongoose } = require('./mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        console.log(doc);
    }, err => {
        console.log(err);
    });
    
});

app.listen(3000);




