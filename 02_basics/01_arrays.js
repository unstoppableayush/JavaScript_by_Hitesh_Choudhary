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