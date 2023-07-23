var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    fs.readFile('users.json','utf-8',(err,data)=>{
        if(err){
            console.log("File not found...");
        }else{
            userCreds = JSON.parse(data);
            if(username == userCreds.username && password == userCreds.password){
                res.send(`<h1>Welcome ${username}!😀`);
            }else{
                res.send("<h1>Invalid Credentials!</h1>")
            }
        }
    }
    )
}
)

app.listen(9000,()=>{
    console.log("Server started!");
})