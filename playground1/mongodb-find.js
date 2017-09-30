// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').find({
    //     "_id" : new ObjectID("59c667d57c013f50c9c40aab")
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to find Todos doc', err);
    // });



    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count : ${count}`);
    // },(err)=>{
    //     console.log('Unable to find Todos doc', err);
    // });

    db.collection('Todos').find({ name : 'Pema Yangchen'}).toArray().then((docs)=> {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err)=>{
        console.log('Unable to connect todos', err);
    });
    // db.close();
});