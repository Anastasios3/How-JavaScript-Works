'use strict';

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>How JavaScript Works Behind the Scenes</title>
    <style>
      body {
        height: 100vh;
        display: flex;
        align-items: center;
        background: linear-gradient(to top left, #28b487, #7dd56f);
      }
      h1 {
        font-family: sans-serif;
        font-size: 50px;
        line-height: 1.3;
        width: 100%;
        padding: 30px;
        text-align: center;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>How JavaScript Works Behind the Scenes</h1>
    <script src="script.js"></script>
  </body>
</html>

*/
/*
// Διαδικαστικός Προγραμματισμός (Procedural Programming)
function calculateSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const num = [1, 2, 3, 4, 5];
console.log(calculateSum(num)); // Εκτυπώνει: 15

// Αντικειμενοστραφής Προγραμματισμός (Object-Oriented Programming, OOP)
class User {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  calculateAge(currentYear) {
    return currentYear - this.birthYear;
  }
}

const user = new User('Tasos', 1994);
console.log(user.calculateAge(2024)); // Εκτυπώνει: 30

// Λειτουργικός Προγραμματισμός (Functional Programming, FP)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const squaredNumbers = evenNumbers.map(num => num * num);

console.log(squaredNumbers); // Εκτυπώνει: [4, 16, 36, 64, 100]

// Example 1: Fetching Data from an API
console.log('Start fetching data');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

console.log('End of script');

// Example 2: Using setTimeout for Delayed Execution
console.log('Start');

setTimeout(() => {
  console.log('This is executed after 2 seconds');
}, 2000);

console.log('End');

// Example 3: Handling User Interactions
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Listener Example</title>
</head>
<body>
  <button id="myButton">Click Me</button>
  <script>
    console.log('Script loaded');

    document.getElementById('myButton').addEventListener('click', () => {
      console.log('Button was clicked');
    });

    console.log('Event listener added');
  </script>
</body>
</html>
*/
/*
// Example 4: Using setInterval for Repeated Execution
console.log('Start');

let counter = 0;
const intervalId = setInterval(() => {
  counter += 1;
  console.log(`Counter: ${counter}`);

  if (counter >= 5) {
    clearInterval(intervalId);
    console.log('Interval cleared');
  }
}, 1000);

console.log('End');

// Example 5: Combining Asynchronous Operations
console.log('Start fetching data');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log('Data fetched:', data);

    setTimeout(() => {
      console.log('This message is shown after data fetch and 3 seconds delay');
    }, 3000);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

console.log('End of script');

// 1. Global Scope
const me = 'Jonas';
const job = 'teacher';
const year = 1989;

function logJob() {
  console.log(`My job is ${job}`);
}

logJob(); // My job is teacher
console.log(me); // Jonas
console.log(year); // 1989

// 2. Function Scope
function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
}

console.log(calcAge(1990)); // 47
// console.log(now); // ReferenceError: now is not defined
// console.log(age); // ReferenceError: age is not defined

// 3. Block Scope (ES6)
if (true) {
  const millennial = true;
  const food = 'Avocado toast';
  console.log(millennial); // true
  console.log(food); // Avocado toast
}

// console.log(millennial); // ReferenceError: millennial is not defined
// console.log(food); // ReferenceError: food is not defined

// Example with `let` in a loop
for (let i = 0; i < 3; i++) {
  console.log(`Iteration ${i}`);
}
// console.log(i); // ReferenceError: i is not defined

// Example with `var` in a block
{
  var globalVar = 'I am global';
}
console.log(globalVar); // I am global
*/

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Anastasios';
calcAge(1994);

console.log(a); // undefined (due to hoisting)
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
