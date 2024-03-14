describe("Arrays Data Structure", () => {
  // 1D Arrays
  describe("1D Array", () => {
    const numbers = [1, 2, 3, 4, 5];

    test("access: numbers[2] should return 3", () => {
      expect(numbers[2]).toEqual(3);
    });

    test("push: numbers.push(6) should append 6 to the array at index 5 and increase the array size by 1", () => {
      numbers.push(6);
      expect(numbers[5]).toBeDefined();
      expect(numbers[5]).toEqual(6);
      expect(numbers.length).toEqual(6);
    });

    test("pop: numbers.pop() should return 6", () => {
      expect(numbers.pop()).toEqual(6);
      expect(numbers.length).toEqual(5);
    });
  });

  describe("2D Array", () => {
    const teams = [
      ["Arsenal", "Liverpool", "Man City"],
      ["Barcelona", "Real Madrid", "Atlético de Madrid"],
    ];

    test("access: teams[0][1] should return Liverpool", () => {
      expect(teams[0][1]).toEqual("Liverpool");
    });
  });

  describe("3D Array", () => {
    const food: string[][][] = [
      [
        ["Pizza", "Burger"],
        ["Steak", "Chicken"],
      ],
      [
        ["Carrot", "Cucumber"],
        ["Orange", "Watermelon"],
      ],
    ];

    test("access: food[0][1][1] should return Chicken", () => {
      expect(food[0][1][1]).toEqual("Chicken");
    });
  });
});
