console.log("Find smallest number in the array");

let arr = [10,15,81,21,6]
console.log(arr);

// let newArr = arr.reverse()
// console.log(newArr);
let newArr = [];
for(let i=arr.length-1; i>=0; i--){
    newArr[arr.length-i-1] = arr[i];
}
console.log(newArr);