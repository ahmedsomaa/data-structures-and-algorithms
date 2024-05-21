// Function to test
describe("Object Data Structure", () => {
  let obj: any;

  beforeEach(() => {
    obj = {
      name: "Ahmed",
      age: 28,
    };
  });

  test("should access elements using dot notation", () => {
    expect(obj.name).toEqual("Ahmed");
    expect(obj.age).toEqual(28);
  });

  test("should access elements using bracket notation", () => {
    expect(obj["name"]).toEqual("Ahmed");
    expect(obj["age"]).toEqual(28);
  });

  test("should add new values using dot/bracket notation", () => {
    obj.job = "SW Engineer II";
    expect(obj.job).toEqual("SW Engineer II");
  });

  test("should delete a key-value pair using delete operator", () => {
    delete obj.job;
    expect(obj.job).toBeUndefined();
  });

  test("should return keys using Object.keys()", () => {
    const keys = Object.keys(obj);
    expect(keys).toEqual(["name", "age"]);
  });

  test("should return values using Object.values()", () => {
    const values = Object.values(obj);
    expect(values).toEqual(["Ahmed", 28]);
  });

  test("should return entries using Object.entries()", () => {
    const entries = Object.entries(obj);
    expect(entries).toEqual([
      ["name", "Ahmed"],
      ["age", 28],
    ]);
  });
});
