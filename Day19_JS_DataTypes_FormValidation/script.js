function validateForm() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const msg = document.getElementById("message");

  // Check if name is empty
  if (name.trim() === "") {
    msg.textContent = "⚠️ Name is required.";
    return false;
  }

  // Check if age is less than 18
  if (age < 18) {
    msg.textContent = "❌ You must be at least 18 years old.";
    return false;
  }

  msg.textContent = `✅ Welcome, ${name}! You're eligible.`;
  return true; // to prevent actual form submission for now
}
