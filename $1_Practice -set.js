console.log("1_Practice -set"); 

// 1. Create a variable of type string and try to add a  number to it. 
console.log("1. Create a variable of type string and try to add a  number to it");
let name = "Rahul";
console.log("Name is :",name);
// name = 10;
// console.log("Number is: ",name);

// 2. Use type of operator to find the datatype of the string in previous question.
console.log("2. Use type of operator to find the datatype of the string in previous question.");
console.log(typeof(name));

// 3. Create a const object in javascript can you change it to hold a number later ..?
console.log("3. Create a const object in javascript can you change it to hold a number later ..?");

// data is a reference variable of an object so it could be update
const data = {
    name:"Javed",
    mobile: 8850898993
}
console.log(data.name);
console.log(data["name"]);


// 4. Try to add  a new  key to the const object in problem 3 were you able to do it ...?
console.log("4. Try to add  a new  key to the const object in problem 3 were you able to do it ...?");
data['roll_no'] = 47;
console.log(data);

// 5. Write a JS program to create a word meaning dictionary of 5 words.
console.log("5. Write a JS program to create a word meaning dictionary of 5 words.");

const dictionary = {
  admire: "to respect or approve of someone or something",
  brave: "showing courage and not being afraid of danger",
  calm: "peaceful, quiet, and not excited or upset",
  delight: "a feeling of great pleasure or happiness",
  eager: "very interested and excited about something that is going to happen"
};

console.log(dictionary);

