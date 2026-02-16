// let a = 10;
// let b = 10;

// console.log(sum(a,b))
// function sum(a , b){
//     return a + b;
// }
// console.log(sum(a, b));


//function expression : We can't call the function before it's defined. We can only call it after it's defined. This is because function expressions are not hoisted like function declarations.
// console.log(`The sum of 5 and 10 is: ${add(5, 10)}`);
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

// //function expression
// const divide = function(a, b) {
//     if (b === 0) {
//         return "Cannot divide by zero";
//     }
//     return a / b;
// }

// const  sum = a => a;
// console.log(sum(5));

const sum = () => {console.log("This is an arrow function without parameters")};
console.log(sum());// This will log the message and then log undefined because the function does not return anything.



