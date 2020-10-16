var http = require("http");

//http.createServer().listen(8181); Somente criando

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Welcome to my website!</h1>")
}).listen(8181);

console.log('Server is running...');