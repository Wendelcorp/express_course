var express = require('express')
var app = express();
var path = require('path');
const pug = require('pug');

app.get('/', function(req, res) {
  res.render('index.pug');
});
app.get('/about', function(req, res) {
  res.render('aboutme.pug');
});


app.listen(3000, function() {
  console.log("Listening on port 3000")
})
