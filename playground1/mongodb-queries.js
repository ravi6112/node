const {ObjecID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =  require('./../server/models/user');

var email = 'ravishasthri@omobio.net';

if(!ObjecID.isValid(email)){
    console.log('Email is not valid');
}


User.find({
    email:email
}).then((user)=>{
    if(!user){
        console.log('email is not there');
    }
    else {
        console.log('Email', user);
    }
},(e)=>{
    console.log(e);
});










//var id ="59d9e90c70f00f7823a06972";

//validate code to users

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         console.log('Id is not found');
//     }
//     else {
//         console.log('todo by id', todo);
//     }
// });