function removeDuplicates(nums) {
  let k = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[k] != nums[i]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k + 1;
}

let arr = [1, 2, 2, 3, 4, 4, 5];
console.log("Before array");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
let k = removeDuplicates(arr);
console.log("After array");
console.log(arr)
for (let i = 0; i < k; i++) {
  console.log(arr[i]);
}


