const user ={
    username :"Ayush",
    loginCount:8,
    signedIN:true,
    getUserDetails:function(){
        // console.log("got user details from database");
        console.log(`Username: ${this.username}`)
        console.log(this);
        
    }
}



// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

//Constructor function -> Give new instances every time
function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greetinf= function(){
        console.log(`Wlcome ${this.username}`);
    }

    return this
}

const userOne =new User("Ayush" , 12 , true)
const userTwo =new User("Ak" , 11 , false) 


console.log(userOne)
console.log(userOne.constructor)
// console.log(userTwo)

//constructor -> reference to itself


/*
 New Keyword -> 
 1.First of empty object is created which is called instance(object)
 2. Constructor function is called due to new keyword -> packed the arguments
 3. Get the object

*/