var os = require("os");
var express = require('express');
var exphbs = require('express-handlebars');
var request = require('request');
var app = express();


var cid = os.hostname();
var hostname = process.env.HN;
var vhost = process.env.VHOST;
var url = 'http://'+vhost+'/api/info';


app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', { cid: cid, hostname: hostname });
});

app.get('/api/info', function (req, res) {
    var result = {};
    result['cid'] = cid;
    result['hostname'] = hostname; 
    res.contentType('application/json');
    res.send(JSON.stringify(result));
});

app.get('/api/connect', function (req, res) {
    var json = {};
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
	res.contentType('application/json');
	res.send(body);
      }
    })
});


app.listen(3000);

