let n = 5;
fact = 1;
for (i = 1; i <= n; i++) {
  fact = fact * i;
}
console.log(fact);



function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  let c = arr.slice(1).reduce((a, b) => a * b);
  return c;
}

function facFor(number) {
  let fac = 1;
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }
  return fac;
}
console.log(factorial(4));
console.log(facFor(3));
let b = [2, 3, 43, 2];

let result = b.reduce((acc, curr) => acc * curr);

console.log(result);


