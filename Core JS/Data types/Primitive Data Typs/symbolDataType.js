/* 
# 6. Symbol in JavaScript

Now we move to one of the MOST advanced primitive types:

# `Symbol`

This is less used by beginners,
but VERY important for:

* Advanced JavaScript
* Framework internals
* Unique object keys
* Library development
* Iterators
* Meta programming

---

# Definition

A `Symbol` is:

> A unique and immutable primitive value.

Every symbol created is completely unique.
Even if descriptions are same.

---

# Real-Life Analogy

Think of:

# Human Fingerprints

Two people may have same name:

```text id="sym1"
Sachin
Sachin
```

But fingerprints are always unique.

That uniqueness = Symbol.

---

# Syntax

Symbols are created using:

```js id="sym2"
Symbol()
```

---

# Example 1

```js id="sym3"
let id = Symbol();

console.log(id);
```

Output:

```text id="sym4"
Symbol()
```

---

# Example 2 — With Description

```js id="sym5"
let userId = Symbol("id");

console.log(userId);
```

Output:

```text id="sym6"
Symbol(id)
```

---

# Important Rule

The description is ONLY for debugging.

It does NOT affect uniqueness.

---

# Unique Nature of Symbols

VERY IMPORTANT.

---

# Example

```js id="sym7"
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);
```

Output:

```js id="sym8"
false
```

---

# Why?

Because EVERY symbol is unique.

---

# Real-Life Analogy

Two Aadhaar cards may say:

```text id="sym9"
Name: Sachin
```

But Aadhaar numbers differ.

Same with symbols.

---

# typeof Symbol

```js id="sym10"
typeof Symbol()
```

Output:

```js id="sym11"
"symbol"
```

---

# Memory Concept

Symbols are primitive values.

Stored directly in memory.

---

# Example

```js id="sym12"
let token = Symbol("auth");
```

Memory:

```text id="sym13"
token → unique symbol value
```

---

# Internal Identity

Internally JavaScript creates:

```text id="sym14"
Symbol(auth) #839483
```

Unique hidden identity.

---

# Immutability

Symbols are immutable.

Cannot change symbol value after creation.

---

# Hoisting with Symbols

Symbol itself does NOT affect hoisting.

Variable declaration decides behavior.

---

# Using var

```js id="sym15"
console.log(id);

var id = Symbol("user");
```

Output:

```js id="sym16"
undefined
```

---

# Memory Creation

Before execution:

```text id="sym17"
id → undefined
```

After execution:

```text id="sym18"
id → Symbol(user)
```

---

# Using let

```js id="sym19"
console.log(id);

let id = Symbol("user");
```

Output:

```js id="sym20"
ReferenceError
```

Due to TDZ.

---

# Call Stack with Symbols

---

# Example

```js id="sym21"
function createId() {
    let id = Symbol("id");

    console.log(id);
}

createId();
```

---

# Call Stack Flow

```text id="sym22"
Global Execution Context
↓
createId()
```

Function memory:

```text id="sym23"
id → Symbol(id)
```

After completion:

```text id="sym24"
createId() removed
```

---

# Why Symbols Were Introduced

Main reason:

# Avoid object property collisions

---

# Problem Before Symbols

```js id="sym25"
let user = {
    id: 101
};
```

Another developer:

```js id="sym26"
user.id = "admin";
```

Property overwritten accidentally.

---

# Solution with Symbol

```js id="sym27"
let id = Symbol("id");

let user = {
    [id]: 101
};
```

Now collision avoided.

---

# Accessing Symbol Properties

---

# Example

```js id="sym28"
let id = Symbol("id");

let user = {
    [id]: 101
};

console.log(user[id]);
```

Output:

```js id="sym29"
101
```

---

# Why Square Brackets?

Because symbol is evaluated as variable.

---

# Wrong Way

```js id="sym30"
user.id
```

This searches normal property `"id"`.

NOT symbol.

---

# Symbols Are Hidden in Loops

VERY important behavior.

---

# Example

```js id="sym31"
let secret = Symbol("secret");

let user = {
    name: "Sachin",
    [secret]: "hidden data"
};

for (let key in user) {
    console.log(key);
}
```

Output:

```js id="sym32"
name
```

Symbol property hidden.

---

# Why Useful?

Frameworks and libraries use symbols for:

* Private metadata
* Hidden internal properties

---

# Getting Symbol Properties

---

# Using Object.getOwnPropertySymbols()

```js id="sym33"
let secret = Symbol("secret");

let obj = {
    [secret]: 123
};

console.log(Object.getOwnPropertySymbols(obj));
```

Output:

```text id="sym34"
[ Symbol(secret) ]
```

---

# Global Symbol Registry

Advanced concept.

---

# Symbol.for()

Creates shared global symbol.

---

# Example

```js id="sym35"
let a = Symbol.for("id");
let b = Symbol.for("id");

console.log(a === b);
```

Output:

```js id="sym36"
true
```

---

# Difference

| Method       | Unique?         |
| ------------ | --------------- |
| Symbol()     | Always unique   |
| Symbol.for() | Shared globally |

---

# Real-Life Analogy

---

# Symbol()

Creating private house key.

---

# Symbol.for()

Using shared office master key.

---

# Well-Known Symbols

JavaScript has built-in symbols.

Example:

```js id="sym37"
Symbol.iterator
```

Used internally by arrays and loops.

---

# Example

```js id="sym38"
let arr = [1, 2, 3];

console.log(arr[Symbol.iterator]);
```

---

# Primitive Yet Special

Symbols are primitive,
but behave differently from strings/numbers.

---

# Cannot Auto Convert to String

---

# Example

```js id="sym39"
let id = Symbol("id");

console.log("User: " + id);
```

Output:

```text id="sym40"
TypeError
```

---

# Correct Way

```js id="sym41"
console.log(id.toString());
```

Output:

```text id="sym42"
Symbol(id)
```

---

# Truthy or Falsy?

Symbols are always truthy.

---

# Example

```js id="sym43"
if (Symbol()) {
    console.log("Runs");
}
```

Output:

```js id="sym44"
Runs
```

---

# Common Beginner Mistakes

---

# Mistake 1

Thinking description controls uniqueness.

```js id="sym45"
Symbol("id") === Symbol("id")
```

Output:

```js id="sym46"
false
```

---

# Mistake 2

Trying direct object access.

Wrong:

```js id="sym47"
user.id
```

Correct:

```js id="sym48"
user[id]
```

---

# Internal Engine View

---

# Memory Creation

```js id="sym49"
var token = Symbol("auth");
```

Before execution:

```text id="sym50"
token → undefined
```

After execution:

```text id="sym51"
token → Symbol(auth)
```

---

# Easy Summary

| Concept          | Meaning                |
| ---------------- | ---------------------- |
| Symbol           | Unique primitive value |
| Primitive?       | Yes                    |
| typeof           | `"symbol"`             |
| Mutable?         | ❌ No                   |
| Main use         | Unique object keys     |
| Hidden in loops? | Yes                    |
| Truthy?          | Yes                    |

---

# Final Analogy Recap

| JavaScript      | Real Life            |
| --------------- | -------------------- |
| Symbol          | Fingerprint          |
| Symbol()        | Private unique key   |
| Symbol.for()    | Shared master key    |
| Symbol property | Secret hidden locker |
| Unique identity | Aadhaar number       |

*/