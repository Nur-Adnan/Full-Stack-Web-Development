/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// You want to calculate how much money was spent in total for each category.

/*  input : 
[
    { itemName: "Book", category: "Education", price: 20 },
    { itemName: "Pen", category: "Education", price: 5 },
    { itemName: "Apple", category: "Food", price: 10 }
]
*/

/*  output : 
[
    { category: "Education", totalSpent: 25 },
    { category: "Food", totalSpent: 10 }
]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    // object destructuring,  a shortcut to get values from the transaction object.
    if (category in categoryTotals) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  });

  const result = [];

  for (category in categoryTotals) {
    result.push({ category, totalSpent: categoryTotals[category] });
  }
  return result;
}
