console.log("$5_Practice -set working");

// console.log("1. create an array of number and take input from the user to add numbers to this array.");
// let n = prompt("Enter the number of array element");
// let arr = [];
// for(let i=0; i<n; i++)
// {
//     let ele = prompt(`Enter the ${i} index of number.`);
//     arr.push(ele);
// }
// console.log(arr);


// console.log("2. Keep adding numbers to the array in 1 until 0 is added to the array.");
// let arr = [];
// let ele;
// do{
//     ele = prompt("Add an element in the array");
//     arr.push(ele);
// }while(ele != 0);

// console.log(arr);


// console.log("3. Filter for numbers divisible by 10 from a given array.");
// let arr = [10,15,20,25,30,35,40,100];
// let new_arr = arr.filter((ele)=>{
//     return ele%10==0;
// });

// console.log(new_arr);


// console.log("4. Create an array of square of given numbers.");
// let arr = [1,2,3,4,5,6];
// arr.forEach((el,i)=>{
//     arr[i] = el*el;
// });

// console.log(arr);

console.log("5. Use reduce to calculate factorial of a given number from an array of first n natural numbers. ( n being the number whose factorial needs to be calculated).");
let n = 5; // number whose factorial we want

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

let factorial = arr.reduce((acc, el) => acc * el, 1);

console.log("Factorial of", n, "is:", factorial);


