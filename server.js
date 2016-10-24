var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

// Set Up Routes
var router = express.Router();

// Middleware for all requests
router.use(function(req, res, next) {
  next();
});



//landing page route

app.use('/', express.static(path.join(__dirname, 'public')));
//API routes


//take in data input
router.route('/:date_input')

  .get(function(req, res) {

      res.json({ message: 'hello world!'});
  });

// Register Routes
app.use('/api', router);

app.listen(port);
console.log('Listening on ' + port);
