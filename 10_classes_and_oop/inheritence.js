class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // call the super class username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const teacher = new Teacher("Ayush", "ayush@gmail.com", "123")

teacher.addCourse()

const newuser = new User("AyushUser")

// newuser.addCourse()  //can't access
newuser.logMe()
teacher.logMe()

console.log(teacher instanceof Teacher) //true
console.log(teacher instanceof User)    //true