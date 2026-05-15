/* 
# 3. Boolean in JavaScript
Now we move to one of the MOST important primitive types:

# `Boolean`
Booleans are the foundation of:

* Decision making
* Conditions
* Authentication
* Validation
* Loops
* Comparisons

Almost every real-world application heavily uses booleans.
_______________________________________________________________________________________________


# Definition: A Boolean represents only TWO values:
true
false

Meaning:
* YES / NO
* ON / OFF
* SUCCESS / FAILED
* LOGGED IN / LOGGED OUT



# Real-Life Analogy
Think about a light switch.
ON  → true
OFF → false

Only two states possible. That’s Boolean.

_______________________________________________________________________________________________

# Syntax
let isLoggedIn = true;
let hasPermission = false;


# Example 1
let isStudent = true;
console.log(isStudent);
Output: true

---

# Example 2
let paymentSuccess = false;
console.log(paymentSuccess);
Output: false

---

# typeof Boolean

typeof true
Output: "boolean"


---

# Memory Concept

---

# Example

let isOnline = true;

# Memory Representation
isOnline → true
Meaning: Variable directly holds the value true. Primitive values store directly in memory.

---

# Primitive Memory Storage

Unlike objects: let user = { name: "Sachin" };
Booleans store actual value directly.

# Visual Memory
Memory
isOnline → true

---

# Hoisting with Boolean

Boolean itself does NOT change hoisting behavior. Variable keyword decides hoisting.

---

# Using var
console.log(isAdmin);
var isAdmin = true;
Output: undefined

---

# Why?
During memory creation:
isAdmin → undefined

Later during execution:
isAdmin = true
Only during execution:isAdmin = true
---

# Using let
console.log(isAdmin);
let isAdmin = true;

Output: ReferenceError
Because of: Temporal Dead Zone (TDZ)

---

# Boolean in Call Stack

---

# Example

function login() {
    let isLoggedIn = true;
    console.log(isLoggedIn);
}

login();


# Call Stack Flow
Global Execution Context
↓
login()

Inside function memory: isLoggedIn → true

After function finishes:
login() removed from stack


# Boolean Through Comparisons: Most booleans are produced using comparisons.

---

# Example
console.log(10 > 5);


Output: true

---

# Example

console.log(3 > 10);
Output: false

---

# Comparison Operators

| Operator | Meaning            |
| -------- | ------------------ |
| `>`      | Greater than       |
| `<`      | Less than          |
| `>=`     | Greater than equal |
| `<=`     | Less than equal    |
| `==`     | Loose equality     |
| `===`    | Strict equality    |
| `!=`     | Not equal          |
| `!==`    | Strict not equal   |

---

# Equality Deep Understanding

---

# Loose Equality (`==`)

Checks value only.
console.log(5 == "5");

Output: true


Because JS converts types automatically.

# Strict Equality (`===`)

Checks:

* value
* type

console.log(5 === "5");
Output: false

---

# Real-Life Analogy

## `==`

Like checking: “Do both look similar?”


## `===`

Like checking: “Are both exactly identical?”

---

# Boolean in Conditions
# Example

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome");
}

Output: Welcome

---

# Example

let hasAccess = false;

if (hasAccess) {
    console.log("Allowed");
} else {
    console.log("Denied");
}

Output: Denied


---

# Truthy and Falsy

This is VERY important in JavaScript.

# JavaScript converts values into Boolean internally.

---
# Falsy Values

Only these become false:
false
0
""
null
undefined
NaN


Everything else is mostly truthy.
# Example
if ("Sachin") {
    console.log("Runs");
}

Output: Runs
Because non-empty string is truthy.

---

# Boolean Conversion
# Using Boolean()

Boolean(1)

Output: true

---

# Example
Boolean(0)
Output: false

---

# Conversion Table

| Value       | Boolean Result |
| ----------- | -------------- |
| `1`         | true           |
| `0`         | false          |
| `"Hello"`   | true           |
| `""`        | false          |
| `null`      | false          |
| `undefined` | false          |

---

# Logical Operators
Booleans become powerful with logic.

---

# AND (`&&`)
Both must be true.

true && true
Output: true

---

# OR (`||`) At least one true.

true || false
Output: true

---

# NOT (`!`) Reverses value.
!true

Output: false

---

# Real-World Example

---

# Login System
let isLoggedIn = true;
let hasSubscription = false;

if (isLoggedIn && hasSubscription) {
    console.log("Watch Premium");
} else {
    console.log("Upgrade Needed");
}
Output: Upgrade Needed

---

# Internal Engine View

---

# Before Execution
var isActive = true;

Memory Creation:
isActive → undefined


---

# During Execution
isActive → true


---

# Common Beginner Mistakes

---

# Mistake 1

if ("false") {
    console.log("Runs");
}

Output: Runs
Because non-empty strings are truthy.

---

# Mistake 2
console.log(true + true);
Output:2

Because:
true  → 1
false → 0


---

# Boolean Wrapper Object

Rarely used.
let value = new Boolean(true);

Avoid this in real projects.
Use primitive booleans instead.

---

# Easy Summary

| Concept      | Meaning                     |
| ------------ | --------------------------- |
| Boolean      | true or false               |
| Primitive?   | Yes                         |
| typeof true  | `"boolean"`                 |
| Memory       | Direct value storage        |
| Used for     | Conditions and logic        |
| Hoisting     | Depends on var/let/const    |
| Falsy values | 0, "", null, undefined, NaN |

---

# Final Analogy Recap

| JavaScript   | Real Life            |
| ------------ | -------------------- |
| true         | Light ON             |
| false        | Light OFF            |
| if condition | Security gate check  |
| &&           | Both doors must open |
| ||           | Any one door opens   |
| !            | Reverse switch       |

*/


_______________________________________________________________________________________________



/* 


Type Coercion with +


| Expression      | Internal Conversion | Result                             |
| --------------- | ------------------- | -----------------------------------|
| `true + true`   | `1 + 1`             | `2`                                |
| `true + false`  | `1 + 0`             | `1`                                |
| `false + false` | `0 + 0`             | `0`                                |
| `"5" + 2`       | `"5" + "2"`         | `"52"`                             |
| `5 + "2"`       | `"5" + "2"`         | `"52"`                             |
| `5 + 2`         | `5 + 2`             | `7`                                |
| `null + 1`      | `0 + 1`             | `1`                                |
| `undefined + 1` | `NaN + 1`           | `NaN`                              |
| `true + "5"`    | `"true" + "5"`      | `"true5"`                          |
| `[] + []`       | `"" + ""`           | `""`                               |
| `[] + 1`        | `"" + 1`            | `"1"`                              |
| `[1,2] + [3,4]` | `"1,2" + "3,4"`     | `"1,23,4"`                         |
| `{} + {}`       | `"[object Object]"` | `"[object Object][object Object]"` |
*/