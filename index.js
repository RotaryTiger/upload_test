var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/ipfsapi/v0/add', function(req, res) {
  if (!req.file) {
    return res.status(400).send({ message: 'bad, hated it' });
  }
  return res.status(200).send({ message: 'good, loved it' });
});

app.listen(5001, function() {
  console.log('listening on port %d', 5001);
});
