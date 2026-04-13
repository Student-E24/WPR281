// day2.js

// --- Variables ---
let age = 21;
const PI = 3.14159;
var legacy = "avoid var";

// --- Datatypes ---
let str = "Hello";
let num = 42;
let big = 9007199254740991n; // BigInt
let bool = true;
let undef;
let sym = Symbol("id");
let nothing = null;

console.log(typeof str, typeof num, typeof big, typeof bool);
console.log(typeof undef, typeof sym, typeof nothing); // note: typeof null === "object"

// --- Falsy values ---
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach((v) => console.log(`${String(v)} is falsy:`, !v));

// --- Numbers ---
console.log(0.1 + 0.2); // floating point quirk
console.log(Number.isInteger(4.0));
console.log(Math.round(4.567));
console.log(parseInt("42px"));
console.log(parseFloat("3.14abc"));

// --- Dates ---
const now = new Date();
console.log("Full date:", now.toLocaleDateString());
console.log("Year:", now.getFullYear());
console.log("Month (0-indexed):", now.getMonth());

// --- Strings ---
const greeting = "  Hello WPR!  ";
console.log(greeting.trim());
console.log(greeting.toUpperCase());
console.log(greeting.includes("WPR"));
console.log(`Template literal: ${str} ${num}`);

// --- Operators ---
console.log(10 % 3);       // arithmetic
console.log("5" == 5);     // loose equality (true)
console.log("5" === 5);    // strict equality (false)
console.log(true && false);
console.log(true || false);
console.log(!true);
let x = 5;
x += 3;
console.log(x); // 8