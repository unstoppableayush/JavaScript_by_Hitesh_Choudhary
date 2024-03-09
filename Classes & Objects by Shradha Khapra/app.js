const student = {
    fullName : "Ayush Kumar",
    marks : 94.2,
    parintMarks : function(){
        console.log("marks =",this.marks);

    }
}

const employee = {
    calctax(){
        console.log("text rate is 10%");
    },
    caltax1 : function(){
        console.log("text rate is 10%");
    }
}

const karanArjun = {
    salary : 50000,
};

const karanArjun1 = {
    salary : 30000,
};

const karanArjun2 = {
    salary : 30000,
    calctax(){
        console.log("text rate is 20%");
    }
};

karanArjun.__proto__ = employee;


class ToyotaCar{
    constructor(brand){
        console.log("creating new object",brand);
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop")
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

fortuner.start()

//Inheritence

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{

}

let obj = new Child();
obj.hello();


class Person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name
    }

    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("DO nothing")
    }
}

class Engineer extends Person{
    constructor(name, branch ){
        super(name);// to invoke parent class constructor
        super.eat();
        this.branch = branch;
    }
    work(){ // overriding
        console.log("Solve problems , build something");
    }
}

let shradhaObj = new Engineer();
let engObj = new Engineer("Ayush","Chemical engg");

// shradhaObj.work();


// Error Handling





