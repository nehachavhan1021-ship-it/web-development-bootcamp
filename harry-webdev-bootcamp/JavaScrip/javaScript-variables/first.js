console.log("welcome in javaScript")
let num=67 //available for block onle
console.log(num);

var num1=55 // globally available
console.log(num1)
// const num2=33;// we can't change value of const
// console.log(num2);


num2=55
console.log(num2);
let a=233;
let b=23.2;
let c="Neha"
let d=true;
let e=undefined;
let f=null;
console.log(a,b,c,d,e,f)
console.log(typeof a, typeof b,typeof c,typeof d,typeof e,typeof f );
//object
let obj={
    "name":"Neha",
    "salary":0,
    "profession":"Engineering"
}

console.log(obj)
obj.degree="BE"
console.log(obj)