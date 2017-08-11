var express = require('express')
var app = express();
var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// GET      - Read
// POST     - Create
// PUT      - Update
// DELETE   - Delete

var data = {
      "Subject": "Name of people I know",
      "names": [
          {"name": "Bryce"},
          {"name": "Taise"},
          {"name": "Janet"},
          {"name": "Dan"},
          {"name": "Mike"},
          {"name": "Linda"},
      ]
  };

app.get('/', (req, res)  => {
  res.render('index.mustache', data)
});

app.listen(3000, function() {
  console.log("Listening on port 3000")
})
