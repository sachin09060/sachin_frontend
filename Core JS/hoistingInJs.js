// JavaScript Hoisting


/* 
Definition: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope 
during the compilation phase. 
This means that you can use variables and functions before they are declared in the code.

But only the declarations are hoisted, not the values.

Real-Time Analogy (Very Simple): Imagine a classroom.
Before the teacher starts teaching: The teacher already has the attendance list of all presented students. 
If a student is present, the teacher can call their name and mark them as present, even if the student hasn't introduced themselves yet.

In this analogy:
- The teacher represents the JavaScript engine.
- The attendance list represents the hoisting mechanism.
- The students represent variables and functions.


Before JavaScript executes code:

It scans the entire code first.
It registers variables and functions in memory.
This pre-checking process is called: Hoisting


How JavaScript Executes Code
JavaScript runs code in 2 phases:

1. Compilation Phase / Memory Creation Phase:
- The JavaScript engine reads the code and looks for variable and function declarations.
- It allocates memory for these declarations and sets them to undefined (for variables) or the function definition (for functions).
- This is where hoisting happens.

| Item     | Stored Value      |
| -------- | ----------------- |
| var      | undefined         |
| let      | uninitialized     |
| const    | uninitialized     |
| function | complete function |

2. Execution Phase:
- The JavaScript engine executes the code line by line.
- During this phase, variables and functions are accessed and used as they were declared in the code.

console.log(name);
var name = "Sachin";
In the above code:
- During the compilation phase, the variable 'name' is hoisted and initialized to undefined.
- During the execution phase, when console.log(name) is executed, it outputs undefined because 'name' has not yet been assigned 
  the value "Sachin".

  What JavaScript Internally Does
  
  var name; // hoisted
  console.log(name);
  name = "Sachin";

  output: undefined

*/

/* 
Important Rules about Hoisting:
1. var is hoisted with: undefined:
   So accessing before initialization does NOT throw error.

2. let and const are hoisted but not initialized (they are in a "temporal dead zone" until their declaration is evaluated).
    
    console.log(age);
    let age = 25;
    output: ReferenceError: Cannot access 'age' before initialization

        Real-Time Analogy for TDZ

        Imagine:
        A hotel room is reserved for you.
        Room exists
        But you cannot enter until check-in completes
        Similarly:
        let variable exists in memory
        But cannot be accessed before initialization

3. function declarations are hoisted with their entire body, so they can be called before they are defined in the code.
    Functions are fully hoisted:

        greet();

        function greet() {
        console.log("Hello");
        }

        output: Hello

        Internal Behavior: Entire function moves to memory.
        
        function greet() {
            console.log("Hello");
        }

        greet();

4. function expressions (using var) are hoisted as undefined, so they cannot be called before they are defined.
    Function Expression Hoisting:

    sayHi();

    var sayHi = function () {
    console.log("Hi");

    output: TypeError: sayHi is not a function

    Internal Behavior:
    
    var sayHi; // undefined
    
    sayHi = function () {
    console.log("Hi");
    };

    undefined(); // TypeError: undefined is not a function
    
    So, sayHi is hoisted as undefined, and when we try to call it before assignment, it results in a TypeError 
    because undefined is not a function.

    Hoisting Summary Table
    | Type                 | Hoisted?      | Initial Value | Access Before Init |
    | -------------------- | ------------- | ------------- | ------------------ |
    | var                  | Yes           | undefined     | Allowed            |
    | let                  | Yes           | uninitialized | ReferenceError     |
    | const                | Yes           | uninitialized | ReferenceError     |
    | function declaration | Yes           | full function | Allowed            |
    | function expression  | Variable only | undefined     | Error              |

    Important Interview Point

    Hoisting does NOT physically move code.
    JavaScript engine internally:
    creates memory references first
    then executes code
    It only behaves like moving declarations upward.

Hoisting is JavaScript’s behavior of registering variable and function declarations in memory before executing code.
*/