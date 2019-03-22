var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})


app.post('/ip/maxip', urlencodedParser, function (req, res) {
   response = {
      maxip:req.body.maxip
   };
   //console.log(response);
   res.status(201);
   res.end(JSON.stringify(response));
})

app.post('/path/maxpath', urlencodedParser, function (req, res) {
   response = {
      maxpath:req.body.maxpath
   };
   //console.log(response);
   res.status(201);
   res.end(JSON.stringify(response));
})

app.post('/combination/maxcombination', urlencodedParser, function (req, res) {
   response = {
      maxcombination:req.body.maxcombination
   };
   //console.log(response);
   res.status(201);
   res.end(JSON.stringify(response));
})


app.get('/statics', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
     "statics":"list.pdf"
   };
   //console.log(response);
   res.status(201);
   res.end(JSON.stringify(response));
})



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})