console.log("Find smallest number in the array");

let arr = [10,15,81,21,6]
console.log(arr);

let ele1 = arr[0];

for(let i=0; i<arr.length; i++)
{
    if(arr[i] < ele1)
    {
        ele1 = arr[i];
    }
}
console.log(ele1);