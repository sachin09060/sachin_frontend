// A variable is simply a container used to store data(storing data values). A variable stores a value that can be used later in the program.
// Variable means anything that can vary. In javascript, variable can store data values that can be changed later on.

/* 
Declared using var, let, or const

var → function-scoped, older style.
let → block-scoped, modern and flexible.
const → block-scoped, but value cannot be reassigned.
*/

var a = 5;
console.log("a", a)
// a = variable, 5 = value stored inside variable

var greet = 'Hello!'
console.log("greet", greet)
// greet = variable, Hello! = value stored inside variable

/*
Real-Life Analogy
Imagine your house kitchen.
You have containers with labels:
Sugar Jar
Salt Jar
Rice Box
The label = Variable Name
The content inside = Variable Value
*/

let sugar = "2kg";

/*
sugar = container label
"2kg" = actual content
*/

/* 

🔹 Static Typing
Type declaration required → Variables must be declared with a specific type (e.g., int x = 10;).
Type checking at compile time → Errors are caught before running the program.
Strict type safety → Once declared, the type cannot change (e.g., an int cannot later hold a string).
Predictability → Programs are more reliable and less prone to runtime type errors.
Examples → Languages like Java, C, C++, C#.


🔹 Dynamic Typing
No type declaration needed → Variables can hold any type without specifying upfront (e.g., let x = 10;).
Type checking at runtime → Errors may only appear when the program executes.
Flexible type assignment → A variable can change type during execution (e.g., x = 10; x = "ten";).
Faster development → Less boilerplate code, easier experimentation.
Examples → Languages like JavaScript, Python, Ruby.
Executes line by line.


🔹 Rules for Creating Variable Names
Must start with a letter, underscore (_), or dollar sign ($).
Cannot start with a number.
Can contain letters, digits, underscores, and dollar signs.
Case-sensitive (myVar ≠ MyVar).
Cannot use reserved keywords (e.g., let, class, return).

🔹 Identifiers
An identifier is simply the name given to a variable, function, or object.
They follow the same rules as variable names.
Good identifiers should be meaningful and self-explanatory.

*/

let _count = 10;
let $price = 99.99;
let userName = "Sachin";

// Invalid examples:

// let 1name = "Sachin";   // ❌ starts with number
// let let = 5;            // ❌ reserved keyword

function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

/*
Naming Conventions: camelCase (Most Common)
let firstName;
let totalAmount;

| Feature      | var      | let       | const             |
| ------------ | -------- | --------- | ------------------|
| Reassign     | ✅       | ✅       | ❌                |
| Redeclare    | ✅       | ❌       | ❌                |
| Scope        | Function | Block     | Block              |
| Hoisting     | Yes      | Yes (TDZ) | Yes (TDZ)          |
| Modern Usage | ❌ Rare   | ✅ Common  | ✅ Very Common |


*/

// Here, calculateTotal, price, and taxRate are identifiers.

/*
Types of Variable Declarations

JavaScript has 3 ways to create variables:
var
let
const
*/

// 1. var : Old way of creating variables. Features of var: Can be Re-declared
var city = "Mysore";

// Think of var like a whiteboard in an office. Anyone can erase or rewrite it easily.

var name = "Sachin";
var name = "Prajwal";

// Can be Reassigned
var age = 22;
age = 23;

//Function Scoped: Accessible inside the function only.

function test() {
    var x = 10;
    console.log(x);
}

test();

// Hoisting: var moves to top internally.

console.log(a);
var a = 10;

// Output: undefined

//Internally JavaScript treats it like:

var a;
console.log(a);
a = 10;

// Problems with var:
if (true) {
    var x = 100;
}

console.log(x);
// Output: 100, Even though it was inside block. This caused many bugs.


//2. let: Modern way to declare variables.
let name1 = "Sachin";

/*
Real-Life Analogy

let is like your personal notebook.
You can edit your notes,
but others outside the room cannot access it.
*/

// Features of let: Cannot be Re-declared - unique identifiers
let name2 = "Sachin";
// let name2 = "Kiran"; // Error

// Can be Reassigned
let age2 = 22;
age2 = 23;


/*
Block Scoped
Accessible only inside { }
*/

if (true) {
    let score = 90;
    console.log(score);
}
// console.log(score); // Error

//Hoisting in let

console.log(a);
let a = 10;

//Output: ReferenceError
/*
Because of something called:

Temporal Dead Zone (TDZ)
The variable exists,
but cannot be used before declaration.
 */


//3. const : Used for fixed values.

const pi = 3.14;

/*
Real-Life Analogy

const is like engraving/writing something on stone.

Once written,
you cannot replace it.

Features of const: Cannot be Re-declared
const a = 10;
const a = 20; // Error

Cannot be Reassigned
const age = 22;
age = 23; // Error

Must Initialize Immediately

Wrong: const x;
Correct: const x = 10;

Block Scoped: Same as let.


Important Confusion About const
Objects and Arrays
const prevents reassignment, NOT modification.

const fruits = ["apple"];
fruits.push("banana");
console.log(fruits); output: ["apple", "banana"]

Why?
Because the reference stays same.
Only internal contents changed.

Memory Analogy
Imagine: const box = ["apple"];

JavaScript creates:
One memory address
box points to that address
You cannot make box point somewhere else.
But you can change items inside.
*/