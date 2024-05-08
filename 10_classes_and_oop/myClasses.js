// After ES6
class User {
    constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    chanageUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("Ayush", "ayush@gmail.com", "123")
console.log(user.chanageUsername());

// behind the scene

function User1(username, email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User1.prototype.chanageUsername = function(){
    return `${this.username.toUpperCase()}`
}

const user1 = new User1("Ayush1", "ayush1@gmail.com", "123")
console.log(user1.chanageUsername());