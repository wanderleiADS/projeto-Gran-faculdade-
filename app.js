const http = require('http');


const server = http.createServer((req,res)=>{
       res.writehead(200,{'Content-Type':'text/plain'});
       res.end('Olá, Mundo!')
});


const PORT = 3000
server.listen(PORT,(3000)=>{
    console.log('Servidor rodando em http://localhost:${3000}/');
});
