const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
   return  new Date().getFullYear();
});

hbs.registerHelper('streamIt', (text)=>{
   return  text.toUpperCase();
});

app.get('/', (req, res)=>{
    // res.send('<h1>Hello Express nice to meet you!!</h1>')
    res.send({
       name : 'Ravishashthri',
        age : 25
    });
});
app.get('/home', (req, res)=>{
    res.render('home.hbs',{
        pageTitle : 'Home Page',
        welcomeMessage : 'Welcome to my fucking website bitch'
    });
});
app.get('/about', (req, res)=>{
    res.render('about.hbs',{
        pageTitle : 'About Page'
    });
});
app.get('/bad', (req, res)=>{
    res.send({
        status : '404 error u asshole'
    });
});


app.listen(3000);