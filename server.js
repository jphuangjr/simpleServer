var port = 4568;

var testData = [];

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
  let data= {};
  data.id = req.param('id');
  data.email = req.param("email");
  testData.push(data);
  res.send(testData);
});

app.delete("/delete/:id", function(req, res) {
  testData = testData.filter(function(val) {
    return val.id !== req.params.id
  });
  res.send(testData);
});

app.listen(port, function() {
  console.log("******** Listening on port:", port,"*********");
});