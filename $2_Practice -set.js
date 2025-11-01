console.log("****** Practice Set No -2 ******");
let age = prompt("Enter Your age..");

// 1. Use logical operator to find whether the age of a person lies between 10 and 20.
 
console.log("1. Use logical operator to find whether the age of a person lies between 10 and 20.");
if(age>10 && age<20)
{
    console.log("your age lie in between 10 and 20.");
} 

// 2. Demonstrate the use of switch case statements in Javascript. 
console.log("2. Demonstrate the use of switch case statements in Javascript.");
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid Day";
}

console.log("Today is:", dayName);

// 3. Write a javascript program to find whether a number is divisible by 2 and 3.
console.log("3. Write a javascript program to find whether a number is divisible by 2 and 3.");
let n = 18;
if(n%2 == 0 && n%3==0)
{
    console.log("Number is divisible by 2 and 3");
}

// 4. Write a javascript program to find whether a number is divisible by either 2 or 3.
console.log("4. Write a javascript program to find whether a number is divisible by either 2 or 3.");
let num = 18;

if (num % 2 === 0) {
    console.log(num + " is divisible by 2");
} else if (num % 3 === 0) {
    console.log(num + " is divisible by 3");
} else {
    console.log(num + " is not divisible by 2 or 3");
}

// 5. Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator.
console.log("5. Print 'you can drive' or 'you cannot drive' based on age being greater than 18 using ternary operator.");
(age>=18)?console.log("you can drive"):console.log("you cannot drive");
