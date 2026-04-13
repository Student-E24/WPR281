// day5.js

// --- Literal notation ---
const student = {
  name: "Ewald",
  age: 21,
  _grade: "A",
  get grade() { return this._grade; },
  set grade(g) {
    if (["A", "B", "C"].includes(g)) this._grade = g;
    else console.log("Invalid grade");
  },
  greet() { return `Hi, I'm ${this.name}`; },
};

console.log(student.greet());
student.grade = "B";
console.log(student.grade);

// --- Constructor function ---
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar);

// --- Object.create() ---
const proto = { describe() { return `${this.make} ${this.model}`; } };
const car2 = Object.create(proto);
car2.make = "Honda";
car2.model = "Civic";
console.log(car2.describe());

// --- Manipulate properties ---
student.email = "ewald@test.com";
delete student.email;
console.log("email" in student); // false

// --- Iterate ---
for (const [key, val] of Object.entries(student)) {
  if (typeof val !== "function") console.log(key, ":", val);
}