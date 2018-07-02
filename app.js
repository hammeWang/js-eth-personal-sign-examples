var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));


app.get('/', function(req, res) {
    res.sendFile('/Users/hammer/Downloads/itering/code/js-eth-personal-sign-examples/index.html');
});

app.listen(8080, function(){console.log('Listening on port 8080...');});