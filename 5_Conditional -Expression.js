console.log("5_Conditional -Expression ");

// what is conditional statements..?
// conditional statements are used to make decisions in your code. They allow your program to execute different blocks of code based on whether a condition is true or false.
// in Javascript there are different types of conditional statements;

// 1. If-statement: Executes a block of code only if the given condition is true.
console.log("*********If statement*********");
let a = prompt("Enter your age..");
let age = parseInt(a);
if(age>=18)
{
    console.log("You can drive.");
}
// 2. If-else-statement: Executes one block of code if a condition is true, otherwise executes another block.
console.log("*********If-else-statement*********");
if(age>=18)
{
    console.log("You can drive.");
}
else{
    console.log("You cannot drive.");
}
// 3. Nested-If-statement: An if statement inside another if statement for multiple levels of conditions.
if(age < 18)
{
    console.log("You are under age!.. Sorry.");
}
else if(age>=18 && age<25)
{
    console.log("You are elegible for this contest");
}
else{
    console.log("You are not eligible for this contest");
}
// 4. Switch statement: Selects one of many code blocks to execute based on a variable's value.
switch(age)
{
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log('invalid day');
}
// 5. Ternary statement: A shorthand for if-else that evaluates a condition and returns a value in a single line.
age>=18? console.log("you can vote") : console.log("You can not vote");
