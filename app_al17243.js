var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    res.end('Hola mundo JS Repo GIT - Sánchez Salas Pedro Antonio\n');
}).listen(8081);
console.log('Server running on port 8081');