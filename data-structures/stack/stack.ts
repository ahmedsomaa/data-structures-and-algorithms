/**
 * Class representing a generic stack data structure.
 * @template T - The type of elements held in the stack.
 */
export default class Stack<T> {
  private elements: T[];
  private capacity: number;

  /**
   * Initializes a new instance of Stack.
   * @param {number} [maxSize=100] - The maximum number of elements the stack can hold.
   */
  constructor(maxSize: number = 100) {
    this.capacity = maxSize;
    this.elements = new Array<T>(maxSize);
  }

  /**
   * Pushes an element onto the top of the stack.
   * @param {T} element - The element to add to the stack.
   * @returns {number} The new length of the stack.
   * @throws {Error} If the stack is full.
   */
  push(element: T): number {
    if (this.isFull()) {
      throw new Error(`OverflowError: cannot push to a full stack!`);
    }
    return this.elements.push(element);
  }

  /**
   * Removes the element on the top of the stack and returns it.
   * @returns {T | undefined} The element removed from the top of the stack, or undefined if the stack was empty.
   * @throws {Error} If the stack is empty.
   */
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("UnderflowError: cannot pop from an empty stack!");
    }
    return this.elements.pop();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * @returns {T | null} The top element of the stack, or null if the stack is empty.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[this.count() - 1];
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.count() === 0;
  }

  /**
   * Checks if the stack is full.
   * @returns {boolean} True if the stack is at full capacity, false otherwise.
   */
  isFull(): boolean {
    return this.elements.length === this.capacity;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} The number of elements in the stack.
   */
  count(): number {
    return this.elements.length;
  }

  /**
   * Clears all elements from the stack.
   */
  clear(): void {
    this.elements = [];
  }

  /**
   * Changes the element at a specific index in the stack.
   * @param {number} index - The zero-based index at which to change the element.
   * @param {T} element - The new element to replace the old one.
   * @throws {Error} If the stack is empty or if the index is out of bounds.
   */
  change(index: number, element: T): void {
    if (this.isEmpty()) {
      throw new Error(
        "UnderflowError: cannot modify an element in an empty stack!"
      );
    }

    if (index < 0 || index >= this.capacity) {
      throw new RangeError(
        `Invalid index. Index should be within 0 & ${this.capacity - 1}`
      );
    }

    this.elements[index] = element;
  }

  /**
   * Displays all elements in the stack.
   */
  display(): void {
    console.log(this.elements.toString());
  }
}
