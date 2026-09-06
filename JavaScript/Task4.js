// 1) Task1 - For Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2) Task2 - Reverse Number
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 3) Task3 - Even Number
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 4) Task4 - Odd Number
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// 5) Task5 - Multiplication Table
let num = prompt("Enter a number:");
for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}

// 6) Tas6 - Countdown(While)
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// 7) Task7 - Sum of Numbers(While)
i = 1;
let sum = 0;
while (i <= 10) {
  sum = sum + i;
  i++;
}
console.log(sum);

// 8) Task8 - Print Numbers(Do While)
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 9) Task9 - Do While Understanding
let a = 10;
do {
  console.log(a);
  a++;
} while (a <= 5);

//Why:A do...while loop always runs the body first, before it ever checks the condition. So even though a <= 5 is false right from the start (since a is 10), it doesn't matter — the code inside do{} already ran once and printed 10 before the condition was even looked at. After that one run, it checks 11 <= 5, sees it's false, and stops. That's the whole point of do...while — "do it first, check later."

// 10) Task10 - String Characters (for...of)
let name = "javascript";
for (let char of name) {
  console.log(char);
}

// 11) Task11 — Array Values (for...of)
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
  console.log(fruit);
}

// 12) Task12 — Student Names
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
for (let student of students) {
  console.log("Student: " + student);
}

// 13) Task13 — Employee Object (for...in)
let employee = {
  name: "Arun",
  age: 25,
  role: "Developer",
  city: "Chennai"
};
for (let key in employee) {
  console.log(key, employee[key]);
}

// 14) Task14 - Product Object
let product = {
  productName: "Laptop",
  price: 55000,
  brand: "Dell",
  category: "Electronics",
  stock: 20
};
for (let key in product) {
  console.log(key, product[key]);
}

// 15) Task15 - Simple Function
function welcome() {
  console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();

// 16) Task16 - Function With Parameter
function greet(name) {
  console.log("Hello " + name);
}
greet("Naveen");
greet("Arun");
greet("Priya");

// 17) Task17 - Multiple Parameters
function student(name, age, department) {
  console.log("Name: " + name);
  console.log("Age: " + age);
  console.log("Department: " + department);
}
student("pratish", 22, "CSE");
student("Arun", 23, "IT");
student("Priya", 21, "ECE");

// 18) Task18 - Addition Function
function add(a, b) {
  return a + b;
}
let result = add(10, 20);
console.log(result); 

// 19) Task19 - Salary
function salary(amount) {
  return amount;
}
let mySalary = salary(45000);
console.log(mySalary); 

// 20) Task20 - Bonus Calculator
function bonus(salary, bonusAmount) {
  return salary + bonusAmount;
}
let total = bonus(50000, 5000);
console.log(total);

// 21) Task21 - Default Parameter
function employees(name, role = "Developer") {
  console.log(name + " - " + role);
}
employees("Arun");  
employees("Priya", "Designer"); 

// 22) Task22 - Named Function
function square(number) {
  return number * number;
}
console.log(square(2)); 
console.log(square(4));  
console.log(square(6));  
console.log(square(8));  
console.log(square(10)); 

// 23) Task23 - Anonymous Function
let calculate = function (a, b) {
  return a + b;
};
console.log(calculate(15, 25));

// 24) Task24 - Arrow Function
let multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 5));

// 25) Task25 - Predict the Output (Scope)
// inside if
//  a= 10, b = 20, c = 30 but
// outside if
// a = 10, b = error : b is not defined, c = error : c is not defined

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    // console.log(b);
    // console.log(c);
}

test();

// var is function scoped or global scoped, so a can be accessed outside the if block but inside the function. let and const are block scoped, so b and c cannot be accessed outside the if block.

// 26) task26 - Hoisting (var)
// Output b = undefined
console.log(b);
var b = 10;

// the variable exists before the assignment, so its value is undefined.

// 27) Task27 - Hoisting (let)
// Output b = ReferenceError
// console.log(b);
// let b = 20;

// let is hoisted, but it cannot be accessed before its declaration is initialized.

//28) Task28 - Hoisting (const)
// Output c = ReferenceError
// console.log(c);
// const c = 30;

// const is hoisted, but it cannot be accessed before its declaration is initialized.

//Difference between the three:
//var → hoisted and initialized with undefined, so no error, just an odd undefined value.
//let → hoisted but stuck in the temporal dead zone, so accessing it early throws an error.
//const → same as let, hoisted into the temporal dead zone, throws the same kind of error — plus it must be given a value the moment it's declared.

// 29) task29 - Self Invoking Function (IIFE)
(function () {
  console.log("Welcome to JavaScript");
})();
(function (product, discount) {
  console.log(product + " has a discount of " + discount + "%");
})("Laptop", 10);

// 30) task30 - Callback / Higher-Order Function
function welcome() {
  console.log("Welcome");
}
function execute(callback) {
  callback();
}
execute(welcome);

// welcome → Callback function
// execute → Higher-order function
// welcome is passed as an argument to execute.

//31) Task31 - callback (Generator Function)
function* cashback() {
  yield "10% cashback";
  yield "20% cashback";
  yield "30% cashback";
  yield "Better luck next time";
}
let offers = cashback();
for (let offer of offers) {
  console.log(offer);
}


// 32) Task32 - Final Mini Project: Employee Management Console
employees = [
  {
    name: "Arun",
    age: 25,
    department: "IT",
    role: "Developer",
    salary: 40000
  },
  {
    name: "Priya",
    age: 24,
    department: "HR",
    role: "HR Executive",
    salary: 35000
  }
];

// 1. for...of — print every employee
for (let emp of employees) {
  console.log(emp);
}

// 2. for...in — print each employee's keys and values
for (let emp of employees) {
  for (let key in emp) {
    console.log(key + ": " + emp[key]);
  }
  console.log("-----------------------");
}

// 3 & 4. Function with parameters — display employee info
function displayEmployee(emp) {
  console.log(`Name: ${emp.name}, Age: ${emp.age}, Department: ${emp.department}, Role: ${emp.role}, Salary: ${emp.salary}`);
}

for (let emp of employees) {
  displayEmployee(emp);
}

// 5. Function with return — get an employee's salary
function getSalary(emp) {
  return emp.salary;
}

console.log(getSalary(employees[0]));

// 6. Condition — check salary >= 40000
for (let emp of employees) {
  if (emp.salary >= 40000) {
    console.log(emp.name + " earns 40000 or more");
  } else {
    console.log(emp.name + " earns less than 40000");
  }
}

// 7. Arrow function — simple calculation (yearly salary)
let yearlySalary = (monthlySalary) => monthlySalary * 12;
console.log(yearlySalary(employees[0].salary));

// 8. Generator — employee benefits
function* benefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}
let empBenefits = benefits();
for (let benefit of empBenefits) {
  console.log(benefit);
}
