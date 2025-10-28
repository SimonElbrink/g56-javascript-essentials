let numbers = [1, 2, 3, 4, 5];

console.log(numbers[2]);
console.log(numbers[20]); // Output: Undefined

// Modifying an element in the array
numbers[1] = 10;
console.log(numbers); // Output: [1, 10, 3, 4, 5]

numbers.push(6, 7);
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6, 7]

// Removing the last element from the array
let lastElement = numbers.pop();
console.log(lastElement); // Output: 7
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]


// Iterating through the array using a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Iterating through the array using forEach
//  forEach() is a modern and convenient method for iterating over arrays. It takes a callback function that is executed once for each element.
numbers.forEach((number) => {
  console.log(number);
});


let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [10, 4, 6]



// Mapping each element to a new value
// map() creates a new array by applying a function to each element in the original array.
let squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers); // Output: [1, 100, 9, 16, 25, 36]


// Summing up all elements in the array
/*
reduce() takes a callback function that accumulates the result. 
The accumulator is the running total, and current is the current element being processed. 
The 0 is the initial value of the accumulator.
*/
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 29

/*
 sort() sorts the elements of an array. 
 Note that by default, sort() converts elements to strings and compares their UTF-16 code unit values. 
 For numerical sorting, you need to provide a comparison function.
 */
console.log(numbers.sort()); // Output: [1, 10, 3, 4, 5, 6]
console.log(numbers.reverse());


// Creating an array of fruits
let fruits = ["apple", "banana", "orange", "grape"];

fruits.splice(2, 0,"Kiwi");

console.log(fruits); // Output: ['apple', 'banana', 'kiwi', 'orange', 'grape']

// Finding the index of the last occurrence 'banana'
let lastIndexOfBanana = fruits.lastIndexOf("banana");
console.log(lastIndexOfBanana); // Output: 1

fruits.splice(lastIndexOfBanana, 1);
console.log(fruits); // Output: ['apple', 'kiwi', 'orange', 'grape']