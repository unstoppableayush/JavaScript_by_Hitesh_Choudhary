function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    // SetUsername(username)
    // SetUsername.call(username)
    SetUsername.call(this, username) //passing reference
    this.email=email
    this.password = password
}

const chai = new createUser("Ayush", "ayush@gmail.com", "1234")
console.log(chai);
