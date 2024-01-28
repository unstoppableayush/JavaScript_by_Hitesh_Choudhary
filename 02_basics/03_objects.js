//singleton
// Object.create

//object literals

const mySymbol = Symbol("key1")

// by deafult javascript treated the key to as a string
const JsUser = {
    name:"Ayush",
    "full name":"Ayush Kumar",
    [mySymbol] :"myKey1"  , //symbol
    age: 20,
    location:"Bihar",
    email:"ayush@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySymbol]);

JsUser.email = "ayush@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@apple.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello Js User")
}
JsUser.greeting2 = function(){
    console.log(`hello Js User , ${this.name}`)
}


console.log(JsUser.greeting())
console.log(JsUser.greeting2())
