import { decimalToBinary, binaryToDecimal } from "./integers";

describe("Integers", () => {
  describe("decimal to binary converter", () => {
    test("converts 0 to 0", () => {
      expect(decimalToBinary(0, "log")).toEqual("0");
    });

    test("converts 6 to 110", () => {
      expect(decimalToBinary(6, "const")).toEqual("110");
    });
  });

  describe("binary to decimal converter", () => {
    test(`converts "0" to 0`, () => {
      expect(binaryToDecimal("0")).toEqual(0);
    });

    test(`converts "110" to 6`, () => {
      expect(binaryToDecimal("110")).toEqual(6);
    });
  });
});
