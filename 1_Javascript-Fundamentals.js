console.log("---------- Let Variable ----------");


let age = 25;
let temperature = -3.5;

let name = "Simon";
let message = "Hello, World!";

let myVar = 10;

console.log("######## TYPE OF VARIABLE is: ", typeof myVar);

myVar = "10";

console.log("######## TYPE OF VARIABLE is: ", typeof myVar);

let isRaining = true;
let hasCoffee = false;

console.log("######## TYPE OF VARIABLE is: ", typeof isRaining);

let fruits = ["Apple", "Banana", "Orange"];

let numbers = [1, 2, 3, 4, 5];

let person = {
    name: "Simon",
    age: 28,
    isStudent: false,

    displayInfo () {
        console.log(this.name, 'is', this.age, 'years old', (this.isStudent) ? 'and is a student.' :  'and is a teacher.');
    }
};

person.displayInfo();


console.log("---------- CONSTANTS ----------");

const PI = 3.14;
const API_URL = "http://localhost:8080/api/v1/tasks";

// PI = 30; // Not allowed to update.

console.log(PI);

let nullValue = null;

let description;

console.log(description);


console.log("--------FOR-LOOPS---------");

for (let i = 1; i <= numbers.length; i++){
    const msg = i % 2 == 0 ? "even": "odd";
    console.log(i, msg);
}

for (let element of numbers){
    const msg = element % 2 == 0 ? "even": "odd";
    console.log(element, msg);
}



console.log("---------- LOOP - Arrow Function ----------");

numbers.forEach(() => {});

numbers.forEach((i) => {
    i % 2 == 0 ? console.log("Even") : console.log("Odd")
});

console.log("---------- Switch Statement ----------");

let day = "Wednesday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Tuesday":
    console.log("It's the second day of the week.");
    break;
  case "Wednesday":
    console.log("It's the middle of the week.");
    break;
  case "Thursday":
    console.log("It's almost the weekend.");
    break;
  case "Friday":
    console.log("It's the end of the workweek.");
    break;
  default:
    console.log("It's the weekend!");
}

console.log("---------- Comparision operators ----------");

let n1 = 10;
let n2 = "10";

let isEqual = n1 == n2;

let isStrictEqual = n1 === n2;


/*
The == (Loose Equality) operator is used for loose equality comparison, which means it checks for value equality
The === (Strict Equality) operator is used for strict equality comparison, which means it checks for both value and type equality
 */
console.log("Value Equal:", isEqual);
console.log("Value + Type Equal:", isStrictEqual);


console.log("---------- Functions ----------");

// Function Declaration

// function functionName (parameters){
//     //Function body
//     // Code to be executed
// }

greet("Group 56");


function greet(name){
    console.log("Hello, " + name + "!")
}

function isEvenNumber(number) {
    if (number % 2 === 0) {
        console.log(number, "Even");
    } else {
        console.log(number, "Odd");
    }
}

isEvenNumber(5);
isEvenNumber(14);

function addition(num1, num2){
    return num1 + num2;
}


// Function Expression

const functionName = (parameters) => {
    //Function Body
    // Code to be executed
}

const _addition = (num1, num2) => num1 + num2;


const _evenOddNumber = (number) => {
    if (number % 2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
};

const __evenOddNumber = (number) => (number % 2 == 0 ? "Even" : "Odd");


//console.log(_greet()); // Can not be called before init

const _greet = (name = "JavaScript") => "Hello, " + name + "!";

console.log(_greet());



function sum (...numbers){
let total = 0;
for (let num of numbers) {
    total += num;
}
return total;
}

let num1 = 30;
let num2 = 50;

console.log(sum(num1, num2, 60, 400));
//console.log(total); // Not accessible


console.log("---------- Templete Literals ----------");

const u = { name: "Sarah", product: "Laptop", price: 999 };

const msg = "Hi " + u.name + ", \nthank you for purchasing the " + u.product + " for $" + u.price + ".\nWe hope you enjoy your new device!";
console.log(msg);


console.log(".....");

const msg2 = 
`Hi ${u.name},
thank you for purchasing the ${u.product} for $${u.price}.
We hope you enjoy your new device!`;

console.log(msg2);


console.log("---------- Higher-Order Function ----------");

function calculate(num1, num2, operation){
    return operation(num1,num2);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function division(x, y) {

    if (y === 0){
        throw new Error("Cannot divide by Zero!")
    }

    return x / y;

}

let result1 = calculate(5, 9, add);
let result2 = calculate(9, 3, subtract);
let result3 = calculate(2, 2, (a,b) => a * b);

console.log(result3)


console.log("---------- Errors ----------");

 try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always run, no matter what
}


try{
let result4 = calculate(10, 2, division)
console.log(result4);

let result5 = calculate(10, 0, division)
console.log("Division: ", result5);
}catch (error){
    console.error("Caught an error: ", error.message)
} finally {
  console.log("finally block executed!");
}



let text = "Hello, World!";

console.log(text.length); // Length of the string
console.log(text.toUpperCase()); // Convert to uppercase
console.log(text.toLowerCase()); // Convert to lowercase
console.log(text.indexOf("World")); // Index of a substring
console.log(text.slice(0, 5)); // Extract a substring
console.log(text.replace("World", "Universe")); // Replace substring


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let currentDate = new Date();
console.log("currentDate>>>>",currentDate); // Current date and time


console.log("currentDate>>>>",currentDate.toLocaleString('sv-SE')); // Current date and time

console.log(currentDate.getFullYear()); // Get the year
console.log(currentDate.getMonth()); // Get the month (0-11)
console.log(currentDate.getDate()); // Get the day of the month
console.log(currentDate.getHours()); // Get the hours
console.log(currentDate.getMinutes()); // Get the minutes
console.log(currentDate.getSeconds()); // Get the seconds

let dateString = "2023-11-08T12:30:00";
let date = new Date(dateString);

let formattedDateSE = date.toLocaleDateString("sv-SE");