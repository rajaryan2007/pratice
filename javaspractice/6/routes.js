const http = require('http');

const server = http.createServer((req,res)=>{

  const url = req.url;
  if(url === '/'){
    res.writeHead(200,{'content-Type':'Text/plain'});
    res.end('home page')
  }else if (url=='/helloi'){
    res.writeHead(200,{"content-Type":"Text/plain"});
    res.end("index.html");
  }else{
    res.writeHead(404,{"content-Type":"Text/plain"});
    res.end("this page can not be fonnd")
  };

});

const port = 3000;
server.listen(port,()=>{
console.log(`server is now listening to port ${port}`);
});