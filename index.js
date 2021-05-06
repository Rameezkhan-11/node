 const fs = require("fs")
 fs.writeFileSync("read.txt","Rameez khan")
 fs.writeFileSync("read.txt","Awais khan")
 fs.writeFileSync("bio.txt","Salhuddin")
 fs.appendFileSync("bio.txt"," Rameez khan")
 const data =  fs.readFileSync("bio.txt")
 const newData = data.toString();
 console.log(newData);
 fs.renameSync("bio.txt","rameez.txt")
 fs.unlinkSync("rameez.txt")






