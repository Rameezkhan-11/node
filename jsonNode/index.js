const data = {
    name: "Rameez",
    age: "26",
    eduction: "Matric"
}
const fs = require("fs");
const jsonData = JSON.stringify(data);
// fs.writeFile("a.json",jsonData,(err)=>{
//     console.log("file created");
// })
fs.readFile("/home/rameez/node/jsonNode/a.json","utf-8",(err,data)=>{
    const origData = JSON.parse(data);
    console.log(data);
    console.log(origData);

})

