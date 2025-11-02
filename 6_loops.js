console.log("*******Loops in Javascript*******");
// what is loop ?
// loop is used for repeatative task

// A loop in programming is a control structure that allows you to repeat a block of code multiple times until a certain condition is met. It helps avoid writing the same code again and again.

// Types of Loops in JavaScript (as an example):

// 1. for loop – repeats code a fixed number of times

// 2. while loop – repeats code while a condition is true

// 3. do...while loop – like a while loop, but runs at least once

// 4. for...in loop – loops through object properties

// 5. for...of loop – loops through values in an iterable (like an array)

console.log("********For Loop********");

let n = 15;
for(let i=0; i<n; i++)
{
    console.log(i);
}

// write a program to print sum of 15 natural Number. 
let sum = 0;
for(let i=1; i<=15; i++)
{
    sum+=i;
}
console.log(sum);

console.log("********while Loop********");
// Write a JavaScript program using a while loop to print all numbers from 1 to 10.
let n1 = 1;
while(n1<=10)
{
    console.log(n1);
    n1++;
}
console.log("********do...while Loop********");
// Write a JavaScript program using a do...while loop to print all even numbers from 2 to 20.
let n2=2;
do{
    console.log("Even no:",n2);
    n2+=2;
}while(n2<=20);


console.log("********For...in Loop********");
const person = {
    name: "Javed",
    age: 25,
    city: "Mumbai"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

console.log("********for...of Loop********");

const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
