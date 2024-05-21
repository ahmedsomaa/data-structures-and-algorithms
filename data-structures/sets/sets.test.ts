// Function to test
describe("Set Data Structure", () => {
  let set: Set<number>;

  beforeEach(() => {
    set = new Set([1, 2, 3]);
  });

  test("should iterate through the set", () => {
    const expected = [1, 2, 3];
    const actual: number[] = [];
    for (const num of set) {
      actual.push(num);
    }
    expect(actual).toEqual(expected);
  });

  test("should add elements to the set", () => {
    set.add(4);
    expect(set.has(4)).toBeTruthy();
  });

  test("should not add duplicate elements to the set", () => {
    set.add(4);
    expect(set.size).toEqual(4);
  });

  test("should check if an element exists in the set", () => {
    expect(set.has(3)).toBeTruthy();
  });

  test("should delete an element from the set", () => {
    set.delete(3);
    expect(set.has(3)).toBeFalsy();
  });

  test("should return the size of the set", () => {
    expect(set.size).toEqual(3);
  });

  test("should clear all elements from the set", () => {
    set.clear();
    expect(set.size).toEqual(0);
  });

  test("should return values iterator of all values in the set", () => {
    const valuesIterator = set.values();
    const valuesArray = Array.from(valuesIterator);
    expect(valuesArray).toEqual([1, 2, 3]);
  });
});
