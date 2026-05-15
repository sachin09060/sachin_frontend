/* 
# 4. Number in JavaScript

Now we move to one of the MOST used primitive types:

# `Number`

Every application uses numbers:

* Age
* Prices
* Marks
* Likes
* Coordinates
* Calculations
* Banking
* Analytics

Numbers are everywhere.

---

# Definition

`Number` is used to store:

* Integers
* Decimals
* Negative values
* Mathematical values

---

# Real-Life Analogy

Think of a calculator.

Whatever you type:
10
99.5
-200


All are numbers.

JavaScript treats them under ONE type:

# number

---

# Syntax
let age = 22;
let price = 199.99;


---

# Example 1
let marks = 95;
console.log(marks);

Output: 95

---

# Example 2
let temperature = -10;
console.log(temperature);

Output: -10

---

# JavaScript Has Only ONE Number Type

This is VERY important.

Other languages have:

* int
* float
* double
* long

But JavaScript has only:

# number

---

# Example
let a = 10;
let b = 10.5;

console.log(typeof a);
console.log(typeof b);

Output:
number
number

---

# typeof Number
typeof 100

Output: "number"

---

# Memory Concept

Numbers are primitive values.
Stored directly in memory.

---

# Example

let score = 90;
Memory: score → 90

---

# Primitive Memory Storage

Direct storage.
Unlike objects:
let user = { name: "Sachin" };

Objects store references.

Numbers store actual value.

---

# Hoisting with Numbers

Number itself does NOT affect hoisting.

Variable declaration type decides it.

---

# Using var
console.log(price);
var price = 500;

Output:
undefined

---

# Internal Memory Creation

Before execution: price → undefined

After execution: price → 500

---

# Using let

console.log(count);
let count = 5;

Output: ReferenceError (Because of TDZ).

---

# Call Stack with Numbers

---

# Example

function calculate() {
    let total = 100;
    console.log(total);
}
calculate();


---

# Call Stack Flow

Global Execution Context
↓
calculate()

Inside function memory: total → 100
After completion: calculate() removed

---

# Arithmetic Operations

---

# Addition
console.log(10 + 5);

Output: 15

---

# Subtraction
console.log(10 - 5);
Output: 5

---

# Multiplication

console.log(10 * 5);
Output: 50

---

# Division

console.log(10 / 2);
Output: 5

---

# Modulus (%)

Returns remainder.

console.log(10 % 3);
Output: 1

---

# Exponent (**)

console.log(2 ** 3);
Output: 8

---

# Increment and Decrement

---

# Increment

let count = 5;
count++;
console.log(count);
Output: 6

---

# Decrement

let count = 5;
count--;
console.log(count);
Output:4

---

# Special Number Values

Now comes VERY important concepts.

---

# 1. Infinity

---

## Example
console.log(10 / 0);
Output: Infinity


---

# typeof Infinity
typeof Infinity

Output: "number"

Yes, Infinity is still number.

---

# 2. -Infinity
console.log(-10 / 0);
Output:-Infinity

---

# 3. NaN (Not a Number)

VERY famous interview topic.

---

# Example

console.log("hello" * 2);

Output: NaN


---

# Why?
Because multiplication expects numbers.

---

# Important Confusion

---

# typeof NaN
typeof NaN

Output: "number"
Weird but true.

---

# Why NaN Exists
Represents: Invalid mathematical result.

---

# Number Precision Problem
JavaScript uses floating-point arithmetic.
This causes precision issues.

---

# Example
console.log(0.1 + 0.2);
Output: 0.30000000000000004

---

# Why?
Because computers store decimals in binary.
Some decimals cannot be represented exactly.

---

# Safe Integers
JavaScript numbers have limits.

---

# Maximum Safe Integer
Number.MAX_SAFE_INTEGER
Output:9007199254740991
Beyond this, precision issues arise.

---

# Beyond This?
Use:
# BigInt
(Next primitive type later)

---

# Number Conversion

---

# Using Number()
Number("100")
Output: 100

---

# Invalid Conversion
Number("Sachin")
Output: NaN

---

# Parsing Numbers

---

# parseInt()
parseInt("100px")
Output:100
Extracts leading number.

---

# parseFloat()
parseFloat("10.55abc")
Output: 10.55
Extracts leading decimal number.

---

# Number Methods

---

# toFixed()

Controls decimal count.

let price = 99.456;
console.log(price.toFixed(2));
Output: 99.46

---

# toString()
let num = 100;
console.log(num.toString());
Output: "100"


---

# Math Object

JavaScript provides math utilities.

---

# Math.round()
Rounds a number to the nearest integer.

Math.round(4.6)
Output: 5

---

# Math.floor()
Always rounds down to the nearest integer.

Math.floor(4.9)
Output: 4

---

# Math.ceil()
Always rounds up to the nearest integer.

Math.ceil(4.1)
Output: 5

---

# Math.random()
Math.random()
Output: Random number between 0 and 1

// Random number between 0 and 10
Math.floor(Math.random() * 10);

// Random number between 1 and 6 (like a dice roll)
Math.floor(Math.random() * 6) + 1;

// Random number between min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

---

# Truthy and Falsy Numbers

---

# Falsy Number
0
Only zero is falsy.

---

# Truthy Numbers
1
-1
100
3.14

All truthy.

---

# Example
if (0) {
    console.log("Runs");
} else {
    console.log("Falsy");
}

Output: Falsy

---

# Common Beginner Mistakes

---

# Mistake 1
console.log("5" + 2);


Output: 52
String concatenation.

---

# Mistake 2
console.log("5" - 2);
Output: 3
Subtraction converts string to number.
Automatic conversion happens.   

---

# Internal Engine View

---

# Memory Creation
var age = 22;

Before execution: age → undefined

After execution: age → 22

---

# Easy Summary

| Concept           | Meaning                |
| ----------------- | ---------------------- |
| Number            | Numeric values         |
| Primitive?        | Yes                    |
| typeof 100        | `"number"`             |
| Stored in memory  | Directly               |
| Special values    | Infinity, NaN          |
| Hoisting          | Depends on declaration |
| Only falsy number | 0                      |

---

# Final Analogy Recap

| JavaScript  | Real Life               |
| ----------- | ----------------------- |
| Number      | Calculator values       |
| Infinity    | Endless counting        |
| NaN         | Broken calculation      |
| parseInt    | Extracting numeric part |
| Math.random | Dice roll               |

*/