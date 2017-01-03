

let express = require('express');

let app = express();


app.get('/', function (req, resp) {

    // resp.write('welcome');
    // resp.end();

    // or

    resp.send('Welcome to express-world');


})

app.get('/todos', function (req, resp) {
    // load all todos
    let todos = [{ title: 'Learn JS' }, { title: 'Learn Learn Node & Express' }];
    //resp.send(todos);
    resp.json(todos);
});

app.get('/person', function (req, resp) {
    var person = { name: 'Nag' };
    resp.send(person);
});

app.get('/template', function (req, resp) { 
    let templateString = `
        <div>
            <h4> Welcome to Express-world </h4>
        </div>
    `;
    resp.send(templateString);
});


app.get('/old-path', function (req, resp) { 
    //resp.redirect('new-path');
    resp.redirect(301,'new-path');
});

app.get('/new-path', function (req, resp) { 
    resp.send('Welcome to new-path');
});

app.get('/express.pdf', function (req, resp) { 
    //resp.download(__dirname+"/all-levels express.pdf"); // content-disposition
    resp.sendFile(__dirname+"/all-levels express.pdf");
});



app.listen(3000, function () {
    console.log('server/app listening at http://0.0.0.0/3000');
});