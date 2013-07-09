var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var index_buf = fs.readFileSync('index.html')
  response.send(index_buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
