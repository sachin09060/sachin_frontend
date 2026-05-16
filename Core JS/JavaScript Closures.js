// JavaScript Closures

/* 
Simple Definition:
A closure is when a function remembers "variables" from its "outer scope" even after the outer function has finished execution.

“Function + remembered outer variables = Closure”

Real-Time Analogy
Imagine: A mother gives her child a lunch box before going to office.
The child can eat the food from the lunch box even when the mother is not around.
The child has access to the lunch box (variables) even when the mother (outer function) is not around.

Similarly:
    outer function finishes execution
    but inner function still remembers(access) outer variables.

That memory behavior is called: Closure
*/

/* 
Why Closures Exist:

In JavaScript:
Functions are: First-Class Citizens

Meaning:
    functions can return functions
    functions can be stored in variables
    functions can be passed around
Because of this, inner functions carry their outer scope memory with them.

Closures exist because of: Lexical Scope
Lexical scope means: Inner functions have access to variables of their outer functions.
(One function can access variables from its parent scope)

Example:
*/

function outer() {
  let name = "Sachin";

  function inner() {
    console.log(name);
  }

  return inner;
}

const result = outer();

result(); // Output: Sachin

/* 
Step-by-Step Execution

Step 1 → Global Execution Context

Memory:
| Variable | Value    |
| -------- | -------- |
| outer    | function |
| result   | empty    |

Step 2 → outer() Executes
let name = "Sachin";

Memory inside outer():
| Variable | Value    |
| -------- | -------- |
| name     | "Sachin" |
| inner    | function |


Step 3 → outer() Returns inner()
Normally:
function execution ends
local variables should disappear

BUT…
JavaScript notices:

👉 inner() still depends on name
So JS keeps that variable alive in memory.

Step 4 → result()
Even though outer() already finished:
result() can still access name because of closure.

Visual Representation
Global
 ├── outer()
      ├── name = "Sachin"
      └── inner()

After outer() finishes:
inner() ---> still connected to name
*/


/* 
Real-Time Analogy (Easy Version)

Imagine:
A bakery closes at night: But customers still carry cakes bought earlier.

Similarly:
    Outer function ends.
    But inner function still carries outer variables.
*/

/* 
Why?
Because inner() can access name from its parent function.
inner() is returned and stored in result. So it can access parent variables.


Visual Representation:
Global
 └── outer()
      ├── name
      └── inner()

Scope Chain:
    JavaScript searches variables upward.
    result() can climb upward.
    Real-Time Analogy

Imagine:    
A child can access:
    their own toys  
    parent's things 
    But parent cannot access child's secret pocket.

Similarly:
Inner scope can access outer scope.
Outer scope cannot access inner scope.

*/

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3

/* 
Why Count Persists?
Because of closure.
Even though counter() has finished execution, the inner function still has access to count.
So it can increment and log the updated count value.

Important Point
 Every time: counter() is called, a new closure is created with its own count variable.
 So if we create another counter, it will have its own count variable.

const c1 = counter();
const c2 = counter();

c1(); // Output: 1 c1 has separate memory
c1(); // Output: 2 c1 has separate memory

c2(); // Output: 1 (c2 has its own count variable) c2 has separate memory

Closures and Lexical Scope
Closures happen because of: Lexical Scope

Inner function can access parent variables.
Closure preserves that access permanently.
*/

// Closures with Parameters
function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const user = greet("Sachin");

user(); // Output: Hello Sachin

/* 
Closures in Real Projects

Closures are heavily used in:
    React hooks
    Event listeners
    Callbacks
    Timers
    Data privacy
    Currying
    Memoization
*/

// Real Example — Data Privacy
function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
      console.log(balance);
    },

    withdraw(amount) {
      balance -= amount;
      console.log(balance);
    }
  };
}

const account = bankAccount();

account.deposit(500);  // Output: 1500
account.withdraw(200); // Output: 1300

/* 
Why is this Powerful?
Outside code cannot directly access: balance
It becomes private.

Closure Memory Behavior

Normally:
    When function finishes: local variables are removed from memory.
    But closures prevent garbage collection because variables are still referenced.
*/

//__________________________________________________________________________________________________________________________

/* 
Important Interview Question
Do Closures Cause Memory Leaks?
Possible — if unused closures keep large data alive unnecessarily.

Example:
    event listeners not removed
    timers running forever
*/


// Closures with setTimeout

function timer() {
  let message = "Done";

  setTimeout(function () {
    console.log(message);
  }, 2000);
}

timer(); // Output after 2 seconds: Done

/* 
Why?
Because the inner function passed to setTimeout forms a closure that retains access to the message variable, 
even after timer() has finished executing. This allows the message to be logged after the specified delay.

Memory Implications
If timer() is called multiple times without proper cleanup, it can lead to multiple closures retaining access to their own message variables, 
which may consume more memory over time if not managed properly.

Even after timer() ends,
callback remembers message.
That’s closure.
*/  

/* 
Common Interview Example

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

output: 4 4 4

Why?
Because var is function-scoped, not block-scoped. 
The variable i is shared across all iterations of the loop, and by the time the setTimeout callbacks execute, 
the loop has completed and i has the value 4.
All callbacks reference the same i, which is why they all log 4.

Solution: Use let instead of var

Because:
var is function scoped
all callbacks share same i

By execution time: i is 4

Solution Using let:
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

Output: 1 2 3
Because let creates new block scope each iteration.

Closure Summary:
| Concept      | Meaning                             |
| ------------ | ----------------------------------- |
| Closure      | Function remembers outer variables  |
| Created When | Inner function accesses outer scope |
| Based On     | Lexical scope                       |
| Memory       | Variables stay alive                |
| Use Cases    | Privacy, callbacks, timers, React   |


Visual Closure Flow
outer()
 ├── data = 10
 └── return inner()

inner()
 └── remembers data forever


Final Simple Definition

Closure is a feature where an inner function remembers and accesses variables from its outer function even after the outer
function has completed execution.
*/