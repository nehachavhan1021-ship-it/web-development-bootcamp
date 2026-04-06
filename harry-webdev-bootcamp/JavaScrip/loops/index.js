//  for(let i=0;i<=10;i++){
//     console.log(i)
// }
const obj = {
  name: "neha",
  surname: "Chavhan",
  Salary: 0,
};
for (const key in obj) {
  console.log(key);

  console.log(obj[key]);
}
for (let key in obj) {
  console.log(`${key}:${obj[key]}`);
  console.log(`my ${key} is ${obj[key]}`);
}
// const arr = [10, 20, 30]; //not recommended

// for (const index in arr) {
//     console.log(index);      // 0, 1, 2
//     console.log(arr[index]); // 10, 20, 30
// }
// //use this instead
// for (const value of arr) {
//     console.log(value);
// }

//while loop
let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

//do while loop
let i = 20;
do {
  console.log(i);
  i++;
} while (i <= 50);
