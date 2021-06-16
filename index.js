const http = require("http");

const hostname = "127.0.0.1"; 
const port = 3000;

const cowsay = require("cowsay");

console.log(cowsay.say({text:" this is a cowsay module"}));

const helloworldserver = http.createServer((function(request, response){
    response.statusCode = 200;
    response.setHeader("content-Type", "text/plain");
    response.end ("Hello World, I am a Node");
}));

helloworldserver.listen(port,hostname,function() {
    console.log (`Server running at http://${hostname}:${port}/`);
});