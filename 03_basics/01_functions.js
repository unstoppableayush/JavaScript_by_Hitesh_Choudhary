
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

console.log("Result:" , result)

function loginUserMessage(username){
    // if(username ===undefined){
    if(!username){
        console.log("Pleaser enter a username")
        return
    }
    return `${username} just logged in`
}


console.log(loginUserMessage())