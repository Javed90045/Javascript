console.log("Practice number 4");
console.log(`********** What will the following print in javascript ? console.log("har\"".length) **********`);
console.log("har\"".length);

console.log("Explore the includes, startwith & endwith functions of a string.");

let text = "JavaScript is fun!";
console.log(text.includes("Script"));   // true
console.log(text.includes("script"));   // false (case-sensitive)
console.log(text.includes("Java", 1));  // false (search starts after index 1)

let word = "Frontend Developer";

console.log(word.startsWith("Front"));    // true
console.log(word.startsWith("front"));    // false (case-sensitive)
console.log(word.startsWith("Developer", 9)); // true (starts checking from index 9)


console.log("*********** Write a program to convert a given string to lowercase.");
let nm = "RAJA";
console.log(nm.toLowerCase());

console.log(`*********** Extract the amount out of this string "please give Rs 1000".`);
let st = "please give Rs 1000";
console.log(st.slice(15));

console.log(`*********** Try to change 4th character of a given string were you able to do it ? `);
let str = "Hello";
str[3] = "p";    // trying to change the 4th character (index 3)
console.log(str);



