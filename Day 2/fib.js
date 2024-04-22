let a = 0; 
let b = 1;
let c;
const num = 5;
let arr = [];

for (let i = 1; i <= num; i++) {
    arr.push(a);
    c = a + b;
    a = b;
    b = c;
    
}

console.log(arr);