



let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../app');

let Todo = require('../model/Todo');

chai.use(chaiHttp);


// clean database before tests

describe('Todos', () => {
    beforeEach((done) => {
        Todo.remove({}, (err) => {
            done();
        });
    });



    /*
        Test the GET: /todos route
    */

    describe('GET: /todos', () => {

        it('it should GET all the todos', (done) => {

            chai.request(server)
                .get('/todos')
                .end((err, resp) => {
                    resp.should.have.status(200);
                    resp.body.should.be.a('array');
                    resp.body.length.should.be.eql(0);
                    done();
                });

        });

    });


    describe('POST: /todos', () => {

        it('shud not POST a todo without title', (done) => {

            let newTodo = {
                completed: false
            };

            chai.request(server)
                .post('/todos')
                .send(newTodo)
                .end((err, resp) => {
                    resp.should.have.status(406);
                    resp.body.should.have.property('message');
                    resp.body.should.have.property('message').eql('Title is missing');
                    done();
                });

        })

    })


    describe('POST: /todos', () => {

        it('shud  POST a todo valid fields', (done) => {

            let newTodo = {
                title: 'Learn Mocha',
                completed: false
            };

            chai.request(server)
                .post('/todos')
                .send(newTodo)
                .end((err, resp) => {
                    resp.should.have.status(201);
                    done();
                });

        })

    })

});