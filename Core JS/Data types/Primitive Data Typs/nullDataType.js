/* 
# 2. Null in JavaScript

Now we move to the next primitive type: `null`
This is one of the MOST misunderstood topics in JavaScript.

_______________________________________________________________________________________________

# Definition

`null` means: “This variable intentionally has no value.” Unlike `undefined`, 

JavaScript does NOT assign `null` automatically. The developer manually assigns it.

_______________________________________________________________________________________________

# Real-Life Analogy

Imagine a hotel room.
| Room Number | Status          |
| ----------- | --------------- |
| 101         | Occupied        |
| 102         | Empty (null)    |
| 103         | Not assigned yet (undefined) |


## undefined

Room exists,
but nobody assigned yet.


## null : Hotel manager intentionally marks: “This room is empty.”
That intentional emptiness = `null`

_______________________________________________________________________________________________

# Syntax
let user = null;


# Example 1

let selectedUser = null;
console.log(selectedUser);
Output: null


# Example 2 — Real Project Scenario
let loggedInUser = null;


Meaning: No user logged in currently.

Later: loggedInUser = "Sachin";

# Important Rule
null is assigned manually, JavaScript NEVER automatically assigns null.

_______________________________________________________________________________________________

# typeof null

Now comes a famous JavaScript weird behavior.

typeof null
Output: "object"

# But wait… null is primitive right?

YES. `null` is primitive.

# Then why "object"?

Because of an OLD JavaScript bug.

Created in early JavaScript days,
and kept for backward compatibility.

_______________________________________________________________________________________________

# Important Interview Question

# Is null primitive?

✅ YES
Yes. In JavaScript, null is a primitive value. It represents the intentional absence of any object value. 
Alongside undefined, string, number, boolean, bigint, and symbol, it belongs to the set of primitive types.

# Then why typeof null gives object?

Because of historical JavaScript bug.

This is actually a bug in JavaScript’s design that dates back to its very first implementation in 1995:
In the original implementation, values were stored with a type tag.
Objects had the type tag 0.
null was represented as the null pointer (0x00).
When checked, null ended up sharing the same type tag as objects.
This mistake was never fixed because too much existing code relied on it.
So, typeof null === "object" is historical baggage, not logical design.

When JavaScript was first created, the people who built it made a small mistake. 
The computer used little number tags to tell what kind of thing a value was. 
Objects were given the tag **0**, and `null` (which means "nothing") was also stored as **0** because it was like an empty pointer. 
This made the computer think that `null` was an object. 
Even though this was wrong, many programs started using it, so fixing the mistake later would have broken too much code. 
That’s why today, even though `null` is really just a simple "nothing" value, JavaScript still says `typeof null` is `"object"`. 
It’s like a spelling mistake in a famous book that everyone knows is wrong, but it stays because it’s already printed everywhere.

_______________________________________________________________________________________________

# Memory Concept

# Example
let user = null;

# Memory Representation
user → null


Meaning: Variable intentionally points to nothing.



# Analogy

Imagine:
TV Remote → No TV Connected

Remote exists,
but connected to nothing.
That’s null.


# Hoisting with null

# Example with var
console.log(data);
var data = null;


Output: undefined
# Why not null?
Because during memory creation:
data → undefined

Only during execution:
data = null


# Internal Execution
## Phase 1 — Memory Creation : data → undefined

## Phase 2 — Execution : data = null

Memory updates: data → null


---

# let and const with null

## let
let value = null;

Perfectly valid.

## const
const apiData = null;
Also valid.

---

# Can we change null values?
YES.


## Example
let user = null;
user = "Sachin";

Allowed because `let` is reassignable.

---

# null vs undefined (Deep Comparison)

This is VERY important.

# undefined

Means: Value not assigned yet.

JavaScript decides this.


# null

Means: Empty intentionally.

Developer decides this.


# Real-Life Analogy

| Situation                               | Meaning   |
| --------------------------------------- | --------- |
| Empty delivery box arrived accidentally | undefined |
| You intentionally kept box empty        | null      |

---

# Comparison Examples

---

## undefined

```js id="3afm1q"
let name;

console.log(name);
```

Output:

```js id="vy1dgj"
undefined
```

---

## null

```js id="2xb8wk"
let name = null;

console.log(name);
```

Output:

```js id="8vw8u0"
null
```

---

# Equality Confusion

## Loose Equality
console.log(null == undefined);
Output: true

# Why?
Because JavaScript loosely treats both as “empty”.


## Strict Equality
console.log(null === undefined);

Output:
false

Because types differ.


# Call Stack and null
Note:
The JavaScript call stack is like a to‑do list that the JavaScript engine uses to keep track of what function is running and what needs to run next.

🧩 How it works
When you call a function, JavaScript puts it on top of the stack.
If that function calls another function, the new one goes on top.
JavaScript always runs the function at the top of the stack first.
When a function finishes, it’s removed from the stack, and JavaScript goes back to the one below it.
---


null itself does NOT affect call stack directly.
But variables containing null are stored in execution context memory.

# Example
function showUser() {
    let user = null;
    console.log(user);
}

showUser();

# Call Stack Flow
Global Execution Context
↓
showUser()


Inside function memory: user → null
After function completes: showUser removed from stack

_______________________________________________________________________________________________

# null in Objects

Very common in APIs.

## Example
let response = {
    name: "Sachin",
    profileImage: null
};

Meaning: User has no profile image currently.

---

# null in DOM
Very common in browser JavaScript.

## Example
document.getElementById("wrong-id");
Output: null

Meaning: Element not found.



# Falsy Nature of null
`null` is falsy.

## Example
let user = null;

if (user) {
    console.log("Exists");
} else {
    console.log("Empty");
}

Output: Empty


---

# Memory Visualization

## Before Assignment
let data;
Memory: data → undefined


## After Assignment
data = null;
Memory: data → null
Meaning: Variable now intentionally points to nothing.

# Best Practices: Use null intentionally

Good examples:
let currentUser = null;
let selectedFile = null;
let activeChat = null;


# Avoid confusing undefined and null

Use:

* `undefined` → system/default empty
* `null` → intentional empty

---

# Common Interview Questions

---

# Question 1

## Is null primitive?

✅ Yes

---

# Question 2

## typeof null ?
"object" -> Historical bug.


# Question 3
null == undefined ?
✅ true
Yes, they’re both “nothing
==, you say: “They’re both fruits, so kind of the same

# Question 4
## null === undefined ?
❌ false
No, they’re different kinds of “nothing.
===, you say: “No, one is an apple and one is an orange, so not exactly the same.”

---

# Easy Summary

| Concept                 | Meaning                     |
| ----------------------- | --------------------------- |
| null                    | Intentional empty value     |
| Primitive?              | Yes                         |
| Automatically assigned? | No                          |
| typeof null             | `"object"`                  |
| Falsy?                  | Yes                         |
| Hoisted?                | Depends on variable keyword |
| Common usage            | APIs, DOM, state reset      |

---

# Final Analogy Recap

| JavaScript    | Real Life                       |
| ------------- | ------------------------------- |
| undefined     | Empty room not assigned         |
| null          | Room intentionally marked empty |
| null variable | Connected to nothing            |
| typeof null   | Old system labeling mistake     |

*/