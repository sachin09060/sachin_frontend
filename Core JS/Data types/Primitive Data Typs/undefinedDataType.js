/*
1. Undefined

The simplest primitive type.

Definition
undefined means: “A variable exists, but no value is assigned yet.”
JavaScript automatically gives this value.
*/
//__________________________________________________________________________________

/*
Real-Life Analogy

Imagine: You bought a new empty notebook.

Notebook exists ✅
Nothing written inside ❌

That empty state = undefined
*/
//__________________________________________________________________________________

// Syntax
let data;

// JavaScript internally does: let data = undefined;

// Example 1
let name;

console.log(name); // Output: undefined

// Example 2
let age = undefined;

console.log(age); // Output: undefined

/*
Though technically valid,
developers usually avoid assigning it manually.
JavaScript Automatically Assigns undefined.
*/
//__________________________________________________________________________________

// typeof undefined: typeof undefined returns "undefined"
console.log(typeof undefined); // Output: "undefined"

//__________________________________________________________________________________

/* 
Memory Concept: Now we go deeper.

Memory Creation Phase: JavaScript runs code in 2 phases:
1. Memory Creation Phase
2. Execution Phase

Example: 
console.log(a);
var a = 10;

Phase 1 — Memory Creation: JavaScript scans variables first.
Memory becomes:
| Variable | Value     |
| -------- | --------- |
| a        | undefined |


Phase 2 — Execution: JavaScript executes code line by line.
console.log(a); // Output: undefined
a = 10; // Then a gets the value 10

Now memory updates:
| Variable | Value |
| -------- | ----- |
| a        | 10    |
*/

//__________________________________________________________________________________

/* 
Hoisting and undefined:
Example:

console.log(city);
var city = "Mysore";

output: undefined

Why? Because of hoisting, var is hoisted. JavaScript moves variable declarations to the top during the memory creation phase. So it’s as if

Internally JavaScript treats it like:

var city;
console.log(city);
city = "Mysore";
*/

//___________________________________________________________________________________

/* 
Call Stack Concept: 
JavaScript uses something called: Call Stack to manage function execution.

Think of it like:

A stack of plates in hotel kitchen.
Last added plate comes first out.
*/

// Example
function one() {
    console.log("One");
}

function two() {
    one();
}

two();

/* 
Stack Flow

Global Execution Context
↓
two()
↓
one()

Then removed in reverse order.


Where undefined fits here

During execution context creation:
Variables stored in memory
Initially assigned undefined
*/


/*
let and const Difference 

Using let

console.log(a);
let a = 10; 

output: ReferenceError
Cannot access 'a' before initialization

Why?

Because of:
Temporal Dead Zone (TDZ)
Variable exists in memory,
but inaccessible before declaration.

Visual Memory Diagram:

var Example: var x = 5;

Memory before execution: x → undefined
After execution: x → 5

let Example: let y = 5;

Memory before execution: y → (exists but inaccessible TDZ)
After declaration: y → 5

const Example: const z = 5;

Memory before execution: z → (exists but inaccessible TDZ)
After declaration: z → 5

Undefined in Functions: Missing Arguments

function greet(name) {
    console.log(name);
}

greet();

output: undefined
Because: No argument passed, so name is undefined.

Returning Nothing:

function test() {}
console.log(test());

output: undefined
Because: No return statement, so it returns undefined by default.
*/

//__________________________________________________________________________________

/* 
Common Beginner Mistake

Typo in Variable Name

let userName = "Sachin";
console.log(username);

output: ReferenceError
Because: username is not defined (case-sensitive)


Undefined vs Not Defined
| Situation                 | Result         |
| ------------------------- | -------------- |
| Variable exists but empty | undefined      |
| Variable never declared   | ReferenceError |


Undefined in Arrays
let arr = [1, , 3];
console.log(arr[1]); // Output: undefined
Because: No value assigned to index 1, so it’s undefined.


Undefined as Object Property

let user = {
    name: "Sachin"
};

console.log(user.age); // Output: undefined
Because: age property does not exist in user object, so it’s undefined.
*/

//__________________________________________________________________________________

/*
Important Interview Question:

null vs undefined

We’ll study null next deeply,
but quick difference:
- `undefined` is the default value of uninitialized variables and missing object properties.
- `null` is an assignment value that represents "no value" or "empty value".

| undefined  | null              |
| ---------- | ----------------- |
| Automatic  | Intentional       |
| JS assigns | Developer assigns |



Easy Summary
| Concept                 | Meaning                   |
| ----------------------- | ------------------------- |
| undefined               | Variable exists but empty |
| Automatically assigned? | Yes                       |
| Primitive?              | Yes                       |
| typeof undefined        | `"undefined"`             |
| Hoisted with var?       | Yes                       |
| Hoisted with let/const? | TDZ                       |
| Memory initial value    | undefined                 |


Final Analogy Recap
| JavaScript        | Real Life                       |
| ----------------- | ------------------------------- |
| Variable declared | Empty container created         |
| undefined         | Container has nothing inside    |
| var hoisting      | Label created early             |
| TDZ               | Locked container before opening |
*/


