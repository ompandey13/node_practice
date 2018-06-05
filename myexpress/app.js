var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000;

var app = express();


app.use(function(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
	res.send('Hello world!');
});
app.get('/about', function(req, res) {
	res.send('About page!');
});

app.listen(3000);
console.log('Server started on port '+ port);

module.exports = app;