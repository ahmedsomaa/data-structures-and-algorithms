# Stack

## What is a Stack?

A **Stack** is a linear data structure that adheres to the **LIFO** (Last-In-First-Out) principle. This means the last element added to the stack will be the first one to be removed. Unlike other linear data structures like queues, a stack has only one point of operation for both insertion and deletion at the top.

### Key Characteristics of a Stack

- **Single-End Operations**: All operations on a stack occur at the top.
- **Pre-defined Capacity**: A stack has a maximum size and can only hold a limited number of elements.
- **Order**: The main order of operation for a stack is LIFO, where the last element added is the first to be removed.

## How a Stack Works

Imagine a stack as a stack of plates; you add one on top of another, and when you need a plate, you take the top one. This is exactly how a data stack works.

- **Initialization**: When a stack is first created, it is empty. We define a maximum size (say, size = 5).
- **Pushing Elements**: As new elements are added, they are placed at the top. When the stack reaches its full capacity, it cannot take any more elements (overflow condition).
- **Popping Elements**: When elements are removed, they are taken from the top. If you try to remove an element from an empty stack, this is called an underflow condition.

## Standard Stack Operations

- **`push()`**: Adds an element to the top of the stack. Leads to overflow if the stack is full.
- **`pop()`**: Removes the top element from the stack. Leads to underflow if the stack is empty.
- **`isEmpty()`**: Returns `true` if the stack is empty.
- **`isFull()`**: Returns `true` if the stack is at its full capacity.
- **`peek()`**: Returns the top element without removing it.
- **`count()`**: Returns the total number of elements currently in the stack.
- **`change()`**: Modifies an element at a specific position.
- **`display()`**: Prints all the elements in the stack.

### Example: PUSH and POP Operations

- **PUSH**: Before an element is pushed, check if the stack is full. If not, increment the top pointer and place the new element there.
- **POP**: Before an element is popped, check if the stack is empty. If not, access the top element for removal and decrement the top pointer.

## Applications of Stack

Stacks are versatile and used in numerous applications:

- **Symbol Balancing**: Common in compilers to check balanced parentheses in code.
- **String Reversal**: By pushing a string into a stack and then popping it, you can reverse the string.
- **Undo/Redo Mechanisms**: Like in text editors where actions are pushed into a stack and popping them undoes actions.
- **Recursion**: Managing function calls where each call is a new layer on the stack.
- **Graph Searching (DFS)**: Depth-first search utilizes a stack to explore vertices.
- **Backtracking Problems**: Such as solving mazes or puzzles.
- **Expression Conversion**: Converting between infix, prefix, and postfix expressions is typically performed using stacks.
- **Memory Management**: Stack memory where variables are stored and released in a LIFO manner.

## Implementation

See [stack.ts](./stack.ts).
