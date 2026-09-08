// Q1: What is the difference between var, let, and const?
// var is function-scoped, meaning it doesn't care about {} blocks like if or for — it only respects the function it's in. It can also be redeclared and reassigned freely, and it gets hoisted with an initial value of undefined.
// let are both block-scoped, so they only live inside the {} where they're created.let can be reassigned but not redeclared in the same scope.
// const are both block-scoped, so they only live inside the {} where they're created.const can't be reassigned or redeclared at all — and it has to be given a value the moment it's declared.
// Example: var name = "Arun";
            //     name = "Rahul";
            // let age = 20;
            //     age = 25;
            // const city = "Chennai";
               // city = "Salem";  // Error

// Q2: Can you re-declare a variable with var? What about let and const?
// Yes, var allows redeclaration — you can write var x = 1; and then var x = 2;. let and const don't allow that at all; trying to redeclare either one in the same scope throws a SyntaxError saying the identifier has already been declared.

// Q3: What is the output of this code?
// ```javascript
// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);
// ```

// This actually throws an error before it ever reaches console.log. z is declared with const, and const variables can't be reassigned — so the line z = 30; throws TypeError: Assignment to constant variable. If you remove that line, the output would be 20 25 15.

// Q4: What is the difference between declaring and initializing a variable?
// Declaring a variable just means telling JavaScript "this name exists" — like let age;. At that point it has no value yet (it's undefined).
// Initializing means actually giving it a value for the first time, like age = 25;. You can do both in one line (let age = 25;), or split them across two lines.

// Q5: What will be the output?
// let a;
// console.log(a);
// Output : undefined
// Because the variable is declared but no value has been assigned to it.

// Q6: What is hoisting? Give an example.
// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before the code actually runs — though only the declaration gets moved, not the value.
// Example : console.log(a); // undefined, not an error
             //var a = 10;


//  Q7: What is the difference between null and undefined?
// undefined means a variable has been declared but nothing has been assigned to it yet — JavaScript sets this automatically.
// Example : let a;
          // console.log(a); 
          // Output : undefined
// null is different because it's something a developer sets on purpose, to say "this variable intentionally has no value."
// Example : let a;
           //console.log(a);
          // Output : null

// Q8: What will be the output?
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
// Output : object
        //  undefined
        //  object
        //  object

// Q9: What is the difference between == and ===?
// == is the loose equality operator — it compares values but will convert the types first if they're different, so 5 == "5" is true.
// === is the strict equality operator — it compares both value and type without converting anything, so 5 === "5" is false because one is a number and the other is a string. It's generally safer to use === to avoid unexpected type-conversion surprises.

// Q10: What is the difference between ++i and i++?
// i++ (post-increment) gives back the current value first, and then increases it — so if i is 5, console.log(i++) prints 5, and only after that does i become 6.
// ++i (pre-increment) increases the value first, then gives it back — so console.log(++i) on the same i = 5 prints 6 right away.

// Q11: What will be the output?
let x = 10;
let y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
// Output : 105
//          5
//          50
//          2
// + behaves differently here because if either side is a string, + treats it as concatenation instead of addition — so 10 + "5" glues them together as "105". But -, *, and / don't have that dual meaning, so JavaScript converts "5" into the number 5 behind the scenes and does normal math.

// Q12: What are logical operators? Explain with examples.
// Logical operators are used to combine or reverse conditions.

// There are three main logical operators:

// AND && : 
// Both conditions must be true.
// Example : console.log(true && true); Output : true

// OR || : 
// At least one condition must be true.
// Example : console.log(true && true); Output : true

// NOT ! : 
// It reverses the result.
// Example : console.log(!true); Output : false

// Q13: What will be the output?
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));
// Output : true
// true
// false

// Q14: What is the ternary operator? Give an example.
// The ternary operator is a short one-line way of writing an if...else. It follows the pattern condition ? valueIfTrue : valueIfFalse.
// Example : 
// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result); 
// output : Adult

// Q15: What is the difference between implicit and explicit type casting?
// Implicit type casting happens automatically by JavaScript. Example : let x = "10";, let y = 5;, console.log(x + y);, Output : 105
// JavaScript automatically converts the number to a string.

// Explicit type casting is when we manually convert the data type. Example : let x = "10"; , let y = Number(x); , console.log(y); , output : 10

// Q16: What will be the output?
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));
// Output : 123
// NaN
// 1
// 0
// false
// true

// Q17: What is NaN? Give an example.
// NaN stands for "Not a Number," and it's what JavaScript gives you when a math-related operation doesn't produce a real number — usually because you tried to do math with something that isn't actually numeric.
// Example : console.log(Number("hello"));
// NaN
// console.log("abc" * 2);
// NaN

// Q18: What is the difference between if-else and switch?
// if-else is mainly used when we need to check conditions or ranges.
// Example : 
// let age = 20;
// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// switch is useful when we compare one value with several fixed cases.
// Example : 
// let day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Invalid day");
// }

// Q19: What will be the output?
age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// Output : Adult

// Q20: What is nested if? Give an example.
// A nested if is simply an if statement placed inside another if statement, used when a decision depends on more than one condition being checked in stages.
// Example : 
// let age = 20;
// let hasLicense = true;
// if (age >= 18) {
//   if (hasLicense) {
//     console.log("You can drive");
//   } else {
//     console.log("You need a license first");
//   }
// } else {
//   console.log("You are too young to drive");
// }

// Q21: Write a program to check if a number is even or odd using ternary operator.
let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); 
// Output : Odd

// Q22: What is the difference between while and do-while?
//  A while loop checks the condition before executing the code.
// Example : 
// let i = 10;
// while (i < 5) {
//     console.log(i);
// }
// Nothing is printed because the condition is false.

// A do-while loop executes the code at least once, then checks the condition.
// Example : 
// let i = 10;
// do {
//     console.log(i);
// } while (i < 5);
// Output : 10

// Q23: What will be the output?
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output : 1
// 2
// 3
// 4
// 5

// Q24: What is the difference between for-of and for-in?
// for...of loops through the values of something iterable, like an array or a string — so you get the actual items directly.
// Example : 
// let fruits = ["Apple", "Mango", "Orange"];
// for (let fruit of fruits) {
    // console.log(fruit);
// }
//Output : Apple
// Mango
// Orange

// for...in loops through the keys (or index numbers) of an object or array, so you get the property names, and you'd need something like obj[key] to get the actual value.
// Example : 
// let person = {
//     name: "Arun",
//     age: 25
// };
// for (let key in person) {
//     console.log(key);
// }
// Output : name
// age

// Q25: Write a program to find sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum); 
// Output : 5050

// Q26: What is the difference between slice and splice?
// slice() pulls out a section of an array and returns it as a new array, without touching the original one.
// Example : 
// let fruits = ["Apple", "Mango", "Orange", "Banana"];
// let result = fruits.slice(1, 3);
// console.log(result);
// Output : ["Mango", "Orange"]

// splice(), on the other hand, actually changes the original array directly — it can remove elements, add new ones, or both, right at a specific position.
// Example : 
// let fruits = ["Apple", "Mango", "Orange"];
// fruits.splice(1, 1);
// console.log(fruits);
// Output : ["Apple", "Orange"]

// Q27: What will be the output?
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);
// Output: [1, 2, 3]

// Q28: What is the difference between function declaration and function expression?
// A function declaration directly creates a named function.
// Example : 
// function greet() {
//     console.log("Hello");
// }
// greet();

// A function expression stores a function inside a variable.
// Example : 
// let greet = function() {
    // console.log("Hello");
// };
// greet();

// Q29: What is an arrow function? Give an example.
// An arrow function is a shorter way to write a function, using => instead of the function keyword. It's especially handy for quick, simple functions.
// Example : 
// let add = (a, b) => a + b;
// console.log(add(5, 3)); 
// Output : 8

// Q30: What will be the output?
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);
// Output: Hello

