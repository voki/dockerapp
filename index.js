var os = require("os");
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

var cid = os.hostname();
var hostname = process.env.HN;

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home', { cid: cid, hostname: hostname });
});

app.get('/info', function (req, res) {
    var result = {};
    result['cid'] = cid;
    result['hostname'] = hostname; 
    res.contentType('application/json');
    res.send(JSON.stringify(result));
});



app.listen(3000);

