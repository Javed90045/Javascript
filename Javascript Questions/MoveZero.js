function moveZero(arr) {
  let j = 0; //1
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0 && arr[j] == 0) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    if (arr[j] != 0) {
      j++;
    }
  }
}
let num = [1, 0, 45, 0, 3, 2, 0];
moveZero(num);
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
