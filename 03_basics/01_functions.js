
function sayMyName(){
  console.log("ayush")
}
// sayMyName -> reference
//sayMyName() -> call

// sayMyName()
                      //parameters
// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1 , number2){
    let result =number1 + number2
    return result
}

const result = addTwoNumbers( 3 ,5)  //arguments

// console.log("Result:" , result)

function loginUserMessage(username){
    // if(username ===undefined){
    if(!username){
        console.log("Pleaser enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage())

// function with objects and array

function calculateCartPrice(val1 , val2 ,...num1){
    return num1
}

console.log(calculateCartPrice(200 , 400 , 500))

const user = {
    username: "hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);

handleObject({
    username:"sam",
    price:399
})


const myNewArray = [200 , 400 , 100 , 600]


function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log([200 , 400 , 100 , 600]);