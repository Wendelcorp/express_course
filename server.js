var express = require('express')
var app = express();
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser')

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// GET      - Read
// POST     - Create
// PUT      - Update
// DELETE   - Delete

var data = {};
data.tvShows = [];
data.tvShows.push('Rick and Morty')

app.get('/', (req, res)  => {
  res.render('index.mustache', data)
});
app.post('/', (req, res)  => {
  data.tvShows.push(req.body.name);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log("Listening on port 3000")
})
