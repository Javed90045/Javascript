console.log("Array");
let num = [1,6,5,4,3,2];
console.log(num.push(7)); // Adds a new element at the end of the array
console.log(num);
console.log(num.length); // length method returns the length of the array

console.log(num.toString()); // convert an array to a string of comma separated values

let n = num.join("-"); // joins all the array elements using a separator
let nm = num.pop(); // removes last element  from the array and updates the original 

console.log(num.shift()); //removes first element of array and update the original array 
console.log(num);
console.log(num.unshift(1)); // Add element in the begining and returns the new length
console.log(num);
delete num[0];  //delete is an oprator that is used to delete element from the array
console.log(num);
console.log(num.sort()); // sort() method is used to sort an array alphabetically.
console.log(num);

num.splice(2,1,10,20); // Splice can be to add new items 
console.log(num);


