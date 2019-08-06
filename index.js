var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.get('/', (req,res,next)=>{
    res.json('Hello World');
});

app.get('/cats/:name', (req,res,next)=>{
    var name = req.params.name;

    res.render('first', {
      content: 'Meow',
      name: name,
      showHello: 5
    });
});

app.get('/dogs', (req, res, next) => {
  res.render('first', {
    content: 'ruff',
    showHello: 0,
    name: 'Ernest'
  });
});

app.get('/cats_and_dogs', (req,res,next) => {
    res.json('living together');
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});