var http = require("http");

const server = http.createServer();

server.on("connection", function(socket){

   console.log("New connection");
})
server.listen(3000);

console.log("Listening port 3000");