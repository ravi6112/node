const expect = require ('expect');
const request = require ('supertest');
const {ObjectID}= require('mongodb');
const {app} = require ('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    'text': 'hi its first documets'
},{
    _id: new ObjectID(),
    'text':'hi its second document'
}];

beforeEach((done)=> {
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then (()=>done());
});

describe('POST /todos', ()=>{
    it('should create a new todo', (done)=>{
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text);
            })
            .end((err, res)=>{
                if (err){
                    return done(err);
                }

                Todo.find({text}).then((todos)=>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }). catch((e)=>done(e));
            });
    });
    it('should not create todo invalid body data', (done)=>{

        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res)=>{
                if (err){
                    return done(err);
                }

                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(2);
                    done();
                }). catch((e)=>done(e));
            });
    });
});

describe('GET /php', ()=>{
    it('should get all todos',(done)=> {
        request(app)
            .get('/php')
            .expect(200)
            .expect((res)=>{
            expect(res.body.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id',()=>{
   it('should return todo doc', (done)=>{
       console.log(todos[0]._id.toHexString());
      request(app)
          .get(`/todos/${todos[0]._id.toHexString()}`)
          .expect(200)
          .expect((res)=>{
          console.log(res.body.todo);
          expect(res.body.todo.text).toBe(todos[0].text)
          })
          .end(done);
   });

   it()
});