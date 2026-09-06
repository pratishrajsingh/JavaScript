// 1) Task1 - Variables
var name = "Pratish";
let age = 22;
const city = "Hyderabad";
const college = "ABC College";

console.log(name);
console.log(age);
console.log(city);
console.log(college);

// Change the var value
name = "Ravi";
console.log(name);

// Change the let value
age = 23;
console.log(age);

// changing the const value
// city = "Chennai";
// TypeError: Assignment to constant variable.

// Redeclare var
var name = "Kumar";
console.log(name);

// Redeclare let (throws an error)
// let age = 25;
// SyntaxError: Identifier 'age' has already been declared

// Redeclare const (throws an error)
// const city = "Madurai";
// SyntaxError: Identifier 'city' has already been declared

// 2) Task2 - Printing Statements
console.log("Hello JavaScript!");

alert("This is an alert box!");

let isSure = confirm("Are you sure you want to continue?");

let userInput = prompt("Enter name:");
console.log("User input: " + userInput);

let language = prompt("Enter your favorite programming language:");
document.writeln(language);

// 3) Task3 - User Details
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
let userCity = prompt("Enter your city:");
let userQualification = prompt("Enter your qualification:");

console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("City: " + userCity);
console.log("Qualification: " + userQualification);

// 4) Task4 - Find Data Types
let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(a, typeof a); 
console.log(b, typeof b); 
console.log(c, typeof c); 
console.log(d, typeof d); 
console.log(e, typeof e); 
console.log(f, typeof f); 
console.log(g, typeof g); 

// 5) Task5 - Student Array
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log(students[0]);                     
console.log(students[1]);                    
console.log(students[students.length - 1]);   
console.log(students.length); 

// 6) Task6 - Employee Object
const employee = {
  name: "Pratish",
  age: 24,
  role: "Developer",
  skills: ["JavaScript", "React", "Node.js"],
  isWorking: true,
  qualification: ["B.E Computer Science", "CITNC"]
};

console.log(employee.name);                                      
console.log(employee.age);                                         
console.log(employee.role);                                        
console.log(employee.skills[0]);                                   
console.log(employee.qualification[employee.qualification.length - 1]); 
console.log(employee.isWorking);   

// 7) Task7 - Calculator
let h = 20;
let i = 5;
console.log("Addition: " + (h + i));
console.log("Subtraction: " + (h - i));
console.log("Multiplication: " + (h * i));
console.log("Division: " + (h / i));
console.log("Modulus: " + (h % i));
console.log("Exponentiation: " + (h ** i));

// 8) Task8 - Shopping Bill
const shirt = 999;
const pant = 1499;
const shoes = 1999;
const bag = 799;
const total = shirt + pant + shoes + bag;
console.log("Total price: " + total); 

// 9) Task9 - Increment and Decrement
//A
// a = 11, b = 10
a = 10;
b = a++;
console.log(a);
console.log(b); 

//B
// a = 11, b = 11
a = 10;
b = ++a;
console.log(a); 
console.log(b); 

//C
// a = 9, b = 10
a = 10;
b = a--;
console.log(a); 
console.log(b);

//D
// a = 9, b = 9
a = 10;
b = --a;
console.log(a); 
console.log(b);

// 10) Task10 - Assignment Operators
let num = 10;

num += 5; 
console.log(num);

num -= 3;   
console.log(num);

num *= 2;   
console.log(num);

num /= 4;  
console.log(num);

num %= 3;   
console.log(num);

num **= 2; 
console.log(num);

// 11) Task11 - Comparison Operator Tasks
console.log(10 > 5);
// Output: true
console.log(10 < 5);
// Output: false
console.log(10 >= 10);
// Output: true
console.log(10 <= 9);
// Output: false

console.log(5 == "5");
// Output: true
console.log(5 === "5");
// Output: false

console.log(10 != "10");
// Output: false
console.log(10 !== "10");
// Output: true

// 12) Task12 - Logical AND
console.log(true && true);
// Output: true
console.log(true && false);
// Output: false
console.log(false && true);
// Output: false
console.log(false && false);
// Output: false

// 13) Task13 - Logical OR
console.log(true || true);
// Output: true
console.log(true || false);
// Output: true
console.log(false || true);
// Output: true
console.log(false || false);
// Output: false

// 14) Task14 - Logical NOT
console.log(!true);
// Output: false
console.log(!false);
// Output: true
console.log(!(5 > 10));
// Output: true
console.log(!(10 > 5));
// Output: false

// 15) Task15 - Combination
console.log(5 == "5" && !(5 === 5) || 6 > 7);
// Output: false
console.log(10 > 5 && 8 < 12 || 4 === "4");
// Output: true
console.log(7 === 7 && 10 != "10" || 5 >= 5);
// Output: true
console.log(15 < 10 || 20 > 15 && 5 == "5");
// Output: true

// 16) Task16 - Voting
age = 20;
let result = age >= 18 ? "Eligible to vote" : "Not eligible";
console.log(result);

// 17) Task17 - Password
let password = true;
let message = password ? "Password is correct" : "Password is incorrect";
console.log(message);

// 18) Task18 - User Introduction
name = "Rahul";
age = 22;
let City = "Bihar";
// Using +
console.log("My name is " + name + ". I am " + age + " years old. I live in " + City + ".");
// Using template literals
console.log(`My name is ${name}. I am ${age} years old. I live in ${City}.`);

// 19) Task19 - String Conversion
console.log(String(100), typeof String(100));         
console.log(String(true), typeof String(true));       
console.log(String(undefined), typeof String(undefined)); 
console.log(String(null), typeof String(null));       
console.log(String([1, 2]), typeof String([1, 2])); 

// 20) Task20 - Number Conversion
console.log(Number());
// Output: 0
console.log(Number(""));
// Output: 0
console.log(Number("123"));
// Output: 123
console.log(Number("a1"));
// Output: NaN
console.log(Number(true));
// Output: 1
console.log(Number(false));
// Output: 0
console.log(Number(undefined));
// Output: NaN
console.log(Number(null));
// Output: 0

// 21) Task21 - Boolean Conversion
console.log(Boolean());
// Output: false
console.log(Boolean(""));
// Output: false
console.log(Boolean("hello"));
// Output: true
console.log(Boolean(123));
// Output: true
console.log(Boolean(true));
// Output: true
console.log(Boolean(false));
// Output: false
console.log(Boolean(undefined));
// Output: false
console.log(Boolean(null));
// Output: false
console.log(Boolean([]));
// Output: true
console.log(Boolean({}));
// Output: true

// 22) Task22 - Voting Eligibility
age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// 23) Task23 - Positive or Negative
num = prompt("Enter a number:");
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 24) Task24 - Grade System
let marks = prompt("Enter your marks:");
if (marks >= 90 && marks <= 100) {
  console.log("A Grade");
} else if (marks >= 80) {
  console.log("B Grade");
} else if (marks >= 70) {
  console.log("C Grade");
} else if (marks >= 60) {
  console.log("D Grade");
} else {
  console.log("Fail");
}

// 25) Task25 - Job Eligibility
age = prompt("Enter your age:");
let height = prompt("Enter your height (cm):");
let weight = prompt("Enter your weight (kg):");
if (age >= 18) {
  if (height >= 160) {
    if (weight >= 60) {
      console.log("Congratulations! You are selected");
    } else {
      console.log("Sorry, weight requirement not met");
    }
  } else {
    console.log("Sorry, height requirement not met");
  }
} else {
  console.log("Sorry, age requirement not met");
}

// 26) Task26 - Traffic Light
let color = prompt("Enter traffic light color (red/yellow/green):");
switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

// 27) Task27 - Day
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 28) Task28 - Final Mini Project: Student Result System
// Step 1 — Get user details
name = prompt("Enter your name:");
age = Number(prompt("Enter your age:"));
let placeCity = prompt("Enter your city:");

// Step 2 — Get marks
let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));

// Step 3 — Calculate
let Total = tamil + english + maths;
let average = Total / 3;

// Step 4 — Check result
let grade;
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "Fail";
}

// Step 5 — Check voting
let voting = age >= 18 ? "Eligible" : "Not eligible";

// Step 6 — Display
console.log(`Name: ${name}
Age: ${age}
City: ${placeCity}
Total: ${Total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}`);