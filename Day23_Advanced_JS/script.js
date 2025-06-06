// 🔹 let vs const vs var
var a = 10;
var a = 33;
let b = 20;
const c = 30;
console.log("var:", a, "let:", b, "const:", c);

// 🔹 Arrow Function
const greet = (name) => `Hello, ${name}`;
console.log(greet("Sujal"));

// 🔹 Template Literals
const age = 21;
console.log(`My name is Sujal and I am ${age} years old.`);

// 🔹 Destructuring (Array)
const arr = [1, 2, 3];
const [x, y] = arr;
console.log("x:", x, "y:", y);

// 🔹 Destructuring (Object)
const user = { name: "Sujal", age: 21 };
const { name, age: userAge } = user;
console.log(`${name} is ${userAge} years old.`);

// 🔹 Spread Operator
const nums1 = [1, 2];
const nums2 = [...nums1, 3, 4];
console.log("Spread Array:", nums2);

// 🔹 Rest Operator
const sum = (...numbers) => {
  return numbers.reduce((acc, val) => acc + val, 0);
};
console.log("Sum using rest:", sum(1, 2, 3, 4));

// 🔹 map()
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log("Mapped (doubled):", doubled);

// 🔹 filter()
const evens = numbers.filter(num => num % 2 === 0);
console.log("Filtered (even):", evens);

// 🔹 reduce()
const total = numbers.reduce((acc, val) => acc + val, 0);
console.log("Reduced (sum):", total);

// 🔹 Bonus Task:
const users = [
  { name: "Sujal", age: 21 },
  { name: "Aman", age: 22 },
  { name: "Ravi", age: 20 }
];

const userInfo = users.map(({ name, age }) => `${name} is ${age}`);
console.log("User Info:", userInfo);
