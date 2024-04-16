/**
 * Represents a generic stack data structure.
 * @template T The type of elements held in the stack.
 */
export default class Stack<T> {
  /**
   * Internal array to hold the stack's elements.
   * @private
   */
  private elements: T[];

  /**
   * Initializes a new instance of the Stack class, creating an empty stack.
   */
  constructor() {
    this.elements = [];
  }

  /**
   * Adds an element to the top of the stack.
   * @param {T} element The element to be added to the stack.
   * @returns {number} The new size of the stack after the element is added.
   */
  push(element: T): number {
    return this.elements.push(element);
  }

  /**
   * Removes the element from the top of the stack and returns it.
   * If the stack is empty, returns undefined.
   * @returns {T | undefined} The element removed from the top of the stack, or undefined if the stack was empty.
   */
  pop(): T | undefined {
    return this.elements.pop();
  }

  /**
   * Returns the element at the top of the stack without removing it.
   * If the stack is empty, returns null.
   * @returns {T | null} The element at the top of the stack or null if the stack is empty.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[this.size() - 1];
  }

  /**
   * Checks whether the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the number of elements in the stack.
   * @returns {number} The number of elements currently in the stack.
   */
  size(): number {
    return this.elements.length;
  }

  /**
   * Removes all elements from the stack, effectively emptying it.
   */
  clear(): void {
    this.elements = [];
  }

  /**
   * Prints the elements of the stack to the console.
   */
  print(): void {
    console.log(this.elements.toString());
  }
}
