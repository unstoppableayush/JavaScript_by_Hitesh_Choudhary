const score = 30

console.log(score)

//explicitly defining

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.min(4 , 2 ,1 , 5));
// console.log(Math.max(4 , 2 ,1 , 5));

console.log(Math.random()); // 0<= value <= 1
console.log((Math.random() *10) +1); //min-> 1 max->10

const min = 10 
const max = 20

console.log(Math.floor(Math.random()*(max-min +1)) + min )

