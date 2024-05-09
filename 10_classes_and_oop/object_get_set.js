const User = {
    _email: 'ayush@gmail.com',
    _paasword: 'abc',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this.email = value
    }
}

//factory function - Object.create() - by deafult null
const obj = Object.create(User)
console.log(obj.email)

// _ -> means defined in private property