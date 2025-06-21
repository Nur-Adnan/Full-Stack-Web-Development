//  Variables

var a = 10;
console.log("Before");
console.log(a);
a = 20;
console.log("After");
console.log(a);

// Array
const arr = [1, 2, "Adnan"];
console.log(arr[0]);

// Functions
function hello(name) {
  return "Hello " + name;
}

const greet = hello("Adnan");
console.log(greet);

// conditions

age = 18;
if (age >= 18) {
  console.log("Can Vote");
} else {
  console.log("Can't Vote");
}

// make it in function

function canVote(age) {
  if (age >= 18) {
    return "Can Vote";
  } else {
    return "Can't Vote";
  }
}

let ans = canVote(10);
console.log(ans);

// Array

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Helen",
];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// object

let user = {
  name: "Adnan",
  age: 10,
};

console.log(user.name);
console.log(user["age"]);

// array of object

let countries = [
  "Bangladesh",
  {
    city: ["Dhaka", "Chittagong", "Syhlet"],
  },
];

console.log(countries[1].city[0]);

// create a function that takes an array of objects as input,
// and return the users whose age > 18 and also they are male

const users = [
  { name: "John", age: 25, gender: "male" },
  { name: "Alice", age: 17, gender: "female" },
  { name: "Bob", age: 20, gender: "male" },
  { name: "Emma", age: 22, gender: "female" },
  { name: "Tom", age: 16, gender: "male" },
];

function sorted(arr) {
  let users = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18 && arr[i].gender === "male") {
      users.push(arr[i]);
    }
  }
  return users;
}

console.log(sorted(users));
