// 1️⃣ Array Example
const subjects = ["HTML", "CSS", "JavaScript"];
console.log("Subjects:", subjects);
console.log("First Subject:", subjects[0]); // Accessing first subject

// 2️⃣ Object Example
const student = {
  name: "Sujal",
  age: 21,
  city: "Dharamshala",
};
console.log("Student Object:", student);
console.log("Name:", student.name);
console.log("City:", student["city"]);

// 3️⃣ DOM Manipulation - Adding list items dynamically
const ul = document.getElementById("subject-list");

// Looping through subjects array and adding to list
subjects.forEach((subject) => {
  const li = document.createElement("li"); // Create <li>
  li.textContent = subject; // Set text inside <li>
  ul.appendChild(li); // Add <li> to <ul>
});

// 4️⃣ DOM Manipulation - Updating text on button click
function changeTitle() {
  const heading = document.getElementById("title");
  heading.textContent = "JavaScript DOM is Awesome!";
}
