const user = {
    username : "ayush",
    price : 999 ,
    welcomeMessage : function(){
        console.log(`${this.username} , weclome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = "ayush"
//     console.log(this)
// }


//arrow function

const chai = () =>{
    let username = "ayush"
     console.log(this)
}
// chai()

//syntax -> ()=>{}

// const addTwo = (num1 , num2 )=>{
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1 , num2 )=>  (num1 + num2)


const addTwo = (num1 , num2) => ({username:"ayush"})


console.log(addTwo(3 , 4))