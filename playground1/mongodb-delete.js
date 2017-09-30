// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB server');
    // deleteMany
    // db.collection('Todos').deleteMany({ name : 'ravishasthri'}).then((result)=>{
    //    console.log(result);
    // });


    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Something to do'}).then ((result)=>{
    //    console.log(result);
    // });

    //findanddelete
        db.collection('Todos').findOneAndDelete({ _id :new ObjectID("59c64713e99d38306e44637d")}).then((result)=>{
            console.log(result);
        });

    // db.close();
});