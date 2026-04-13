//we use function to avoid repitation

function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " your tshirt is nice!");
  console.log("Hey " + name + " your course is good too!");
}

nice("neha");

function sum(a, b, c) {
  console.log(a, b, c);
  console.log(a + b + c);
}
sum(12, 12, 12);

function sum1(a, b, c=23) {
  console.log(a, b, c);
//   console.log(a + b + c);
return a+b+c
}
res=sum1(12,23)
console.log(res)
let score=(marks)=>{
  
}