// day6.js

const students = [
  { id: 1, name: "Ewald", mark: 82, subject: "WPR" },
  { id: 2, name: "Thabo", mark: 55, subject: "WPR" },
  { id: 3, name: "Aisha", mark: 91, subject: "WPR" },
  { id: 4, name: "Lena",  mark: 40, subject: "WPR" },
];

// find
console.log(students.find((s) => s.name === "Aisha"));

// filter
const passed = students.filter((s) => s.mark >= 50);
console.log("Passed:", passed.map((s) => s.name));

// map
const report = students.map(({ name, mark }) => ({
  name,
  mark,
  result: mark >= 75 ? "Distinction" : mark >= 50 ? "Pass" : "Fail",
}));
console.table(report);

// sort
const ranked = [...students].sort((a, b) => b.mark - a.mark);
console.log("Ranked:", ranked.map((s) => s.name));

// reduce - average mark
const avg =
  students.reduce((sum, s) => sum + s.mark, 0) / students.length;
console.log("Average:", avg.toFixed(2));

// some / every
console.log("Any distinction?", students.some((s) => s.mark >= 75));
console.log("All passed?", students.every((s) => s.mark >= 50));