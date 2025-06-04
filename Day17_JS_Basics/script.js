// 1️⃣ Variables
let name = "Sujal";
const age = 21;
var city = "Dharamshala";
console.log("Name:", name, "Age:", age, "City:", city);

// 2️⃣ Data Types
let isStudent = true;
let score = 99.5;
let subjects = ["HTML", "CSS", "JS"];
console.log(typeof isStudent, typeof score, typeof subjects);

// 3️⃣ Functions
// function greet(user) {
//   return "Hello, " + user + "!";
// }
// console.log(greet("Sujal"));

//3 function
function test(user){
    return "hello," + user +"!";
}
console.log(test("sujal"));

// 4️⃣ Conditionals
let marks = 70;
if(marks >=90){
    console.log("grade:A+");
}
else if (marks >=80){
    console.log("grade : b")
}
else {
    console.log("fail")
}

// 5️⃣ Loops

for (let i = 1; i<=3; i++){
    console.log("show", i);
}