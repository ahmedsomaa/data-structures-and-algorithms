/**
 * Represents a generic queue data structure, where elements are added to the end
 * and removed from the front.
 * @template T The type of elements held in the queue.
 */
export default class Queue<T> {
  /**
   * Internal array to hold the queue's elements.
   * @private
   */
  private elements: T[];

  /**
   * Initializes a new instance of the Queue class.
   */
  constructor() {
    this.elements = [];
  }

  /**
   * Adds an element to the end of the queue.
   * @param {T} element The element to be added to the queue.
   * @returns {number} The new size of the queue after the element is added.
   */
  enqueue(element: T): number {
    return this.elements.push(element);
  }

  /**
   * Removes and returns the element at the front of the queue.
   * Returns `undefined` if the queue is empty.
   * @returns {T | undefined} The first element of the queue or undefined if the queue is empty.
   */
  dequeue(): T | undefined {
    return this.elements.shift();
  }

  /**
   * Returns the first element of the queue without removing it.
   * If the queue is empty, returns null.
   * @returns {T | null} The first element of the queue or null if the queue is empty.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[0];
  }

  /**
   * Checks whether the queue is empty.
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the number of elements in the queue.
   * @returns {number} The current number of elements in the queue.
   */
  size(): number {
    return this.elements.length;
  }

  /**
   * Clears all elements from the queue.
   */
  clear(): void {
    this.elements = [];
  }

  /**
   * Prints the current elements of the queue to the console.
   */
  print(): void {
    console.log(this.elements.toString());
  }
}
