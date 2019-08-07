var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();
var dogData = require('./app/data/animals.json');

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static(path.join(__dirname, "public")));

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
  var dogNum = Number(req.query.num) - 1;
  var dog = dogData[dogNum];

  res.render('pets', {
    name: dog["name"],
    description: dog["description"],
    imgURL: dog["imgURL"]
  })
});

app.get('/cats_and_dogs', (req,res,next) => {
    res.json('living together');
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});