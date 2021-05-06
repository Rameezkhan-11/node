const fs = require("fs");
const http = require("http");
const server = http.createServer();
// const rstream =  fs.createReadStream("input.txt");
server.on("request",(req,res) =>{
    // rstream.on("data",(chunkdata)=>{

    //     res.write(chunkdata)
    // })
    // rstream.on("end" ,() =>{
    
    //     res.end();
    // })
    // rstream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("File no found");
    // })
const rstream =  fs.createReadStream("input.txt");

rstream.pipe(res);


})

server.listen("8000","127.0.0.1");