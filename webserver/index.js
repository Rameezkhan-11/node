const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("/home/rameez/node/apiData/data.json","utf-8");
    const origData = JSON.parse(data);
    if(req.url=="/"){
        res.end("Hello from the other sides")
    }else if(req.url=="/about"){


        res.end(origData.Shoe1.img)
    }

}
)

server.listen("8000","127.0.0.1",()=>{
    console.log("Server running on 8000");
})