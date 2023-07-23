const fs = require('fs');
// Blocking Synchronous way

// const textInput = fs.readFileSync('./input.txt','utf-8');
// console.log(textInput);
// const textOut = "I love avocados 🥑";
// fs.writeFileSync('./txt/out.txt',textOut);

// Non-Blocking , Asynchronous way

fs.readFile('./txt/stare.txt','utf-8',(err,data1) => {
    if(err) return console.log("Error💥")
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
        console.log(data2);
        fs.writeFile(`./txt/final.txt`,`${data2}\n${data1}`,'utf-8',(err)=>{
            console.log("Your file has been written😀")
        })
    });
});
console.log("Will Read File!");

