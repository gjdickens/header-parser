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
router.route('/')

  .get(function(req, res) {
    var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;

    var regExpOs = /\(([^)]+)\)/;
    var osLong = regExpOs.exec(req.headers['user-agent'])[1];
    var language = req.headers['accept-language'];
    var languageArr = language.split(";")[0].split(",");
    res.json({"ipaddress": ip, "software": osLong, "language": languageArr[0]});
  });

// Register Routes
app.use('/api', router);

app.listen(port);
console.log('Listening on ' + port);
