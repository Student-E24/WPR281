// day3.js

// --- Loops ---
for (let i = 0; i < 3; i++) console.log("for:", i);

const colors = ["red", "green", "blue"];
for (const color of colors) console.log("for...of:", color);

const person = { name: "Ewald", age: 21 };
for (const key in person) console.log("for...in:", key, person[key]);

let w = 3;
while (w > 0) { console.log("while:", w); w--; }

let d = 0;
do { console.log("do...while:", d); d++; } while (d < 2);

// break & continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log("loop i:", i);
}

// --- Decisions ---
const score = 75;
if (score >= 75) console.log("Distinction");
else if (score >= 50) console.log("Pass");
else console.log("Fail");

const day = "Mon";
switch (day) {
  case "Mon": console.log("Start of week"); break;
  case "Fri": console.log("End of week"); break;
  default: console.log("Midweek");
}

// --- Functions ---
// Declaration
function greet(name = "World") {
  return `Hello, ${name}!`;
}
console.log(greet("Ewald"));

// Expression
const square = function (n) { return n * n; };
console.log(square(5));

// Arrow
const cube = (n) => n ** 3;
console.log(cube(3));

// Scope / hoisting
console.log(hoisted()); // works due to hoisting
function hoisted() { return "I am hoisted!"; }