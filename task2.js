// 1) Task1 - using var, let, const
var studentName = "Pratish";
let studentAge = 24;
const collegeName = "Cambridge Institute of Technology North Campus";
console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "Rahul";
console.log(studentName);

studentAge = 22;
console.log(studentAge);

// collegeName = "ABC college";
// TypeError: Assignment to constant variable. (Cannot reassign a const variable)

var studentName = "Ram";
console.log(studentName);

// let studentAge = 23;
// SyntaxError: Identifier 'studentAge' has already been declared (Cannot redeclare a let variable)

// 2) Task2 - user information
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);

// 3) Task3 - Welcome message
let userName = prompt("Enter your name:");
alert("Welcome, " + userName + "!");

// 4) Task4 - Age calulator
let birthYear = prompt("Enter your birth year:");
let currentYear = 2026;
let userAge = currentYear - birthYear;
console.log("Birth Year: " + birthYear);
console.log("Current Year: " + currentYear);
console.log("Your Age: " + userAge);

// 5) Task5 - Identified data types
let a = "Hello";
let b = 100;
let c = 25.5;
let d = true;
let e = false;
let f = undefined;
let g = null;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// 6) Task6 - Student Data
let student = {
    name: "Hari",
    age: 20,
    city: "New Delhi",
    qualification: "Bachelor's Degree",
    isStudent: true
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

// 7) Task7 - Fruits Array
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Papaya"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

// 8) Task8 - Basic Calculator
let num1 = 20;
let num2 = 5;
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Modulus: " + (num1 % num2));
console.log("Exponentiation: " + (num1 ** num2));

// 9) Task9 - Shopping Bill
shirt = 999;
pant = 1499;
shoes = 1999;
let total = shirt + pant + shoes;
console.log("Total Bill: " + total);

// 10) Task10 - Simple mark calculation
let tamil = 85;
let english = 75;
let maths = 95;
let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;
console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks);

// 11) Task11 - Post Increment
// a = 11, b = 10
a  = 10;
b = a++;
console.log(a);
console.log(b);

// 12) Task12 - Pre Increment
// a = 11, b = 11
a = 10;
b = ++a;
console.log(a);
console.log(b);

// 13) Task13 - Post Decrement
// a = 19, b = 20
a = 20;
b = a--;
console.log(a);
console.log(b);

// 14) Task14 - Pre Decrement
// a = 19, b = 19
a = 20;
b = --a;
console.log(a);
console.log(b);

// 15) Task15 - Find the final values
// a = 7, b = 4, c = 7, d = 5
a = 5;
b = a++;
c = ++a;
d = b--;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 16) Task16 - Assignment Operators
let num = 10;
num += 5; 
console.log(num);
num -= 2; 
console.log(num);
num *= 3;
console.log(num);
num /= 2;
console.log(num);
num %= 5;
console.log(num);
num **= 2;
console.log(num);

// 17) Task17 - Mini Student Profile
let Name = "Pratish";
    studentAge = 24;
    studentCity = "Bihar";
let college = "Cambridge Institute of Technology North Campus";
let subjects = ["JavaScript", "HTML", "CSS", "Java","MySQL"];
student = {
    name: Name,
    age: studentAge,
    city: studentCity,
    subjects: subjects,
    isStudent: true,
};
console.log("Student Name: " + student.name);
console.log("Student Age: " + student.age);
console.log("City: " + student.city);
console.log("First Subject: " + student.subjects[0]);
console.log("Last Subject: " + student.subjects[student.subjects.length - 1]);
console.log("Total Subjects: " + student.subjects.length);
console.log(student);

// Final Challenge - Task18 - User + calculator
let num3 = Number(prompt("Enter first number:"));
let num4 = Number(prompt("Enter second number:"));
let addition = num3 + num4;
let subtraction = num3 - num4;
let multiplication = num3 * num4;
let division = num3 / num4;
let modulus = num3 % num4;
let power = num3 ** num4;

console.log("Addition: " + addition);
console.log("Subtraction: " + subtraction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);
console.log("Modulus: " + modulus);
console.log("Power: " + power);



