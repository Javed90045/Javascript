console.log("Array");
let num = [1,2,3,4,5,6];
console.log(num.push(7)); // Adds a new element at the end of the array
console.log(num);
console.log(num.length); // length method returns the length of the array

console.log(num.toString()); // convert an array to a string of comma separated values

let n = num.join("-"); // joins all the array elements using a separator
let nm = num.pop(); // removes last element  from the array and updates the original 

console.log(nm);

