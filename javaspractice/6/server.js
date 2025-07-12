const { log } = require('console');
const http =require('http');

const server = http.createServer((req,res)=>{
    console.log(req,"req");
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end('hello node js from htttp module')
})
const port = 3000

server.listen(port,()=>{
    console.log(`serve is now listening to port ${port}`);
})