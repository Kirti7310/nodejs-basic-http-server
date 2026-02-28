const http = require('http');

const server = http.createServer((req,res)=> 
{
    if(req.url === '/')
    {
        res.writeHead(200, {'Content-type':'text/html'});
        res.end("<h1>Home Page</h1>");

    }
    else if(req.url === '/api')
    {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({name:"Kirti",role:"Developer"}));

    }

});

server.listen(3000,()=> {
    console.log("Server is running on port 3000");
})