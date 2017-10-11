var express = require('express');
var bodyParser = require('body-parser')

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

const port = process.env.PORT || 3000;

var app = new express();
app.get('/', (req,res)=>{
    res.send('Hello Node babe');
});
app.use (bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(400).send(e);
    });

});

app.post('/php', (req, res)=>{
    var php = new User({
        email: req.body.email
    });

    php.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/php', (req, res)=>{
   Todo.find().then((doc)=>{
      res.send(doc);
   }, (e)=>{
       res.status(400).send(e);
   });
});


app.get('/todos/:id', (req , res)=>{
    var id = req.params.id;
    console.log(id);
    if (!ObjectID.isValid(id)){
        return res.status(404).send('This 404 error');
    }
    Todo.find({
        _id : id
    }).then((todo)=>{
        if(!todo){
            return res.status(404).send('Sorry No Id');
        }
        console.log(todo);
        res.send({todo});
    }).catch((e)=>{
        console.log(e);
    });
});

app.listen(port,()=>{
    console.log(`started on port ${port}`);
});

module.exports = {app};
