// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed : false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined,2));
    //});
   //insert name, age, location
   //  db.collection('Todos').insertOne({
   //      name: 'ravishasthri',
   //      age: 25,
   //      location : 'pussellawa'
   //  }, (err, result)=>{
   //      if(err){
   //          return console.log('Unable to insert todo', err);
   //      }
   //      console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
   //  });
    db.close();
});