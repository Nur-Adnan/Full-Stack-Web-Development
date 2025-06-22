class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    return area;
  }
  paint() {
    return `Painting with color ${this.color}`;
  }
}

const rect = new Rectangle(2, 4, "Yellow");
const area = rect.area();
const paint = rect.paint();
console.log(paint);

// Date class

const date = new Date();
console.log(date.getMonth());
console.log(date.getFullYear());

// Map class

let user = {
  name: "Adnan",
  age: 21,
};

console.log(user.name);
user.name = "Nur";

const map = new Map();
map.set("name", "Chowdhury");
map.set("age", 25);
console.log(map.get("name"));
