// day4.js

// --- Creating arrays ---
const arr1 = new Array(3).fill(0);
const fruits = ["apple", "banana", "cherry"];

// --- Access ---
console.log(fruits[0], fruits.at(-1));

// --- Add / Remove ---
fruits.push("date");        // end
fruits.pop();               // remove end
fruits.unshift("avocado");  // front
fruits.shift();             // remove front
console.log(fruits);

// --- Slice / Splice ---
const sliced = fruits.slice(0, 2);      // non-mutating
const spliced = [...fruits];
spliced.splice(1, 1, "mango");          // mutating
console.log("sliced:", sliced);
console.log("spliced:", spliced);

// --- Spread ---
const more = [...fruits, "grape", "kiwi"];
console.log("spread:", more);

// --- Iteration ---
fruits.forEach((f, i) => console.log(i, f));

// --- Search ---
console.log(fruits.find((f) => f.startsWith("b")));
console.log(fruits.findIndex((f) => f === "cherry"));
console.log(fruits.includes("banana"));

// --- Transform ---
const upper = fruits.map((f) => f.toUpperCase());
const long = fruits.filter((f) => f.length > 5);
const total = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
console.log(upper, long, total);