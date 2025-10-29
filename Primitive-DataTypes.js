console.log('Primitive DataTypes');
// In Javascript there are 2 Types of dataTypes
// 1. Primitive
// 2. Non Primitive

// Primitive DataType Has:
// Boolean false
let isLoggedIn = true;
console.log(isLoggedIn);
// BigInt  0n
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);
// Null    null
let data = null;
console.log(data);
// Number  0
let age = 25;
console.log(age);
// String  ""
let name = "Javed";
console.log(name);
// Symbol  no default literal
let id = Symbol('id');
console.log(id);
// undefined undefined
let score;
console.log(score);

// In Non Primitive has
// Object  undefined

let person = {
  name: "Javed",
  age: 25,
  isStudent: true
};

console.log(person.name);

