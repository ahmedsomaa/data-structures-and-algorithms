# Sets

## What is a Set?

- A set is a data structure that can hold a collection of values. The values however must be unique.
- A set can contain a mix of different data types. You can store `string`, `boolean`, `numbers` or even `object` all in the same set.
- Sets are dynamically sized which means we don't have to declare the size of a set before creating it.
- Sets don't maintain an insertion order.
- Sets are iterable. The can be used with a `for...of` loop.

## Sets vs Arrays

- Arrays can contain _duplicate_ values whereas sets cannot.
- _Insertion order is maintained_ in arrays but it is not the case with sets.
- _Searching and deleting_ an element in the set is _faster_ compared to arrays.

## Examples

```js
// create a set
const set = new Set([1, 2, 3]);

// iterate through the set
for (const num of set) {
  console.log(num);
}

// element addition
set.add(4); // added

// duplicate element addition
set.add(4); // ignored

// check if element exits in the set
console.log(set.has(3)); // prints true

// delete element from the set
set.delete(3);

// check size of the set
console.log(set.size); // prints 3

// delete all elements in the set
set.clear();
```

## Big-O Time Complexity

| Operation            | Description                                   | Average Case Time Complexity | Worst Case Time Complexity |
| -------------------- | --------------------------------------------- | ---------------------------- | -------------------------- |
| Add (insert)         | Adds an element to the Set.                   | $$O(1)$$                     | $$O(n)$$                   |
| Delete (remove)      | Deletes an element from the Set.              | $$O(1)$$                     | $$O(n)$$                   |
| Search (has)         | Checks if an element is present in the Set.   | $$O(1)$$                     | $$O(n)$$                   |
| Iteration (for...of) | Iterates through each element in the Set.     | $$O(n)$$                     | $$O(n)$$                   |
| Size (size/length)   | Retrieves the number of elements in the Set.  | $$O(1)$$                     | $$O(1)$$                   |
| Clear                | Removes all elements from the Set.            | $$O(1)$$                     | $$O(n)$$                   |
| Values               | Returns an iterator of all values in the Set. | $$O(n)$$                     | $$O(n)$$                   |
