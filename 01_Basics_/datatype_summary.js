// Primitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// javascript is dynamically typed language
const score = 100
const scoreValue = 100

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); //false

const bigNumber = 246666666666666n;


// (Reference) Non primitive

// Array , Objects , Functions

const heros = ["shaktiman" , "naagraj" , "doga0"]
let myObj ={
    name:"AYush",
    age:22
}

const myFunction = function (){
    console.log("hello World")
}

console.log(typeof bigNumber);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/