function decimalToBinary(decimal: number, complexity: "const" | "log"): string {
  return complexity === "const"
    ? constantDecimalToBinary(decimal)
    : logDecimalToBinary(decimal);
}

/**
 * Time Complexity: O(1)
 * @param decimal {number}
 * @returns {string} - binary representation for the given decimal number
 */
function constantDecimalToBinary(decimal: number): string {
  // non negative integers
  return (decimal >>> 0).toString(2);
}

/**
 * Time Complexity: O(log(n))
 * @param decimal {number}
 * @returns {string} - binary representation for the given decimal number
 */
function logDecimalToBinary(decimal: number): string {
  if (decimal === 0) {
    return "0";
  }

  let binary = "";
  while (decimal !== 0) {
    binary += decimal % 2;
    decimal = Math.trunc(decimal / 2);
  }
  return binary.split("").reverse().join("");
}

/**
 * Time Complexity: O(1)
 * @param binary {string}
 * @returns {string} - decimal representation for the given binary string
 */

function binaryToDecimal(binary: string): number {
  return parseInt(binary, 2);
}

export { decimalToBinary, binaryToDecimal };
