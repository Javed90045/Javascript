let arr = [1, 2, 4, 7];
let n = Math.max(...arr)
console.log(n)
let miss = []
for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
        console.log("Missing number is:", i);
        miss.push(i)
    }
}
for(ele of miss)
{
    console.log("Missing: "+ele);
}
