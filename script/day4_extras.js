// day4_extras.js - node script/day4_extras.js

// Bubble sort
function bubbleSort(arr) {
  const a = [...arr]; // non-mutating copy
  const n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]; // destructure swap
      }
    }
  }
  return a;
}

const arr = [2, 8, 1, 4, 6];
console.log("Unsorted:", arr);
console.log("Sorted:  ", bubbleSort(arr));

// Matrix operations
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Lower triangle
console.log("\n-- Lower Triangle --");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write(`${matrix[i][j]} `);
  }
  if (i > 0) console.log();
}

// Each row
console.log("\n-- Each Row --");
for (const row of matrix) console.log(row);

// Flatten
console.log("\n-- Flattened --");
console.log(matrix.flat());

// Diagonal
console.log("\n-- Diagonal --");
for (let i = 0; i < matrix.length; i++) console.log(matrix[i][i]);