var marks=40;
var result= (marks>=90 && marks<=100)?"A"
             :(marks>=80 && marks<=89)?"B"
             :(marks>=70 && marks<=79)?"C"
             :(marks>=50 && marks<=69)?"D"
             :(marks<50)?"F":"";
console.log(result);