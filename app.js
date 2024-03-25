/*Chapter 12-13
IF...ELSE & ELSE IF STATEMENT,
TESTING SET OF CONDITIONS
==============================*/

/*1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).

function checkCharacterType(character) {
    // Convert the character to its ASCII code
    var charCode = character.charCodeAt(0);

    if (charCode >= 48 && charCode <= 57) {
        // ASCII range for numbers (0-9)
        console.log("The input character is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
        // ASCII range for uppercase letters (A-Z)
        console.log("The input character is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
        // ASCII range for lowercase letters (a-z)
        console.log("The input character is a lowercase letter.");
    } else {
        // If the character doesn't fall into any of the above categories
        console.log("The input character is not a number or letter.");
    }
}*/


/*2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.

function compareIntegers(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is larger than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " is larger than " + num1);
    } else {
        console.log("Both integers are equal: " + num1);
    }
}

// Example usage:
var integer1 = parseInt(prompt("Enter the first integer:"));
var integer2 = parseInt(prompt("Enter the second integer:"));

compareIntegers(integer1, integer2);*/


/*3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero.

function checkNumberType(number) {
    if (number > 0) {
        console.log("The number is positive.");
    } else if (number < 0) {
        console.log("The number is negative.");
    } else {
        console.log("The number is zero.");
    }
}

// Example usage:
var userInput = parseFloat(prompt("Enter a number:"));
checkNumberType(userInput);*/


/*4. Write a program that takes a character (i.e. string of
    length 1) and returns true if it is a vowel, false otherwise

    function isVowel(character) {
        // Convert the character to lowercase to handle both cases (lowercase and uppercase vowels)
        var char = character.toLowerCase();
    
        // Check if the character is a vowel
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
    }
    
    // Example usage:
    var userInput = prompt("Enter a character:");
    if (userInput.length === 1) {
        console.log("Is the character a vowel? " + isVowel(userInput));
    } else {
        console.log("Please enter only one character.");
    }*/


    /*5. Write a program that
a. Store correct password in a JS variable.

// Storing correct password in a JavaScript variable
var correctPassword = "mySecurePassword123";

// Example usage:
console.log("Correct password: " + correctPassword);*/


/*b. Asks user to enter his/her password

// Storing correct password in a JavaScript variable
var correctPassword = "mySecurePassword123";

// Prompting the user to enter their password
var userPassword = prompt("Please enter your password:");

// Example usage:
console.log("User entered password: " + userPassword);*/



/*c.Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”

// Storing correct password in a JavaScript variable
var correctPassword = "mySecurePassword123";

// Prompting the user to enter their password
var userPassword = prompt("Please enter your password:");

// Validating if the user has entered a password
if (userPassword === null || userPassword === "") {
    console.log("Please enter your password.");
} else {
    console.log("User entered password: " + userPassword);
}
*/



/*ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.

// Storing correct password in a JavaScript variable
var correctPassword = "mySecurePassword123";

// Prompting the user to enter their password
var userPassword = prompt("Please enter your password:");

// Validating if the user has entered a password
if (userPassword === null || userPassword === "") {
    console.log("Please enter your password.");
} else {
    // Checking if the entered password matches the correct password
    if (userPassword === correctPassword) {
        console.log("Correct! The password you entered matches the original password.");
    } else {
        console.log("Incorrect password.");
    }
}*/


/*6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"; false
} else {
    greeting = "Good evening";
}*/



/*7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements
// Taking time input from the user
var time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):"));

// Implementing cases using if, else-if, else statements
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2200) {
    console.log("Good evening!");
} else if (time >= 2200 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid input. Please enter time in 24-hour clock format (e.g., 1900 for 7pm).");
}*/


    


