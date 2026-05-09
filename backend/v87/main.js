const fs=require("fs")
// console.log(fs);
console.log("starting");
// fs.writeFileSync("neha.txt","neha is good girl")
fs.writeFile("neha.txt","neha is a good girl2222",()=>{
    console.log("done");
    fs.readFile("neha.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
   
})
fs.appendFile("neha.txt","append data",(e,d)=>{
    console.log(d);
    
})
console.log("ending");

