let rand=Math.random()
let num1=Number(prompt("enter your first number"))
let op=prompt("enter your operator(+,-,*,/)")
let num2=Number(prompt("enter your second number"))
let obj={
   "+":"-",
   "-":"+",
   "*":"/",
   "/":"*"
}
if(rand>0.1){
    alert(`The result is ${eval(`${num1} ${op} ${num2}`)}`);
}
else{
    op=obj[op]

    alert(`the result is ${eval(`${num1}${op}${num2}`)}`);
}