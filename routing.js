const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    const pathName = req.url;
    if(pathName === '/overview'){
        res.end("<h1>This is OVERVIEW</h1>");
    }else if(pathName === '/product'){
        res.end("<h1>This is PRODUCT</h1>");
    }else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end("<h1 style=color:red>Page Not Found<h1>");
    }
    
});

server.listen(8000,()=>{
    console.log("Server Started Successfully...");
})




