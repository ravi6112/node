// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("59c667d57c013f50c9c40aab")
    },{
        $set:{
            name:'Dharshi'
        },
        $inc:{
            age: +3
        }
    },{

        returnOriginal : false
        }).then((result)=>{
        console.log(result)
    });
    // db.close();
});