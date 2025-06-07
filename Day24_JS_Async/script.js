// 🔸 1. setTimeout - delay ke liye
console.log("Start");
setTimeout(() => {
  console.log("Hello from setTimeout (runs after 2 seconds)");
}, 2000);
console.log("End");

// 🔸 2. setInterval - har interval mai repeat
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Repeating every 1 second:", count);
  if (count === 3) clearInterval(intervalId); // 3 bar ke baad stop
}, 1000);

// 🔸 3. Callback Function
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some Data";
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log("Callback got:", result);
});

// 🔸 4. Promise - Asynchronous value return krta hai
const promiseExample = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise Resolved ✅");
  } else {
    reject("Promise Rejected ❌");
  }
});

promiseExample
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// 🔸 5. async / await - modern syntax promises ke liye
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runAsync() {
  console.log("⏳ Waiting...");
  await wait(2000);
  console.log("✅ Done Waiting after 2s (using async/await)");
}

runAsync();

// 🔸 6. Fetch API (Real Data from API)
async function getUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log("Fetched User:", user);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
getUser();
