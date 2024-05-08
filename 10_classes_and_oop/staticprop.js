class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);     
    }

    static createId(){
        return `123`
    }
}

const ayush = new User("Ayush")
// console.log(ayush.createId());  // can't be accessable

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const AyushTeacher = new Teacher("Ayush", "ayush@gmail.com")
AyushTeacher.logMe()
// console.log(AyushTeacher.createId())  //can't be accessible

// console.log(User.logMe()) //can't be access directly
console.log(User.createId()) // can be access directly 