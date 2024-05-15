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
