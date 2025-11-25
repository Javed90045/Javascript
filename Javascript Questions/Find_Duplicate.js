let arr = [1,2,3,4,2,4]
let duplicate = arr.filter((ele, index) => {
    return arr.indexOf(ele) !== index; //false false false false true true  2,4
})

console.log(duplicate)