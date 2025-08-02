
console.log('5' + 7);      // Answer: 57
console.log(Boolean(0));    // Answer: false
console.log('10' - '2');    // Answer: 8
console.log('5' == 5);      // Answer: true
console.log('5' === 5);     // Answer: false
console.log(Boolean(''));    // Answer: false
console.log('5' + true);    // Answer: 5true
console.log('5' * 2);       // Answer: 10
console.log(0 == false);     // Answer: true
console.log(Boolean(NaN));   // Answer: false
console.log('');
//check if the number is potive,negative or zero
function checkNumber(num) {
    if (num == 0) {
        return 'zero';
    }
    else if (num < 0) {
        return 'Negative';
    }
    else {
        return 'positive';
    }
}
console.log(checkNumber(10));  // Answer: Positive
console.log(checkNumber(-5));  // Answer: Negative
console.log(checkNumber(0));   // Answer: Zero
console.log('');
//2.	Check if a person is eligible to vote (age 18 or older).
function isEligibleToVote(age) {
    if (age >= 18) {
        return 'Eligible to vote';
    } else {
        return 'Not eligible to vote';
    }
  }
    console.log(isEligibleToVote(20));
    console.log(isEligibleToVote(16)); 
    console.log('');
  //part four
 // The factorial of a non-negative integer n is the product of all positive integers less than or equal to n
function factorial(n) {
    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log('');
//Task 2: Fibonacci Sequence
// The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two 
//Task 3: Find Prime Numbers
//Note: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function primeNumbers(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(primeNumbers(20));
console.log('');
//Part 4: Function Tasks
//Task 1: Calculate Average of Two Numbers
//Write a function named average that takes two numbers and returns their average. Include exception handling to ensure the inputs are valid numbers
function average(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    return (num1 + num2) / 2;
}
console.log(average(10, 20));
console.log(''); 
//Task 2: Calculate Factorial
//Write an arrow function named factorial that calculates the factorial of a given number. Include exception handling to ensure the input is a non-negative integer.

const factorialArrow = (n) => {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer');
    }
    if (n === 0 || n === 1) {

        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialArrow(5));
console.log('');
//Task 3: Find Prime Numbers
//Write a function expression named isPrime that checks if a number is prime. Include exception handling to ensure the input is a positive integer.

const isPrime = function(n) {
    if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) {
        throw new Error('Input must be a positive integer greater than 1');
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // Is a prime number
}
console.log(isPrime(7));
console.log(isPrime(10)); 
console.log('');

//Part 5: Array Operations
//Task: Create an array of numbers and perform the following operations:
//1.	Use forEach() to print each number.
//2.	Use map() to create a new array with each number squared.
//3.	Use filter() to create a new array containing only odd numbers.
//4.	Use reduce() to find the sum of the numbers.
//5.	Use find() to get the first number greater than 10.
//6.	Use findIndex() to get the index of the first even number.
//7.	Use includes() to check if a specific number is present.
//8.	Use slice() to get a subarray of the first three elements.
//9.	Use splice() to remove the last number and add a new number.
//10.	Use sort() to sort the numbers in ascending order.
//11.	Use join() to create a string of all numbers separated by commas.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Use forEach() to print each number
numbers.forEach(num => console.log(num));
// 2. Use map() to create a new array with each number squared
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
// 3. Use filter() to create a new array containing only odd numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);
// 5. Use find() to get the first number greater than 10
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log(firstGreaterThanTen);
console.log(''); 
// 6. Use findIndex() to get the index of the first even number
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex);
// 7. Use includes() to check if a specific number is present
const hasFive = numbers.includes(5);
console.log(hasFive);
// 8. Use slice() to get a subarray of the first three elements
const firstThree = numbers.slice(0, 3);
console.log(firstThree);
// 9. Use splice() to remove the last number and add a new number
numbers.splice(numbers.length - 1, 1, 11);
console.log(numbers);
// 10. Use sort() to sort the numbers in ascending order
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers);
// 11. Use join() to create a string of all numbers separated by commas
const numbersString = numbers.join(', ');
console.log(numbersString);

