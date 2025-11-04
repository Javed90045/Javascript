console.log("Practice number 3");
console.log("**********1. Write a program to print the number of a student in an object using for loop.");
const students = {
    student1: 101,
    student2: 102,
    student3: 103,
    student4: 104
};

const studentNumber = Object.values(students);
for(let i=0; i<studentNumber.length; i++){
    console.log(studentNumber[i]);
}
console.log("**********2. Write a program in Q1 using for-in loop.**********");

for(key in students)
{
    console.log(students[key]);
}
console.log("**********3. Write a program to print 'try again' until the user enters the correct number.**********");

let correct_number = '10';
let nm = 0;
while(nm!= correct_number){
    let guessed_num =  prompt("Enter a correct number..!");
    nm = guessed_num;
    if(nm!= correct_number)
    {
        alert("Try Again");
    }
}
console.log("You entered a correct number");


console.log("**********1. Write a program to find a mean of 5 numbers.**********");

function mean(a,b,c,d,e)
{
    let avg = (a+b+c+d+e) / 5;    
    console.log(avg);
}
mean(1,2,3,4,5);