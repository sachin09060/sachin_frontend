/* 
JavaScript Scope:
Scope determines where a variable can be accessed in your code.

It answers: “From where can I use this variable?”

Real-Time Analogy

Imagine a house: Different rooms have different access permissions.
| Place       | Access               |
| ----------- | -------------------- |
| Living room | Everyone can access  |
| Bedroom     | Only specific people |
| Locker      | Private access       |


Similarly in JavaScript:

Some variables are accessible everywhere,
some only inside functions or blocks.
That accessibility area is called: Scope.

Why Scope is Important:
Scope helps:
    avoid variable conflicts
    secure data
    organize code
    prevent accidental changes

Types of Scope in JavaScript
JavaScript mainly has:
    1. Global Scope
    2. Function Scope
    3. Block Scope
    4. Lexical Scope

//_________________________________________________________________________________________________________________________

1. Global Scope:
Variables declared outside any function or block are in the global scope.
They can be accessed from anywhere in the code.
*/

let company = "OpenAI";

function show() {
  console.log(company); // OpenAI
}
show();
console.log(company); // OpenAI

/* 
Visual Representation

Global Space
 ├── company
 ├── show()

Real-Time Analogy:
WiFi in your house: Every room can access it.

Important Note
Too many global variables are dangerous.

Why?
Because any part of program can modify them.
*/

let score = 10;

function increase() {
  score++;
}

function decrease() {
  score--;
}

// Any function can change score.
// This may create bugs.

//_________________________________________________________________________________________________________________________

// 2. Function Scope: Variables declared inside a function are only accessible inside that function.

function greet() {
  let message = "Hello";
  console.log(message);
}
greet();

console.log(message); // Error: Uncaught ReferenceError, ReferenceError: message is not defined

/* 
Why?
Because message lives only inside greet().

Visual Representation
Global Scope
 └── greet()
      └── message

Outside cannot access inside variables.

Real-Time Analogy
A bedroom: Only people inside the room can access things there.
*/

// var is Function Scoped

function test() {
  var x = 100;
}

console.log(x); // Error: Uncaught ReferenceError, ReferenceError: x is not defined

//_________________________________________________________________________________________________________________________

/* 
3. Block Scope: Variables declared with let or const inside a block (like if, for) are only accessible within that block.
A block means: {}

Variables declared with: let, const are block scoped.

Example
{
  let age = 25;
  const city = "Delhi";
}

console.log(age); // Error: Uncaught ReferenceError, ReferenceError: age is not defined
console.log(city); // Error: Uncaught ReferenceError, ReferenceError: city is not defined

Why?
Because variables exist only inside the block.

Visual Representation
Global Scope
 └── Block
      ├── age
      └── city

Outside block → inaccessible.


Real-Time Analogy
A locker: Only people with the key can access it.
Office meeting room: Only people inside can hear discussion. Outside people cannot access it.

var Ignores Block Scope
{
  var a = 10;
}

console.log(a); // 10  

Because: var is NOT block scoped

Important Interview Question
Difference Between var and let

| Feature         | var | let |
| --------------- | --- | --- |
| Function Scoped | Yes | No  |
| Block Scoped    | No  | Yes |
| Hoisting        | Yes | Yes |
| TDZ             | No  | Yes |


//_________________________________________________________________________________________________________________________


4. Lexical Scope:
Lexical scope means: Inner functions have access to variables of their outer functions.
(One function can access variables from its parent scope)

Example:
*/

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer(); // Output: I am outer

/* 
Why?
Because inner() can access outerVar from its parent function.
inner() is written inside outer(). So it can access parent variables.

Visual Representation:
Global
 └── outer()
      ├── outerVar
      └── inner()

Scope Chain:
JavaScript searches variables upward.
inner() can climb upward.

Real-Time Analogy

Imagine:

A child can access:
their own toys
parent's things
But parent cannot access child's secret pocket.

Similarly:
Inner scope can access outer scope.
Outer scope cannot access inner scope.

Example:
*/

let country = "India";

function outer() {
  let state = "Karnataka";

  function inner() {
    let city = "Belgaum";

    console.log(city);    // Belgaum
    console.log(state);   // Karnataka
    console.log(country); // India
  }

  inner(); // Output: Belgaum, Karnataka, India
}

outer(); // Output: Belgaum, Karnataka, India

/* 
Important Rule

JavaScript searches:
    Current scope
    Parent scope
    Global scope

If not found: ReferenceError
*/

// Nested Scope Example
function a() {
  let x = 10;

  function b() {
    let y = 20;

    function c() {
      let z = 30;

      console.log(x, y, z); // 10 20 30
    }

    c(); // Output: 10 20 30
  }

  b(); // Output: 10 20 30
}

a(); // Output: 10 20 30

/* 
In this example:
inner() can access city, state, country.
outer() can access state, country but not city.
Summary:
Scope determines variable accessibility.
Global scope: Accessible everywhere.
Function scope: Accessible inside functions.
Block scope: Accessible inside blocks.
Lexical scope: Inner functions can access outer variables.
Understanding scope is crucial for writing clean, bug-free JavaScript code.
*/

/* 
Scope vs Memory

Each function creates its own:
    Execution Context
    Variable Environment
    Scope

Variables live in memory according to scope.

Common Mistake
if (true) {
  var x = 10;
}

console.log(x); // Output: 10

Why?
Because var is function scoped(ignores block scope), not block scoped.

Final Simple Definition:
Scope defines the accessibility and visibility of variables in different parts of JavaScript code.
*/