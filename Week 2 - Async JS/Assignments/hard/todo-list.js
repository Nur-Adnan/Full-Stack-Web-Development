/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(event) {
    this.todo.push(event);
  }

  remove(index) {
    if (index == 0 || (index > 0 && index < this.todo.length)) {
      // Uses splice(index, 1) to delete one item.Uses splice(index, 1) to delete one item.
      /*
    - splice() is an array method in JavaScript used to:
    - Add elements
    - Remove elements

    🧹 1. Remove elements from array
    let fruits = ["apple", "banana", "mango", "orange"];
    let removed = fruits.splice(1, 2);

    console.log(fruits);  // ["apple", "orange"]
    console.log(removed); // ["banana", "mango"]

    ➕ 2. Add elements to array
    let colors = ["red", "green", "blue"];
    colors.splice(1, 0, "yellow", "purple");

    console.log(colors);  // ["red", "yellow", "purple", "green", "blue"]

    🔁 3. Replace elements
    let numbers = [10, 20, 30, 40];
    numbers.splice(2, 1, 300);
    console.log(numbers); // [10, 20, 300, 40]
    From index 2, remove 1 item (30) and add 300 in its place

    🔚 4. Remove all from a specific index
    let letters = ["a", "b", "c", "d", "e"];
    letters.splice(2);
    console.log(letters); // ["a", "b"]

    🤯 5. Use negative index (count from end)
    let pets = ["cat", "dog", "rabbit", "parrot"];
    pets.splice(-2, 1); // starts from 2nd last = "rabbit"

    console.log(pets); // ["cat", "dog", "parrot"]
    */
      this.todo.splice(index, 1);
    }
  }

  update(index, updatedTodo) {
    if (index == 0 || (index > 0 && index < this.todo.length)) {
      this.todo[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todo;
  }

  get(index) {
    if (index >= 0 && index < this.todo.length) {
      return this.todo[index];
    } else {
      return null;
    }
  }

  clear() {
    return (this.todo = []);
  }
}
