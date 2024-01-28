//array
/*
 Array -> object
       ->Storing a collection of multiple items under a single variable name
       -> array are resizable , mix of different datatype 
       ->not associative array
       -> zero-indexed
       ->makes shallow copy -> a copy whose properties share the same references
*/
const myArr = [0 , 1 , 2 , 3 , 4 , 5 ]
const myHeros = ["Shaktiman" , "Naagraj"]

const myArr2 = new Array(1 ,2 ,3 , 4)
console.log(myArr2[1])

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3));

// const newArr= myArr.join()

// console.log(myArr);
// console.log(typeof newArr); //string

//slice , spice

console.log("A" , myArr);

const myn1 = myArr.slice( 1, 3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.slice( 1, 3)
console.log(myn2);
console.log("C" , myArr); 

const myn3 = myArr.splice( 1, 3)
console.log(myn3);
console.log("D" , myArr); //manipulate original array




