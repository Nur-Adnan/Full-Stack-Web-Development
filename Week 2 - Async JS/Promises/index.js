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
