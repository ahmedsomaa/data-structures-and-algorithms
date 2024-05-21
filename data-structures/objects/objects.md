# Objects

## What is an object?

- An object is an unordered collection of key-value pairs. The key must either be a `string` or `symbol` data types where as the value can be of any data type.
- To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.
- An object is not iterable which means you cannot use it with a `for...of` loop.

## Examples

```js
// create an object using curly braces
const obj = {
  name: "Ahmed",
  age: 28,
};

// access element using dot notation
console.log(obj.name); // prints Ahmed

// access element using bracket notation
console.log(obj["age"]); // prints 28

// we can use the dot/bracket notation to add new values
obj.job = "SW Engineer II";
console.log(obj); // prints { name: "Ahmed", age: 28, job: "SW Engineer II" }

// delete a key-value pair using delete operator
delete obj.job;
console.log(obj); // prints { name: "Ahmed", age: 28 }

// object methods .keys(), .values(), .entries()
console.log(Object.keys(obj)); // prints ['name', 'age'];
console.log(Object.values(obj)); // prints ['Ahmed', 28];
console.log(Object.entries(obj)); // prints [['name', 'Ahmed'], ['age', 28]]
```

## Big-O Time Complexity

| Method             | Complexity |
| ------------------ | ---------- |
| Insertion          | $$O(1)$$   |
| Deletion           | $$O(1)$$   |
| Access             | $$O(1)$$   |
| Search             | $$O(n)$$   |
| `Object.keys()`    | $$O(n)$$   |
| `Object.values()`  | $$O(n)$$   |
| `Object.entries()` | $$O(n)$$   |
