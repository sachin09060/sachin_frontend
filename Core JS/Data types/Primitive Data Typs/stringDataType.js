/* 
# 5. String in JavaScript

Now we move to one of the MOST IMPORTANT primitive data types:

# `String`

Strings are everywhere in real applications:

* Names
* Emails
* Messages
* URLs
* API responses
* Passwords
* Search text
* JSON data

Almost every app heavily depends on strings.

---

# Definition

A String is: A sequence of characters used to represent text.

---

# Real-Life Analogy

Imagine writing letters on paper.
"Sachin"
"Hello"
"React Developer"
All are strings.

---

# Syntax

Strings can be written using:

---

# 1. Double Quotes
let name = "Sachin";

---

# 2. Single Quotes
let city = 'Mysore';

---

# 3. Backticks (Template Literals)
let role = `Developer`;

---

# typeof String
typeof "Hello"

Output: "string"

---

# Memory Concept

Strings are primitive values.
Stored directly in memory.

---

# Example
let name = "Sachin";

Memory: name → "Sachin"

---

# String Immutability

VERY IMPORTANT concept.

---

# Strings are IMMUTABLE
Meaning: Original string cannot be changed.

---

# Example

```js id="a1str9"
let name = "Sachin";

name[0] = "K";
console.log(name);
Output: Sachin

No change happens.

# Why?
Because strings are immutable.

---

# Real-Life Analogy

Think of:

# Engraved stone text
You cannot directly modify letters.
You create NEW text instead.

---

# Correct Way

let name = "Sachin";
name = "Kachin";
Now new string created.

---

# Hoisting with Strings

String itself does NOT affect hoisting.
Variable declaration type decides behavior.

---

# Using var
console.log(message);
var message = "Hello";
Output: undefined
Because of TDZ.

---

# Memory Creation

Before execution:
message → undefined

After execution: 
message → "Hello"


---

# Using let
console.log(name);
let name = "Sachin";
Output: ReferenceError
Because of TDZ.

---

# Call Stack with Strings

---

# Example
function greet() {
    let message = "Welcome";
    console.log(message);
}

greet();


---

# Call Stack Flow
Global Execution Context
↓
greet()


Function memory:
message → "Welcome"

After completion:"
greet() removed from stack

---

# String Concatenation

Joining strings together.

---

# Using +
let firstName = "Sachin";
let lastName = "TP";
console.log(firstName + " " + lastName);

Output:
Sachin TP

---

# Template Literals (Modern Way)

VERY IMPORTANT in modern JavaScript.

---

# Using Backticks
let name = "Sachin";
console.log(`Hello ${name}`);

Output:
Hello Sachin

---

# Why Better?
Cleaner and readable.

---

# Real-Life Analogy

Template literals are like: Filling blanks in form

Hello ______
You fill in the blank with a name.
JavaScript fills values dynamically.

---

# Multi-line Strings

---

# Old Way
let text = "Hello\nWorld";

---

# Modern Way
let text = `
Hello
World
`;

---

# String Length

---

# length Property
let name = "Sachin";
console.log(name.length);

Output:
6

---

# Accessing Characters

---

# Using Index
let city = "Mysore";
console.log(city[0]);

Output:
M

---

# String Indexes Start at 0

| Character | Index |
| --------- | ----- |
| M         | 0     |
| y         | 1     |
| s         | 2     |

---

# Common String Methods

VERY IMPORTANT for interviews and projects.

---

# toUpperCase()
let name = "sachin";
console.log(name.toUpperCase());

Output: SACHIN

---

# toLowerCase()

let name = "SACHIN";
console.log(name.toLowerCase());
Output: sachin

---

# trim()

Removes spaces.

let text = "   hello   ";
console.log(text.trim());

Output:hello

---

# includes(): Checks existence.

let text = "JavaScript";
console.log(text.includes("Script"));

Output: true
---

# startsWith()
"Hello".startsWith("He")

Output:true

---

# endsWith()
"Hello".endsWith("lo")

Output:true

---

# slice()

Extracts portion.

let text = "JavaScript";
console.log(text.slice(0, 4));

Output: Java

---

# replace()
let text = "Hello World";
console.log(text.replace("World", "Sachin"));

Output:
Hello Sachin

---

# split()

Converts string → array.

let text = "apple,banana,mango";
console.log(text.split(","));

Output: ["apple", "banana", "mango"]

---

# String Escape Characters

Used for special formatting.

---

# New Line
console.log("Hello\nWorld");

---

# Tab
console.log("Hello\tWorld");

---

# Quotes Inside String
console.log("He said \"Hello\"");

---

# String and Type Coercion

JavaScript automatically converts types.

---

# Example
console.log("5" + 2);

Output:52
Number becomes string.

---

# Example
console.log("5" - 2);
Output:3

String becomes number.

---

# Truthy and Falsy Strings

---

# Falsy String
""
Empty string only.

---

# Truthy Strings
"hello"
"false"
"0"

All truthy.

---

# Example
if ("false") {
    console.log("Runs");
}

Output: Runs
Because non-empty strings are truthy.

---

# String Wrapper Object

Rarely used.
let text = new String("Hello");

Avoid in real projects.
Use primitive strings instead.

---

# Internal Engine View

---

# Memory Creation
var name = "Sachin";

Before execution:
name → undefined

After execution:
name → "Sachin"

---

# Common Beginner Mistakes

---

# Mistake 1
let name = "Sachin";

console.log(name[10]);

Output:
undefined
Accessing out of bounds index.

---

# Mistake 2
console.log("10" + 5);
Output: 105
String concatenation happens.

---

# Mistake 3
console.log("Hello" * 2);
Output: NaN
Invalid math operation.

---

# Easy Summary

| Concept          | Meaning               |
| ---------------- | --------------------- |
| String           | Text data             |
| Primitive?       | Yes                   |
| typeof           | `"string"`            |
| Mutable?         | ❌ No                 |
| Stored in memory | Directly              |
| Empty string     | Falsy                 |
| Common usage     | Names, messages, APIs |

---

# Final Analogy Recap

| JavaScript       | Real Life                   |
| ---------------- | --------------------------- |
| String           | Written sentence            |
| Immutable string | Engraved stone text         |
| Template literal | Fill-in-the-blank form      |
| Concatenation    | Joining train coaches       |
| split()          | Cutting sentence into words |

*/