let arr=[]
arr[1]="Neha"
console.log(arr[1])
let a=[12,23,34,33]
console.log(a,typeof a);
console.log(a.length)
console.log(a.toString())
console.log(a.join("##"))
let num = [1, 2, 3, 4, 5] 
num.splice(1, 2) 
console.log(num)   
num.splice(1, 3)  
num.splice(1, 3, 222, 333) 
let b=[10,20,30 ,40]
let add=(a,c)=>{
    
    return a+c
}
console.log(b.reduce(add))
/*
==========================================
   JAVASCRIPT ARRAYS - COMPLETE GUIDE
==========================================

👉 Array = Collection of values (can be mixed types in JS)
👉 Index starts from 0
👉 Arrays are dynamic (size can change)

*/

// 1. Creating Arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["apple", "banana", "mango"];
let arr3 = [1, "Neha", true, null]; // mixed data types

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Array 3:", arr3);


// 2. Accessing Elements
console.log("First element:", arr1[0]);
console.log("Second element:", arr1[1]);


// 3. Changing Elements
arr1[0] = 100;
console.log("Updated Array:", arr1);


// 4. Length of Array
console.log("Length:", arr1.length);


// 5. Basic Array Methods

let fruits = ["apple", "banana", "mango"];

fruits.push("orange"); // add at end
console.log("After push:", fruits);

fruits.pop(); // remove last
console.log("After pop:", fruits);

fruits.unshift("grapes"); // add at start
console.log("After unshift:", fruits);

fruits.shift(); // remove first
console.log("After shift:", fruits);


// 6. Looping through Arrays

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("for loop:", fruits[i]);
}

// for...of loop
for (let item of fruits) {
    console.log("for...of:", item);
}

// forEach loop
fruits.forEach(function(item) {
    console.log("forEach:", item);
});


// 7. Important Array Methods

let numbers = [10, 20, 30, 40];

// map() -> creates new array
let doubled = numbers.map(n => n* 2);
console.log("Doubled:", doubled);

// filter() -> filters values
let greater = numbers.filter(num => num > 20);
console.log("Greater than 20:", greater);

// reduce() -> reduces to single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);


// 8. Searching in Array

let names = ["Neha", "Rahul", "Amit"];

console.log("Index of Rahul:", names.indexOf("Rahul"));
console.log("Includes Amit:", names.includes("Amit"));


// 9. Converting Array to String

let str = names.join(", ");
console.log("Joined string:", str);


// 10. Slicing and Splicing

let nums = [1, 2, 3, 4, 5];

// slice() -> does NOT change original array
let sliced = nums.slice(1, 4);
console.log("Sliced:", sliced);

// splice() -> changes original array
nums.splice(2, 1, 99); // remove 1 element and add 99
console.log("Spliced:", nums);


// 11. Sorting Arrays

let arr4 = [5, 2, 8, 1];

arr4.sort(); // default (string sort)
console.log("Sorted (wrong way):", arr);

// correct numeric sort
arr4.sort((a, b) => a - b);
console.log("Sorted (correct):", arr);


// 12. Reverse Array
arr4.reverse();
console.log("Reversed:", arr);


// 13. Multidimensional Arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix element:", matrix[1][2]); // 6


// 14. Spread Operator (...)

let a1 = [1, 2];
let b1 = [3, 4];

let combined = [...a1, ...b1];
console.log("Combined:", combined);


// 15. Destructuring

let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;
console.log("Destructured:", c1, c2, c3);


// 16. Checking if Array

console.log("Is array?", Array.isArray(colors));


// 17. Converting String to Array

let text = "hello";
let charArray = text.split("");
console.log("String to array:", charArray);


// 18. Practical Example

let marks = [80, 90, 70, 60];

// find average
let total = marks.reduce((acc, curr) => acc + curr, 0);
let avg = total / marks.length;

console.log("Average Marks:", avg);


/*
==========================================
   SUMMARY
==========================================

✔ Arrays can store multiple values
✔ Index starts from 0
✔ Use push/pop for end
✔ Use shift/unshift for start
✔ map, filter, reduce are VERY IMPORTANT
✔ Arrays can hold mixed data types in JS

==========================================
*/





let ar1 = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = ar1.map((e,index,array)=>{
    return e**2
})

console.log(newArr)
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))

let ar2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(ar2.reduce(red))
const person = {firstName:"John", lastName:"Doe", age:46};
console.log(person.firstName)
const myArr = [1, 2, 3, 4, 5,6];
const newAr = myArr.flatMap(x => [3, 2 * 10]);
console.log(newAr)
const fromString = Array.from("Hello"); // ["H", "e", "l", "l", "o"]
const fromRange = Array.from({ length: 3 }, (s, i) => s); // [0, 1, 2]
console.log(fromString,fromRange);

const original = [1, 2, 3,4];
const copy = [...original, 4, 5]; // [1, 2, 3, 4, 5]
console.log(copy)


function factorial(number){
   let arr = Array.from(Array(number).keys())
   let c = arr.slice(1).reduce((a, b)=> a*b )
   return arr
}

console.log(factorial(6));
