
// // TASK ONE
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100 and not divisible by 400
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}

console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2021)); 



//TASK 2

function power(base, exponent) {
    // Base case: if exponent is 0, result is 1
    if (exponent === 0) {
        return 1;
    }
    // Base case: if exponent is 1, result is the base
    if (exponent === 1) {
        return base;
    }
    // Recursive case: multiply base by the result of raising base to (exponent - 1)
    return base * power(base, exponent - 1);
}

console.log(power(2, 0)); 
console.log(power(3, 4)); 
console.log(power(5, 3));


//TASK 3
function fibonacci(n) {
    // Base cases: 0th Fibonacci number is 0, and 1st Fibonacci number is 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Recursive case: nth Fibonacci number is the sum of (n-1)th and (n-2)th Fibonacci numbers
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(0)); 
console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(5)); 
console.log(fibonacci(10)); 
