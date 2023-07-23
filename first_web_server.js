const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req);
    res.end("<h1>Hello From The Server!</h1>");
});

server.listen(8000,'127.0.0.1',()=>{
    console.log("Server started!");
})