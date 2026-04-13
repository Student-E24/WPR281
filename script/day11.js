// day11.js - Run with: node day11.js

console.log("1 - Start (synchronous)");

setTimeout(() => console.log("3 - setTimeout (macrotask)"), 0);

Promise.resolve().then(() => console.log("2.5 - Promise (microtask)"));

console.log("2 - End (synchronous)");

// Output order: 1 -> 2 -> 2.5 -> 3
// Demonstrates: call stack -> microtask queue -> macrotask queue

// --- Blocking vs non-blocking ---
function blockingTask() {
  const end = Date.now() + 500; // simulate 500ms block
  while (Date.now() < end) {}
  console.log("Blocking task done");
}

// Async with callback
function asyncTask(cb) {
  setTimeout(() => {
    cb("Async result");
  }, 100);
}

blockingTask();
asyncTask((result) => console.log("Callback:", result));
console.log("This runs before asyncTask callback");