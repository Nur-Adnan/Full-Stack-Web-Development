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
