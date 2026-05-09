import fs from "fs/promises"
let a=await fs.readFile("neha.txt")
let b=await fs.appendFile("neha.txt","\n\n\nthis is amaging promises")
console.log(a.toString(),b);
