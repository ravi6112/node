var express = require('express');
var bodyParser = require('body-parser')


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = new express();
app.get('/', (req,res)=>{
    res.send('Hello Node babe');
});
app.use (bodyParser.json());

// app.post('/todos',(req,res)=>{
//     var todo = new Todo({
//         text: req.body.text
//     });
//
//     todo.save().then((doc)=>{
//         res.send(doc);
//     }, (e)=>{
//         res.status(400).send(e);
//     });
//
// });

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



app.listen(3000,()=>{
    console.log('started on port 3000');
});

module.exports = app;