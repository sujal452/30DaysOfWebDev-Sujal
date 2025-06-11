// 🔁 1. Array.map()
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log("map:", doubled); // [2, 4, 6]

// 🔍 2. Array.filter()
const ages = [12, 18, 25];
const adults = ages.filter(age => age >= 18);
console.log("filter:", adults); // [18, 25]

// 🔎 3. Array.find()
const users = [{id: 1}, {id: 2}];
const found = users.find(user => user.id === 2);
console.log("find:", found); // {id: 2}

// 🔄 4. forEach()
const fruits = ["apple", "banana"];
fruits.forEach(fruit => console.log("forEach:", fruit));

// ➕ 5. reduce()
const prices = [100, 200, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("reduce:", total); // 600

// 🔥 ES6+ Features

// ✅ let vs const
let city = "Delhi";
city = "Shimla";
const country = "India"; // constant

// ✅ Template Literals
const name = "Sujal";
console.log(`Hi, I'm ${name} from ${city}, ${country}`);

// ✅ Arrow Functions
const greet = name => `Hello, ${name}`;
console.log(greet("Anshika"));

// ✅ Spread Operator
const a = [1, 2];
const b = [...a, 3]; // [1, 2, 3]
console.log("Spread:", b);

// ✅ Object Destructuring
const user = {username: "Sujal", age: 22};
const {username, age} = user;
console.log("Destructured:", username, age);

// ✅ Ternary Operator
const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome!" : "Login First");
