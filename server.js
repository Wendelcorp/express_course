var express = require('express')
var app = express();
var path = require('path');
const pug = require('pug');
var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.get('/', (req, res)  => {
  res.render('index.mustache', {
    name: "Bryce"
  });
});
app.get('/about', (req, res) => {
  res.render('aboutme.pug', {
    title: 'Hello Express & Pug'
  });
});

app.listen(3000, function() {
  console.log("Listening on port 3000")
})
