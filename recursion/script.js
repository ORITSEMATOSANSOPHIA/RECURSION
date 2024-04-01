
// TASK ONE
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Example usage:
let year = 2024;
console.log(isLeapYear(year));


// TASK TWO

// function clothingAdvice(temperature, isRaining) {
//     if (temperature < 10) {
//         return "It's cold. You should wear a heavy jacket, gloves, and a hat.";
//     } else if (temperature >= 10 && temperature < 20) {
//         if (isRaining) {
//             return "It's cool and raining. You should wear a jacket and take an umbrella.";
//         } else {
//             return "It's cool. You should wear a light jacket or sweater.";
//         }
//     } else {
//         if (isRaining) {
//             return "It's warm and raining. You should wear a light jacket or raincoat.";
//         } else {
//             return "It's warm. You can wear a t-shirt and shorts.";
//         }
//     }
// }

// function main() {
//     let temperature = parseFloat(prompt("Please enter the current temperature in Celsius:"));
//     let isRainingInput = prompt("Is it raining? (yes/no)").toLowerCase();
//     let isRaining = isRainingInput === "yes" ? true : false;

//     if (!isNaN(temperature) && (isRainingInput === "yes" || isRainingInput === "no")) {
//         let advice = clothingAdvice(temperature, isRaining);
//         console.log(advice);
//     } else {
//         console.log("Invalid input. Please enter a valid temperature and specify if it's raining (yes/no).");
//     }
// }

// main();


// RECURSIVE TASKONE

function power(base, exponent) {
    // Base case: if exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }
    // Recursive case: multiply base by the result of raising base to exponent - 1
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); 
console.log(power(5, 2)); 



//TASK TWO

function isPalindrome(str) {
    // Helper function to normalize the string
    function normalize(str) {
        return str.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    // Recursive function to check if the normalized string is a palindrome
    function isPalindromeHelper(str) {
        // Base case: if the length of the string is 0 or 1, it's a palindrome
        if (str.length <= 1) {
            return true;
        }
        // Check if the first and last characters are equal
        if (str[0] === str[str.length - 1]) {
            // If they are, recursively check the substring without the first and last characters
            return isPalindromeHelper(str.slice(1, -1));
        } else {
            // If they're not equal, it's not a palindrome
            return false;
        }
    }

    // Call the helper function with the normalized string
    return isPalindromeHelper(normalize(str));
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama!")); 
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello")); 
