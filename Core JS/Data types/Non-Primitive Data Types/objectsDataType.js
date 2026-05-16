/* 
# JavaScript Objects — Deep Dive

Objects are the foundation of JavaScript.

Almost everything in JavaScript is built around objects:

* Arrays
* Functions
* Dates
* Maps
* Sets

All are internally objects.

---

# What is an Object?

## Definition

An object is a **collection of key-value pairs**.

```js
const user = {
  name: "Sachin",
  age: 25
}
```

Here:

| Key  | Value    |
| ---- | -------- |
| name | "Sachin" |
| age  | 25       |

---

# Real World Analogy

Think of an object like a:

# Bank Account File

```text
Account
 ├── Name
 ├── Balance
 ├── IFSC
 ├── Branch
 └── Transactions
```

Everything related to one entity is grouped together.

That grouped structure = Object.

---

# Why Objects Exist

Without objects:

```js
const userName = "Sachin"
const userAge = 25
const userCity = "Mysore"
```

Problem:

* data scattered everywhere
* hard to manage

Objects solve this:

```js
const user = {
  name: "Sachin",
  age: 25,
  city: "Mysore"
}
```

---

# Object Creation Methods

---

# 1. Object Literal (Most Common)

```js
const person = {
  name: "Sachin",
  age: 25
}
```

---

# 2. Using new Object()

```js
const person = new Object()

person.name = "Sachin"
person.age = 25
```

---

# 3. Constructor Function

```js
function User(name, age) {
  this.name = name
  this.age = age
}

const u1 = new User("Sachin", 25)
```

---

# 4. Object.create()

```js
const userProto = {
  greet() {
    console.log("Hello")
  }
}

const user = Object.create(userProto)
```

Used for prototype inheritance.

---

# Object Memory Architecture

This is VERY important.

---

# JavaScript Memory Types

JavaScript mainly uses:

| Memory       | Purpose                       |
| ------------ | ----------------------------- |
| Stack Memory | Primitive values & references |
| Heap Memory  | Objects                       |

---

# Object Memory Example

```js
const user = {
  name: "Sachin"
}
```

---

# Step-by-Step Memory Creation

---

# Step 1 — Global Execution Context Created

When JS starts:

```text
Global Execution Context
```

Gets pushed into Call Stack.

---

# Step 2 — Memory Allocation Phase

Variable created:

```js
user
```

Initially:

```text
user → uninitialized (const)
```

---

# Step 3 — Execution Phase

Object created in HEAP memory.

```text
Heap Memory
------------
0x100 → {
  name: "Sachin"
}
```

Variable stores reference:

```text
Stack Memory
-------------
user → 0x100
```

---

# Final Memory Structure

```text
Stack
------
user → 0x100

Heap
------
0x100 → {
  name: "Sachin"
}
```

---

# Why Objects Use Heap Memory

Objects:

* dynamic in size
* mutable
* complex

Heap supports:

* dynamic allocation
* resizing
* large storage

Stack is small and fast.

---

# Accessing Object Properties

---

# Dot Notation

```js
console.log(user.name)
```

JS does:

1. Find `user`
2. Get reference
3. Go to heap
4. Read property

---

# Bracket Notation

```js
console.log(user["name"])
```

Useful for:

* dynamic keys
* spaces
* special characters

Example:

```js
const key = "age"

console.log(user[key])
```

---

# Object Mutation

Objects are mutable.

```js
const user = {
  name: "Sachin"
}

user.name = "Kumar"
```

Heap updated directly.

---

# Memory During Mutation

Before:

```text
0x100 → { name: "Sachin" }
```

After:

```text
0x100 → { name: "Kumar" }
```

Reference stays SAME.

---

# Reference Behavior

VERY IMPORTANT.

---

# Example

```js
const obj1 = {
  city: "Bangalore"
}

const obj2 = obj1
```

---

# Memory

```text
Stack
------
obj1 → 0x100
obj2 → 0x100

Heap
------
0x100 → {
  city: "Bangalore"
}
```

Both point to SAME object.

---

# Mutation Effect

```js
obj2.city = "Mysore"

console.log(obj1.city)
```

Output:

```js
Mysore
```

Because:

* same heap object

---

# Object Comparison

---

# Example

```js
const a = { x: 1 }
const b = { x: 1 }

console.log(a === b)
```

Output:

```js
false
```

Why?

Different memory addresses:

```text
a → 0x100
b → 0x200
```

---

# Execution Context Deep Dive

VERY IMPORTANT topic.

---

# What is Execution Context?

Environment where JavaScript code executes.

Contains:

* memory
* variables
* scope chain
* this keyword

---

# Types of Execution Context

| Type                       | Description          |
| -------------------------- | -------------------- |
| Global Execution Context   | Created first        |
| Function Execution Context | Created per function |
| Eval Execution Context     | Rare                 |

---

# Example with Objects

```js
const user = {
  name: "Sachin"
}

function printUser(obj) {
  console.log(obj.name)
}

printUser(user)
```

---

# Step-by-Step Execution

---

# Step 1 — Global Execution Context Created

Call Stack:

```text
| Global EC |
```

---

# Step 2 — Memory Phase

Memory allocated:

```text
user → uninitialized
printUser → function
```

---

# Step 3 — Execution Phase

Object created in heap.

```text
Heap
-----
0x100 → { name: "Sachin" }
```

Reference stored:

```text
user → 0x100
```

---

# Step 4 — Function Call

```js
printUser(user)
```

New Function Execution Context created.

Call Stack:

```text
| printUser EC |
| Global EC    |
```

---

# Step 5 — Parameter Passing

`obj` receives SAME reference.

```text
obj → 0x100
```

---

# Step 6 — Property Access

```js
obj.name
```

JS:

1. goes to heap
2. finds property
3. returns value

---

# Step 7 — Function Removed

After execution:

```text
| Global EC |
```

Function context popped from stack.

---

# Call Stack Deep Dive

Call Stack manages execution contexts.

Follows:

# LIFO

(Last In First Out)

---

# Example

```js
function one() {
  two()
}

function two() {
  three()
}

function three() {
  console.log("Hello")
}

one()
```

---

# Stack Flow

---

## Initial

```text
| Global |
```

---

## one()

```text
| one    |
| Global |
```

---

## two()

```text
| two    |
| one    |
| Global |
```

---

## three()

```text
| three  |
| two    |
| one    |
| Global |
```

---

## Return

```text
| two    |
| one    |
| Global |
```

Then:

```text
| one    |
| Global |
```

Then:

```text
| Global |
```

---

# Scope in Objects

Objects themselves do NOT create scope.

Functions create scope.

---

# Example

```js
const user = {
  name: "Sachin"
}

{
  let age = 25
}

console.log(age)
```

Output:

```js
ReferenceError
```

Because:

* block scope from `let`
* NOT object scope

---

# Object Inside Function Scope

```js
function test() {
  const user = {
    name: "Sachin"
  }

  console.log(user.name)
}

test()
```

`user` only exists inside function scope.

---

# Lexical Scope

Functions remember parent scope.

```js
const city = "Mysore"

function outer() {
  const user = {
    name: "Sachin"
  }

  function inner() {
    console.log(user.name)
    console.log(city)
  }

  inner()
}

outer()
```

Inner function accesses outer variables.

---

# Hoisting with Objects

Objects are NOT hoisted separately.

Variables follow normal hoisting rules.

---

# var Example

```js
console.log(user)

var user = {
  name: "Sachin"
}
```

Output:

```js
undefined
```

Because:

```text
var user = undefined
```

during memory phase.

---

# let Example

```js
console.log(user)

let user = {
  name: "Sachin"
}
```

Output:

```js
ReferenceError
```

Because:

# TDZ (Temporal Dead Zone)

---

# const Example

```js
console.log(user)

const user = {
  name: "Sachin"
}
```

Also:

```js
ReferenceError
```

---

# Important Const Rule

VERY IMPORTANT interview concept.

---

# This Works

```js
const user = {
  name: "Sachin"
}

user.name = "Kumar"
```

---

# This Fails

```js
user = {}
```

Why?

Because:

* const protects REFERENCE
* not internal object data

---

# Garbage Collection

Objects in heap are cleaned automatically.

---

# Example

```js
let user = {
  name: "Sachin"
}

user = null
```

Now object has no reference.

Eventually removed by:

# Garbage Collector

---

# Shallow Copy

```js
const a = {
  name: "Sachin"
}

const b = { ...a }
```

Creates NEW object.

---

# But Nested Objects Problem

```js
const a = {
  address: {
    city: "Mysore"
  }
}

const b = { ...a }

b.address.city = "Bangalore"
```

Both affected.

Because nested reference shared.

---

# Deep Copy

```js
const deep = structuredClone(a)
```

Creates completely independent copy.

---

# Internal Engine Optimization

JavaScript engines optimize objects using:

* hidden classes
* inline caching
* hash maps

This makes property access fast.

---

# Summary Table

| Topic              | Object Behavior           |
| ------------------ | ------------------------- |
| Type               | Non-primitive             |
| Stored In          | Heap                      |
| Variable Stores    | Reference                 |
| Mutable            | Yes                       |
| Compared By        | Reference                 |
| Scope Created?     | No                        |
| Hoisting           | Depends on var/let/const  |
| Execution Context  | Uses references           |
| Call Stack         | Stores execution contexts |
| Garbage Collection | Automatic                 |

---

Next best topic:

# Object Methods + `this` keyword + Prototype Chain + Constructor Functions

This is where JavaScript becomes truly powerful.

*/