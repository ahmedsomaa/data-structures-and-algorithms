# Integers

Integers are whole numbers without any fractional parts. Integers can be represented in many systems including decimal, binary, hexadecimal...etc. In this document we are going to only cover the decimal & binary representations.

## Decimal System

In the decimal system, we use digits from 0 to 9 to represent integers. For example, 0, 1, 2, -3, 10, -100 are all integers in decimal. This system is also referred to as base/radix 10.

## Binary System

In binary, we use only 0s and 1s to represent integers. Converting between decimal and binary involves dividing or multiplying by 2 and keeping track of remainders or quotients. This system is also referred to as base/radix 2.

## Converting Between Decimal and Binary

### Decimal to binary

1. Divide the decimal number by 2.
2. Keep track of the remainders (0 or 1), starting from the bottom.
3. Continue dividing until the quotient is zero.
4. The binary representation is the sequence of remainders read from bottom to top.

Example:

```txt
Example: Decimal to Binary (27)

To convert decimal 27 to binary:

27 ÷ 2 = 13 remainder 1
13 ÷ 2 = 6 remainder 1
6 ÷ 2 = 3 remainder 0
3 ÷ 2 = 1 remainder 1
1 ÷ 2 = 0 remainder 1

Reading the remainders from bottom to top: 11011. Therefore, decimal 27 in binary is 11011.
```

### Binary to decimal

1. Start from the rightmost bit.
2. Multiply each bit by 2 raised to the power of its position (starting from 0).
3. Sum up the results.

Example:

```txt
Example: Binary to Decimal (1011)

To convert binary 1011 to decimal:

1 x 2^3 + 0 x 2^2 + 1 X 2^1 + 1 X 2^0

= 8 + 0 + 2 + 1

= 11

Therefore, binary 1011 in decimal is 11.
```

## Negative Numbers

Negative integers in decimal are represented by placing a negative sign ("-") in front of the number. For example, -5 is a negative integer in decimal.
while in binary they can be represented using multiple methods including: sign & magnitude & two's complement...etc

### Sign & Magnitude

In this method, the leftmost bit represents the sign (0 for positive, 1 for negative), and the remaining bits represent the magnitude of the number.

#### Examples

if we have only 3 digits to represent the numbers, then we only have the following numbers to represent:

| Decimal | Binary |
| ------- | ------ |
| 0       | 000    |
| 1       | 001    |
| 2       | 010    |
| 3       | 011    |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |

If we used the sing & magnitude methods, then this table would change to be:
| Decimal | Binary |
|---------|---------|
| +0 | 000 |
| +1 | 001 |
| +2 | 010 |
| +3 | 011 |
| -0 | 100 |
| -1 | 101 |
| -2 | 110 |
| -3 | 111 |

So this means 111 represent -3 not +7.

#### Issues

1. **Two Representations of Zero**: Both positive and negative zero have separate representations in sign and magnitude method, which can cause ambiguity.

   As we can see from this table, we can see that we have two zero representations:
   | Decimal | Binary |
   |---------|---------|
   | +0 | 000 |
   | +1 | 001 |
   | +2 | 010 |
   | +3 | 011 |
   | -0 | 100 |
   | -1 | 101 |
   | -2 | 110 |
   | -3 | 111 |

2. **Complex Arithmetic Operations**: Arithmetic operations involving negative numbers can become more complex due to the need to consider the sign bit separately.

Let's add +2 & -1, we should be getting +1. However, this is not the case, we get the binary `111` which represents the number -3 which wrong.

```txt
010
101
---
111
```

### Two's Complement Method

This method involves flipping the bits of the positive binary representation of the integer and then adding 1 to the result.

#### Examples

if we have only 3 digits to represent the numbers, then we only have the following numbers to represent:

| Decimal | Binary |
| ------- | ------ |
| 0       | 000    |
| 1       | 001    |
| 2       | 010    |
| 3       | 011    |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |

If we used the two's complement methods, then this table would change to be:
| Decimal | Binary |
|---------|---------|
| +0 | 000 |
| +1 | 001 |
| +2 | 010 |
| +3 | 011 |
| -4 | 100 |
| -3 | 101 |
| -2 | 110 |
| -1 | 111 |

So this means 111 represent -1 not 7.

## References

- [CodeMasry - Integers Data Structure](https://youtu.be/RwKmMK4rP3U?si=rgaEkLS9TtR1d-5T)
- [CodeMasry - Negative Integers Data Structure](https://youtu.be/rTCn3zIGui4?si=r1e7U3_2nSPQTWcA)
