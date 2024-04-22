let arr = [12, 45, 23, 11, 1, 8, 4, 80];
let arr1 = [];

function sorting(n){
    for(let i=0;i<arr.length-1;i++){
        for(let j=1;j<arr.length-1;j++){
                if(i<j){
                    arr1.push(j);
                }
            }
            break
        }
        console.log(arr1);
    }
sorting(arr);
console.log(arr[-1]);