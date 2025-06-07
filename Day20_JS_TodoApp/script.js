function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  const ul = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;

  // ❌ Add delete option
  const span = document.createElement("span");
  span.textContent = "❌";
  span.onclick = function () {
    ul.removeChild(li);
  };

  li.appendChild(span);
  ul.appendChild(li);
  input.value = ""; // clear input after adding
}
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

if (task === ""){
  alert("ebter a task");
  return;
}
const ul = document.getElementById("taskImput");
const li = document.createElement("li");
li.textContent=task;


}
