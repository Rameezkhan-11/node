const fs = require("fs");
// fs.mkdir("async.1", (err)=>{
// console.log("folder created");
// });
// fs.writeFile("./async.1/bio.txt","My name is Rameez",(err)=>{
// console.log("File created");
// })
// fs.appendFile("./async.1/bio.txt","Hi Rameez khan how are you",(err)=>{
//     console.log("File data readed");
// })
// fs.readFile("./async.1/bio.txt",(err,data)=>{

//     console.log(data);
// })
// fs.rename("./async.1/bio.txt","mybio.txt",(err)=>{
//     console.log("Rename done");


// })
// fs.unlink("/home/rameez/node/mybio.txt",(err)=>{
//     console.log("File deleted");
// })





fs.rmdir("./async.1",(err)=>{
    console.log("Dir deleted");
})