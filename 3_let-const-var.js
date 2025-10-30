console.log("LET---CONST---VAR");

// LET-- LET is a keyword which is used to declare variable.
// LET declares local scoped variables

let a = 10;
console.log(a);
a = 'Ajay';
console.log(a);
let b = 20;
{
    let b = 10;
    console.log(b);
}
console.log(b);


// var is a keyword which is used to declare variable.
// var is global scoped variable;

var name = 'Raja';
console.log(name);
{
    name = 'kuldeep';
    console.log(name);
}

console.log(name);

// CONST is also declared local scoped varibale;
// const cannot be update, null value and redeclared;

const data = "loan";
// data = "sdsd"
console.log(data);

