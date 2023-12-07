//* singleton
// object jab construntor se agar banega toh singleton hoga varna nhi
// leterals ki tarah declare karne par object singleton nhi hoga

// construstor se
Object.create;

// Object literals

const mySym = Symbol("alpha");

const user = {
  name: "Gaurav",
  "full name": "Gaurav Garwa",
  email: "gaurav@google.com",
  age: "21",
  isEmployeed: false,
  langages: ["java", "cpp"],
  [mySym]: "alpha",
};

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user[mySym]);
// console.log(user);

// Object.freeze(user); // no changes will be reflected
// user.email = "gaurav@apple.com";
// console.log(user);

user.greeting = function () {
  console.log("Welcome dear");
};
user.grettingWithName = function () {
  console.log(`"Welcome", ${this.name}`);
};

console.log(user.greeting());
console.log(user.grettingWithName());
