/*
Prototypes

function -> \
array ->      \ object -> null
string ->     /
            
*/

let myName = "Ayush   "
let myChannel ="Chai"
// console.log(myName.length);

let myHeros = ["thor" ,"spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman :"sling",
    
    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

//injecting the prototype

Object.prototype.ayush = function(){
    console.log(`ayush is present in all obj`);
    
}

Array.prototype.heyAyush= function(){
    console.log(`Ayush says hello`);
    
}
// heroPower.ayush()
// myHeros.ayush()
// myHeros.heyAyush()


// Prototypial Ineritance

const User = {
    name:"Chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport ={
    isAvailable : false
}
const TASupport = {
    makeAssignemnt : "JS assignment",
    fullTime : true,
    __proto__:TeachingSupport
}

//teacher can acces the proprty of user
Teacher.__proto__ = User;


//Modern Syntax

Object.setPrototypeOf(TeachingSupport , Teacher)


//Example - directly remove the white spaces


let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}


anotherUsername.trueLength()
"Ayush".trueLength()
"iceTea".trueLength()