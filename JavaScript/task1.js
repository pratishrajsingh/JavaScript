// 1. What is a variable in JavaScript? 
// A variable is a named container used to store data values that can be used and changed later in a program.
// Example: let age = 25;

// 2. What are the three keywords used to create variables?
//  The three keywords are:
// var
// let
// const

// 3. Write the syntax to create a variable using var.
// var variableName = value;
// Example:
// var age = 25;

// 4. Write the syntax to create a variable using let.
// let variableName = value;
// Example:
// let age = 25;

// 5. Write the syntax to create a variable using const.
// const variableName = value;
// Example:
// const age = 25;

// 6. What is declaration? 
// Declaration is creating a variable by giving it a name (without necessarily assigning a value). e.g. let age;

// 7. What is initialization? 
// Initialization is assigning the first value to a declared variable. e.g. age = 25;

// 8. What is reassignment? 
// Reassignment is changing the value of a variable that already has a value. 
// e.g.let age = 25; 
//      age = 30;

// 9. What is redeclaration? 
// Redeclaration is declaring the same variable name again using var or let/const (depending on rules) in the same scope.
// Example:
// var age = 25;
// var age = 30;

// 10. Which keyword allows redeclaration? 
// var

// 11. Which keyword allows reassignment? 
// Both var and let allow reassignment (const does not).

// 12. Which keyword requires initialization when declared? 
// const

// 13. Identify the declaration and initialization:
// let age = 25;
// Declaration: let age
// Initialization: = 25

// 14. What is the value of a?
// var a = 100;
// console.log(a);
// Output: 100

// 15. Change the value to 200:
// let number = 100;
// number = 200;

// 16. What will be the output?
// var a = 10;
// console.log(a);
// 10

// 17. What will be the output?
// var a = 10;
// a = 20;
// console.log(a);
// 20

// 18. What will be the output?
// var a = 10;
// var a = 30;
// console.log(a);
// 30

// 19. Write a var variable named name with the value "John".
// var name = "John";

// 20. Create a var variable named price with the value 500.
// var price = 500;

// 21. Reassign price from 500 to 1000.
// var price = 500;
// price = 1000;

// 22. What will be the output?
// var x = 50;
// x = 100;
// console.log(x);
// 100

// 23. Can a var variable be reassigned?
//  Yes.
// Example:
// var age = 20;
// age = 25;

// 24. Can a var variable be redeclared?
// Yes.

// 25. Write an example of var redeclaration.
// var age = 20;
// var age = 25;

// 26. Create a let variable named age with the value 25.
// let age = 25;

// 27. What will be the output?
// let age = 20;
// age = 30;
// console.log(age);
// 30

// 28. Can a let variable be reassigned?

// Answer: Yes.

// Example:

// let age = 20;
// age = 30;

// 29. Can a let variable be redeclared?
// No.

// 30. Find the error.
// let name = "John";
// let name = "David";
// The variable name is declared twice using let. let does not allow redeclaration in the same scope.
// Correct code:
// let name = "John";
// name = "David";

// 31. Create a let variable called city and assign "Chennai".
// let city = "Chennai";

// 32. Change the value of city to "Salem".
// let city = "Chennai";
// city = "Salem";

// 33. What will be the output?
// let x = 10;
// x = 50;
// console.log(x);
// 50

// 34. Write a let variable called salary with the value 25000.
// let salary = 25000;

// 35. Reassign salary to 30000.
// let salary = 25000;
// salary = 30000;

// 36. Create a const variable called pi with the value 3.14.
// const pi = 3.14;

// 37. Can a const variable be reassigned?
// No.

// 38. Can a const variable be redeclared?
// No.

// 39. What is wrong with this code?
// const age;
// age = 25;
// const must be initialized when it is declared.
// Correct code:
// const age = 25;

// 40. What happens here?
// const price = 500;
// price = 1000;
// It gives an error because a const variable cannot be reassigned.

// 41. Create a const variable called country with the value "India".
// const country = "India";

// 42. What will be the output?
// const x = 100;
// console.log(x);
// 100

// 43. Which keyword should you use if the value should not be reassigned?
// const

// 44. Difference between let and const? 
// let allows reassignment of its value. 
// const does not allow reassignment once it is set. Both are block-scoped and cannot be redeclared in the same scope.
// e.g. let age = 20;
//          age = 25;

//     const pi = 3.14;
//           pi = 3.15; Error

// 45. What is the difference between var and const?
// var is function-scoped, can be redeclared and reassigned, and gets hoisted with an undefined value. 
// const is block-scoped, cannot be redeclared or reassigned, and must be initialized when declared.

// 46. Write JavaScript code to print Hello World using console.log().
// console.log("Hello World");

// 47. Write JavaScript code to print the number 500 using console.log().
// console.log(500);

// 48. What is the purpose of console.warn()?
// Displays a warning message in the console, usually shown with a yellow highlight, to indicate something that isn't necessarily an error but needs attention.
// Example:
// console.warn("This is a warning");

// 49. What is the purpose of console.error()?
// Displays an error message in the console, usually shown with a red highlight, used to flag problems or failures in the code.
// Example:
// console.error("Something went wrong");

// 50. What is the purpose of each?

// alert() — Shows a popup dialog box with a message and an OK button.
// alert("Hello");

// prompt() — Shows a popup dialog box that asks the user for input and returns the text entered.
// prompt("Enter your name");

// confirm() — Shows a popup dialog box with OK and Cancel buttons, returning true or false.
// confirm("Are you sure?");

// document.writeln() — Writes text directly onto the HTML page followed by a newline.
// document.writeln("Hello World");

// console.log() — Prints output/messages to the browser's developer console.
// console.log("Hello World");


// 1. Create variables for student name, age, and mark and print all three.
let studentName = "Rahul";
let age = 20;
let mark = 85;
console.log(studentName);
console.log(age);
console.log(mark);

// 2. Ask the user's name using prompt() and display it using alert().
let userName = prompt("Enter your name");
alert(userName);

// 3. Ask the user's age using prompt() and print it using console.log().
let userAge = prompt("Enter your age");
console.log(userAge);

// 4. Ask the user a question using confirm().
let answer = confirm("Do you want to continue?");
console.log(answer);

// 5. Ask the user's name and display it on the webpage using document.writeln().
let Name = prompt("Enter your name:");
document.writeln(Name);