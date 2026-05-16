//JavaScript Data Types — In Depth With Simple Analogies

/*
A data type tells JavaScript: “What kind of value is stored inside a variable?”
Example:
let name = "Sachin";

Here: "Sachin" → String data type

Simple Real-Life Analogy

Imagine your home storage. Different containers store different things:
| Container    | Stores |
| ------------ | ------ |
| Water bottle | Water  |
| Wallet       | Money  |
| Pen drive    | Files  |
| Lunch box    | Food   |


Same way in JavaScript: Different variables store different kinds of data.

JavaScript Has 2 Main Categories
1. Primitive Data Types
(Simple single values)

2. Non-Primitive Data Types
(Complex collections)
*/


/*
    Primitive Data Types: JavaScript has 7 primitive data types.
    1. Undefined
    2. Null
    3. Boolean
    4. Number
    5. String
    6. Symbol
    7. BigInt
*/

/*
    Non-Primitive Data Types: These are complex data structures.
    1. Object
    2. Array
    3. Function
    4. Date 
    5. RegExp
    6. Map
    7. Set 
    8. WeakMap 
    9. WeakSet 
*/

/* 
JavaScript Data Types
│
├── Primitive Types
│   ├── undefined
│   ├── null
│   ├── boolean
│   ├── number
│   ├── string
│   ├── symbol
│   └── bigint
│
└── Non-Primitive (Reference Types)
    ├── Object
    ├── Array
    ├── Function
    ├── Date
    ├── RegExp
    ├── Map
    ├── Set
    ├── WeakMap
    └── WeakSet
*/

/*
| Primitive           | Non-Primitive    |
| ------------------- | ---------------- |
| Stores actual value | Stores reference |
| Immutable           | Mutable          |
| Simple              | Complex          |


Easy Summary Table
| Data Type | Example        | Real-Life Analogy       |
| --------- | -------------- | ----------------------- |
| String    | `"Hello"`      | Written text            |
| Number    | `100`          | Calculator number       |
| Boolean   | `true`         | ON/OFF switch           |
| Undefined | `let x;`       | Empty box               |
| Null      | `null`         | Intentionally empty box |
| Symbol    | `Symbol()`     | Fingerprint             |
| BigInt    | `999n`         | Huge storage tank       |
| Object    | `{}`           | ID card                 |
| Array     | `[]`           | Train compartments      |
| Function  | `function(){}` | Coffee machine          |

*/


/* 
Primitive Types List
ALL primitive data types in JavaScript are IMMUTABLE
Their original value cannot be changed after creation.

| Primitive Type | Mutable / Immutable |
| -------------- | ------------------- |
| undefined      | Immutable           |
| null           | Immutable           |
| boolean        | Immutable           |
| number         | Immutable           |
| string         | Immutable           |
| symbol         | Immutable           |
| bigint         | Immutable           |

*/