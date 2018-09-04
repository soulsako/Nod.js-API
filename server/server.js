const express = require('express');
const { mongoose } = require('./mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const app = express();
// const id = '5b8d18e1804fad3798ac9f70';

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/todos/:id', (req, res) => {

    const id = req.params.id;
    if(!ObjectID.isValid(id)){
    res.status(404).send(`${id} is not recognised`);
    }
    Todo.findById(id).then(doc => {
        if(doc){
            res.status(200).send(doc);
        }else {
            res.status(400).send(`No documents found with the id ${id}`);
        }
        
    });
});

app.get('/', (req, res) => {

    Todo.find().then(docs => {
        res.status(200).send(docs);
    }, error => {
        res.status(400).send(error);
    });
});

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

app.listen(port, () => {
    console.log(`port running on ${port}`);
});




