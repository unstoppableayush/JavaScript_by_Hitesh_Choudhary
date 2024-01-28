//global scope
let a = 300
const b = 20
// var c = 300
 
// block scope
if(true){
    let a = 10
    const b = 20
    // console.log("Inner" , a)
}


// console.log(a);
// console.log(b);
// console.log(c);

//nested scope

function one(){
    const username = "ayush"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);
    two()
}
// one()


if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// ++++++++++++++++ Interesting +++++++++++++++

console.log(add(4))

function add(num){
    return num+1
}



//expression
const addTwo = function add(num){
    return num+1
}
console.log(addTwo(5))
