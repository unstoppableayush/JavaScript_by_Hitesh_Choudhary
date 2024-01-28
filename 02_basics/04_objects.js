//Singleton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="12abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ayush"
            ,
            lastname:"Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

//combining the objects

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},   obj1 , obj2)
                        //target   sources


//using spread operator

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"ay@gmail.com"
    },
    {
        id:3,
        email:"ayu@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// Object de-structure

const course ={
    coursename: "js in hindi",
    price:"999",
    courseInstructure :"hitesh"
}

// course.courseInstructure

const {courseInstructure : instructor} = course

// console.log(courseInstructure)
console.log(instructor)


//Api
// {
//     "name":ayush",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]