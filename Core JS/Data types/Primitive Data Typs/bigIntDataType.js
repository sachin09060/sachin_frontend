/* 
# 7. BigInt in JavaScript

Now we move to the FINAL primitive data type:

# `BigInt`

This is one of the newest primitive types in JavaScript.
Introduced because normal numbers have size limitations.

---

# Definition

`BigInt` is used to store:  Very large integers beyond JavaScript's safe number limit.

---

# Why BigInt Was Introduced
JavaScript `number` type has limitations.

---

# Maximum Safe Integer

Number.MAX_SAFE_INTEGER
Output: 9007199254740991

Beyond this,
JavaScript loses precision.

---

# Example Problem
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

Output:
9007199254740992
9007199254740992

Wrong result.

---

# Why?

Because normal numbers use:
# IEEE 754 floating-point representation
Which has precision limits.

---

# Real-Life Analogy

Imagine a calculator with maximum 15 digits.

Beyond that,
digits become inaccurate.

BigInt is like:

# Super calculator for huge integers.

---

# Syntax

Two ways.

---

# 1. Using `n` Suffix
let bigNumber = 12345678901234567890n;

---

# 2. Using BigInt()

let bigNumber = BigInt(1234567890);

---

# typeof BigInt
typeof 10n

Output:
"bigint"

---

# Memory Concept

BigInt is primitive.
Stored directly in memory.

---

# Example

let views = 999999999999999999n;
Memory:
views → 999999999999999999n

---

# Hoisting with BigInt

BigInt itself does NOT affect hoisting.

Variable keyword controls behavior.

---

# Using var
console.log(id);
var id = 999999999999n;
Output: undefined
Because of TDZ.

---

# Memory Creation

Before execution:
id → undefined

After execution:
id → 999999999999n

---

# Using let
console.log(value);
let value = 100n;


Output:
ReferenceError
Because of TDZ.

---

# Call Stack with BigInt

---

# Example

function calculateViews() {
    let views = 999999999999999n;
    console.log(views);
}

calculateViews();

---

# Call Stack Flow

Global Execution Context
↓
calculateViews()

Function memory:
views → 999999999999999n


After completion:
calculateViews() removed

---

# BigInt Arithmetic

BigInt supports normal math operations.

---

# Addition
console.log(10n + 20n);

Output:30n


---

# Subtraction

```js id="big23"
console.log(50n - 20n);
```

Output:30n

---

# Multiplication
console.log(5n * 2n);

Output:
10n

---

# Division

console.log(10n / 3n);
Output:
3n

---

# Important

BigInt division truncates decimals.
No floating points.

---

# Cannot Mix Number and BigInt

VERY IMPORTANT.

---

# Wrong
console.log(10n + 5);

Output:
TypeError

---

# Why?

Because:

* `10n` → BigInt
* `5` → Number

JavaScript prevents unsafe mixing.

---

# Correct Way

---

# Convert Number → BigInt
console.log(10n + BigInt(5));

Output:
15n


---

# Or Convert BigInt → Number
console.log(Number(10n) + 5);

Output:
15

---

# Comparison with Numbers

Allowed.

---

# Example
console.log(10n > 5);

Output:
true

---

# Equality Behavior

---

# Loose Equality
console.log(10n == 10);

Output:
true

---

# Strict Equality
console.log(10n === 10);

Output:
false

Because types differ.

---

# BigInt and Math Object

BigInt cannot use Math methods directly.

---

# Example
Math.sqrt(16n);

Output:
TypeError

# Why?
Math object works only with Number type.

---

# BigInt Truthy/Falsy

---

# Falsy BigInt
0n

---

# Truthy BigInts
1n
100n
-5n

---

# Example
if (0n) {
    console.log("Runs");
} else {
    console.log("Falsy");
}

Output:
Falsy

---

# Real-World Usage

BigInt is useful in:

* Financial systems
* Scientific calculations
* Cryptography
* Blockchain
* Huge database IDs
* Large counters

---

# Example
let youtubeViews = 999999999999999999999n;

---

# Internal Engine View

---

# Memory Creation
var total = 999999999999n;

Before execution:
total → undefined

After execution:
total → 999999999999n

---

# Common Beginner Mistakes

---

# Mistake 1

Forgetting `n`
let big = 999999999999999999999;

This becomes inaccurate Number.

# Correct
let big = 999999999999999999999n;


---

# Mistake 2

Mixing Number and BigInt

```js id="big53"
10n + 5
```

Error.

---

# Mistake 3

Using decimals

```js id="big54"
10.5n
```

Invalid.

BigInt only supports integers.

---

# Important Limitation

BigInt does NOT support:

* Decimal values
* Floating points

---

# Invalid Example
let value = 1.5n;

SyntaxError.

---

# BigInt Wrapper Object

Rarely used.
let value = Object(10n);

Avoid in real projects.
Use primitive BigInt directly.

---

# Easy Summary

| Concept                    | Meaning                 |
| -------------------------- | ----------------------- |
| BigInt                     | Very large integers     |
| Primitive?                 | Yes                     |
| typeof                     | `"bigint"`              |
| Decimal support            | ❌ No                    |
| Stored in memory           | Directly                |
| Main purpose               | Large integer precision |
| Safe integer issue solved? | ✅ Yes                   |

---

# Primitive Types Completed 🎉

You now fully covered all 7 primitive types:

| Primitive Type |
| -------------- |
| undefined      |
| null           |
| boolean        |
| number         |
| string         |
| symbol         |
| bigint         |

---

# Final Primitive Analogy Recap

| Primitive | Real-Life Analogy                 |
| --------- | --------------------------------- |
| undefined | Empty unassigned box              |
| null      | Intentionally empty box           |
| boolean   | ON/OFF switch                     |
| number    | Calculator values                 |
| string    | Written sentence                  |
| symbol    | Fingerprint                       |
| bigint    | Super calculator for huge numbers |

*/