// variable is just like a container that holds some value
// In JavaScript there is 3 types of variables let,var and const
// example: let a = "Javed"; 
// "a" is an Identifier which holds value "javed"
// The value of javascript variable can changed during the execution of program

let name = "Ak";
console.log(name);
name = 12;
console.log(name)

var a = "Javed";
console.log(a);

var a = 15;
console.log(a);

const b = 10;
console.log(b);

// Rules for choosing variables names
// 1. letter, digits, $ sign and underscore are allowed
// 2. Must begin with a $,_,or a letter
// 3. javascript reserved words cannot be used as a variable name
// 4. Javascript is a case sensitive language 

// var vs let 

// var is globally scoped while let & const are block scoped variables
// var can be updated and re declared within scope
// let and const cannot be re-declared
// let can be updated