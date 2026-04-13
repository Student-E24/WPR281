// day1.js - Run with: node day1.js

// Basic output
console.log("Hello, World!");
console.warn("This is a warning");
console.error("This is an error");

// Basic input via process.argv (node day1.js YourName)
const name = process.argv[2] || "Student";
console.log(`Welcome, ${name}!`);

// V8 / Node info
console.log("Node version:", process.version);
console.log("Platform:", process.platform);