export default class Stack<T> {
  private elements: T[];
  private capacity: number;

  constructor(maxSize: number = 100) {
    this.capacity = maxSize;
    this.elements = new Array<T>(maxSize);
  }

  push(element: T): number {
    if (this.isFull()) {
      throw new Error(`OverflowError: cannot push to a full stack!`);
    }
    return this.elements.push(element);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("UnderflowError: cannot pop from an empty stack!");
    }
    return this.elements.pop();
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[this.count() - 1];
  }

  isEmpty(): boolean {
    return this.count() === 0;
  }

  isFull(): boolean {
    return this.elements.length === this.capacity;
  }

  count(): number {
    return this.elements.length;
  }

  clear(): void {
    this.elements = [];
  }

  change(index: number, element: T) {
    if (this.isEmpty()) {
      throw new Error(
        "UnderflowError: cannot modify an element in an empty stack!"
      );
    }

    if (index < 0 && index >= this.capacity) {
      throw new RangeError(
        `Invalid element position. Position should be within 0 & ${
          this.capacity - 1
        }`
      );
    }

    this.elements[index] = element;
  }

  display(): void {
    console.log(this.elements.toString());
  }
}
