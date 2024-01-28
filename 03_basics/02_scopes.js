//global scope
let a = 300
const b = 20
// var c = 300
 
// block scope
if(true){
    let a = 10
    const b = 20
    console.log("Inner" , a)
}


console.log(a);
// console.log(b);
// console.log(c);
