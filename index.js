var express = require('express');
var ejs = require('ejs');
var path = require('path');
var app = express();
var dogData = require('./app/data/animals.json');

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static(path.join(__dirname, "public")));

app.get('/dogs', (req, res, next) => {
  var queryNum = Number(req.query.num);
  var dogNum = queryNum - 1;
  var dog = dogData[dogNum];
  var nextNum = queryNum + 1;

  res.render('pets', {
    name: dog.name,
    description: dog.description,
    nextNum: nextNum,
    imgURL: dog.imgURL
  })
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});