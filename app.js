var thirdModule = require('./modules/third');
var http = require('http');





var portDecision = 3000;

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(thirdModule.acctBalance() + thirdModule.newRandomNumber());
  res.end();
}).listen(portDecision);

console.log("Listening on port: ", portDecision);
