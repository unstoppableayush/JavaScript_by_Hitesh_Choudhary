class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ayush`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const ayush = new User("ayush@gmail.com", "abc")
console.log(ayush.email)
console.log(ayush.password)