var port = 4568;

var testData = [

];

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/get", function(req, res){
  res.send(testData);
});

app.post("/add", function(req, res) {

});

app.listen(port, function() {
  console.log("******** Listening on port:", port,"*********");
});