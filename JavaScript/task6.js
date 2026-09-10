// Task1 - Student Result Analyzer
function studentResult(name, department, marks) {
  let total = marks.reduce((sum, mark) => sum + mark, 0);
  let average = total / marks.length;
  let status = average >= 50 ? "Pass" : "Fail";
  let grade;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 75) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "Fail";
  }
  console.log(`Name: ${name}`);
  console.log(`Department: ${department}`);
  console.log(`Total Marks: ${total}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Status: ${status}`);
  console.log(`Grade: ${grade}`);
}
studentResult("Pratish", "CSE", [85, 90, 96, 88, 92]);

// Task 2 — Employee Salary Calculator
let employee = {
  name: "Arun",
  role: "Developer",
  salary: 45000,
  experience: 2
};
function calculateSalary(emp) {
  let bonus = 0;
  if (emp.experience >= 5) {
    bonus = emp.salary * 0.15;
  } else if (emp.experience >= 2) {
    bonus = emp.salary * 0.10;
  }
  let finalSalary = emp.salary + bonus;
  console.log(`Name: ${emp.name}`);
  console.log(`Basic Salary: ${emp.salary}`);
  console.log(`Bonus: ${bonus}`);
  console.log(`Final Salary: ${finalSalary}`);
}
calculateSalary(employee);

// Task 3 — Product Filter System
let products = [
  { name: "Laptop", price: 55000, category: "electronics" },
  { name: "Mouse", price: 800, category: "electronics" },
  { name: "Shirt", price: 1200, category: "fashion" },
  { name: "Shoes", price: 2500, category: "fashion" },
  { name: "Phone", price: 30000, category: "electronics" }
];

// 1. Products above ₹2,000
let expensive = products.filter(p => p.price > 2000);
console.log(expensive);

// 2. Only electronics
let electronics = products.filter(p => p.category === "electronics");
console.log(electronics);

// 3. First product below ₹1,000
let cheapest = products.find(p => p.price < 1000);
console.log(cheapest);

// 4. Total price of all products
let total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total);

// 5. Any product cost more than ₹50,000
let hasExpensive = products.some(p => p.price > 50000);
console.log(hasExpensive);

// 6. Every product has a price above ₹500
let allAboveFive = products.every(p => p.price > 500);
console.log(allAboveFive);

// Task 4 — Employee Management
let employees = [
  { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
  { id: 102, name: "Naveen", role: "Backend Developer", salary: 48000 },
  { id: 103, name: "Priya", role: "UI Designer", salary: 35000 },
  { id: 104, name: "Arun", role: "Tester", salary: 30000 },
  { id: 105, name: "Divya", role: "Manager", salary: 60000 },
  { id: 106, name: "Karthik", role: "DevOps Engineer", salary: 52000 }
];

// Display all employee names
let names = employees.map(emp => emp.name);
console.log(names);

// Employees earning above ₹40,000
let highEarners = employees.filter(emp => emp.salary > 40000);
console.log(highEarners);

// Find employee with ID 103
let employee103 = employees.find(emp => emp.id === 103);
console.log(employee103);

// Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

// Highest-paid employee
let highestPaid = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
console.log(highestPaid);

// Sort employees highest to lowest salary
let sortedBySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log(sortedBySalary);

// New array containing only employee names
let onlyNames = employees.map(emp => emp.name);
console.log(onlyNames);

// Task 5 — Shopping Cart
let cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 1 }
];
function calculateCart(cart) {
  let cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = cartTotal > 50000 ? cartTotal * 0.10 : 0;
  let finalAmount = cartTotal - discount;
  console.log(`Cart Total: ${cartTotal}`);
  console.log(`Discount: ${discount}`);
  console.log(`Final Payable Amount: ${finalAmount}`);
}
calculateCart(cart);

// Task 6 — Student Search System
let students = [
  { name: "Arun", age: 21, mark: 85 },
  { name: "Priya", age: 22, mark: 92 },
  { name: "Karthi", age: 20, mark: 67 },
  { name: "Dinesh", age: 23, mark: 45 }
];

// 1. All student names
names = students.map(s => s.name);
console.log(names);

// 2. Students who scored above 80
let toppers = students.filter(s => s.mark > 80);
console.log(toppers);

// 3. Find student named "Priya"
let priya = students.find(s => s.name === "Priya");
console.log(priya);

// 4. Average mark
let average = students.reduce((sum, s) => sum + s.mark, 0) / students.length;
console.log(average);

// 5. Check whether anyone failed
let anyoneFailed = students.some(s => s.mark < 50);
console.log(anyoneFailed);

// 6. Check whether everyone score above 40
let allAboveForty = students.every(s => s.mark > 40);
console.log(allAboveForty);

// 7. Sort students by marks
let sortedStudents = [...students].sort((a, b) => b.mark - a.mark);
console.log(sortedStudents);


// Task 7 — Array Transformation Challenge
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// 1. New array containing Numbers × 2
let doubled = numbers.map(n => n * 2);
console.log(doubled);

// 2. Only even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

// 3. Numbers greater than 15
let above15 = numbers.filter(n => n > 15);
console.log(above15);

// 4. First number greater than 20
let firstAbove20 = numbers.find(n => n > 20);
console.log(firstAbove20);

// 5. Total of all numbers
total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total);

// 6. Check whether any number greater than 40?
let anyAbove40 = numbers.some(n => n > 40);
console.log(anyAbove40);

// 7. Check whether every number is positive
let allPositive = numbers.every(n => n > 0);
console.log(allPositive);

// 8. Sort highest to lowest
let sortedDesc = [...numbers].sort((a, b) => b - a);
console.log(sortedDesc);


// Task 8 — String Analyzer
let sentence = prompt("Enter a sentence:");
console.log("Total characters: " + sentence.length);
console.log("Uppercase: " + sentence.toUpperCase());
console.log("Lowercase: " + sentence.toLowerCase());
console.log("Contains 'JavaScript': " + sentence.includes("JavaScript"));
console.log("First character: " + sentence.slice(0, 1));
console.log("Last character: " + sentence.slice(-1));
console.log("Number of words: " + sentence.split(" ").length);
console.log("Replaced: " + sentence.replace("JavaScript", "Python"));
console.log("As array: " + sentence.split(" "));


// Final Mini Project — Employee Dashboard
employees = [
  { id: 101, name: "Arun", department: "IT", salary: 45000, experience: 2 },
  { id: 102, name: "Priya", department: "HR", salary: 50000, experience: 4 },
  { id: 103, name: "Karthi", department: "IT", salary: 65000, experience: 6 }
];

// 1. Employee List — display all employees
function listEmployees() {
  employees.forEach(emp => console.log(emp));
}
listEmployees();

// 2. Search employee by name
function searchByName(name) {
  return employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
}
console.log(searchByName("Priya"));

// 3. Filter employees by department
function filterByDepartment(dept) {
  return employees.filter(emp => emp.department === dept);
}
console.log(filterByDepartment("IT"));

// 4. Employees earning more than ₹50,000
function highSalaryEmployees() {
  return employees.filter(emp => emp.salary > 50000);
}
console.log(highSalaryEmployees());

// 5. Total company salary
function TotalSalary() {
  return employees.reduce((sum, emp) => sum + emp.salary, 0);
}
console.log(TotalSalary());

// 6. Highest-paid employee
function highestPaidEmployee() {
  return employees.reduce((max, emp) => emp.salary > max.salary ? emp : max);
}
console.log(highestPaidEmployee());

// 7. Employees with more than 3 years' experience
function experiencedEmployees() {
  return employees.filter(emp => emp.experience > 3);
}
console.log(experiencedEmployees());

// 8. Sort employees by salary
function sortBySalary(order = "asc") {
  return [...employees].sort((a, b) =>
    order === "asc" ? a.salary - b.salary : b.salary - a.salary
  );
}
console.log(sortBySalary("asc"));
console.log(sortBySalary("desc"));

// 9. Statistics
function showStatistics() {
  let total = TotalSalary();
  let highest = highestPaidEmployee().salary;
  let average = total / employees.length;
  console.log(`Total Employees: ${employees.length}`);
  console.log(`Total Salary: ₹${total}`);
  console.log(`Highest Salary: ₹${highest}`);
  console.log(`Average Salary: ₹${average.toFixed(0)}`);
}
showStatistics();