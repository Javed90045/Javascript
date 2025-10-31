console.log("Operator and Expressions.");

// Expression in js
// In JavaScript, an expression is any valid piece of code that produces a value.
let a = 10, b = 2;
let sum = a + b; // a and b is operand + is an oprator that evaluate something.
console.log(sum);

// These are various types of operators in javascript
// 1. Arithmetic operator
// Used for mathematical calculations.
console.log("Addition operator (+) :",a + b);
console.log("Subtraction operator (-) :",a - b);
console.log("Multiplication operator (*) :",a * b);
console.log("Division operator (/) :",a / b);
console.log("Modulas(remainder) operator (%) :",a % b);
console.log("Exponentiation (power) operator(**):", a ** b);
console.log("Post increment operator (a++):",a++);
console.log(a);
console.log("Post dicrement operator (a--):",a--);
console.log(a);
console.log("Pre increment operator (++a):",++a);
console.log("Pre dicrement operator (--a):",--a);

// 2. Assignment Oprator
// Used to assign values to variables.
let x = 10;
let y = 5;

console.log("Assignment operator (=) :", x = y);       // x = 5
x = 10; // reset value

console.log("Add and assign (+=) :", x += y);          // x = x + y → 15
x = 10;

console.log("Subtract and assign (-=) :", x -= y);     // x = x - y → 5
x = 10;

console.log("Multiply and assign (*=) :", x *= y);     // x = x * y → 50
x = 10;

console.log("Divide and assign (/=) :", x /= y);       // x = x / y → 2
x = 10;

console.log("Modulus and assign (%=) :", x %= y);      // x = x % y → 0
x = 10;

console.log("Exponent and assign (**=) :", x **= y);   // x = x ** y → 100000

console.log("**********Comparison (Relational) Operators**********");
// 3. Comparison (Relational) Operators
// Used to compare two values. Returns true or false
let m = 10;
let n = 5;
console.log("m=10 and n=5");
console.log("Equal to (==) :", m == n);           // false
console.log("Not equal to (!=) :", m != n);       // true
console.log("Strict equal to (===) :", m === n);  // false
console.log("Strict not equal to (!==) :", m !== n); // true
console.log("Greater than (>) :", m > n);         // true
console.log("Less than (<) :", m < n);            // false
console.log("Greater than or equal to (>=) :", m >= n); // true
console.log("Less than or equal to (<=) :", m <= n);   // false

console.log("**********4. Logical Operators**********");
// 4. Logical Operators
// Used to combine or invert conditions.

let n1 = 10;
let n2 = 5;
console.log("n1 = 10 and n2 = 5");
console.log("Logical AND (&&) :", n1 > 5 && n2 < 10);   // true && true → true
console.log("Logical OR (||) :", n1 > 15 || n2 < 10);   // false || true → true
console.log("Logical NOT (!) :", !(n1 > n2));           // !(true) → false


console.log("**********5. Bitwise Operators**********");

// 5. Bitwise Operators
// Work on binary numbers (0s and 1s).

let p = 5;   // binary: 0101  
let q = 3;   // binary: 0011  

console.log("Bitwise AND (&) :", p & q);    // 0101 & 0011 → 0001 → 1
console.log("Bitwise OR (|) :", p | q);     // 0101 | 0011 → 0111 → 7
console.log("Bitwise XOR (^) :", p ^ q);    // 0101 ^ 0011 → 0110 → 6
console.log("Bitwise NOT (~) :", ~p);       // ~0101 → -(0101 + 1) → -6
console.log("Left Shift (<<) :", p << 1);   // 0101 << 1 → 1010 → 10
console.log("Right Shift (>>) :", p >> 1);  // 0101 >> 1 → 0010 → 2


console.log("**********6. Ternary (Conditional) Operator**********");
// 6. Ternary (Conditional) Operator
// Used as a shortcut for if...else.
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"

console.log("********** 7. Type Operators **********");
// 7. Type Operators
// Used to check or convert data types.
// | Operator     | Description                         | Example                | Result     |
// | ------------ | ----------------------------------- | ---------------------- | ---------- |
// | `typeof`     | Returns data type                   | `typeof "Javed"`       | `"string"` |
// | `instanceof` | Checks if object belongs to a class | `arr instanceof Array` | `true`     |

console.log("********** 8. Spread and Rest Operators **********");
// 8. Spread and Rest Operators
// Introduced in ES6.
// | Operator | Description    | Example                             |
// | -------- | -------------- | ----------------------------------- |
// | `...`    | Spread or Rest | `let arr2 = [...arr1]` (copy array) |




