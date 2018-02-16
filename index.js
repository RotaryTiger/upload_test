var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/ipfsapi/v0/add', function(req, res) {
  return res.status(200).send({ message: 'good, loved it' });
});

app.listen(8080, function() {
  console.log('listening on port %d', 8080);
});
