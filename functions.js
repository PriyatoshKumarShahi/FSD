// let a = 10;
// let b = 10;

// console.log(sum(a,b))
// function sum(a , b){
//     return a + b;
// }
// console.log(sum(a, b));


const add = function(a, b) {
    return a + b;
}
console.log(`The sum of 5 and 10 is: ${add(5, 10)}`);

// Arrow function
const multiply = (a, b) => {
  return a * b;
};
console.log(`The product of 5 and 10 is: ${multiply(5, 10)}`);

const msg = () => {
  console.log("Hello World!");
}
msg();