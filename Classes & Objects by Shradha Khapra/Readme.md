# Prototypes in JS
A javascript object is an entity having state and behaviour (properties and method).

JS objects have a special property called prototype.

It is a reference to the object.

We can set prototype using `__proto__`.

If object & prototype have same method , object's method will be used.

# Classes in JS
Class is a program-code template for creating objects.

Those objects will have some state (variables) & some behaviour(functions)  inside it.

```javascript

class MyClas{
    constructor(){...}
    myMethod(){...}
}

let myObj = new MyClass();

```

# Classes in JS
Constructor() method is :
- Automatically invoked by new
- intializes object

```javascript
class MyClass(){
    constructor(){...}

    myMethod() {...}
}
```

# Inheritence in JS

inheritance is passing down properties & methods from parent class to child class.

```javascript
class Parent{

}

class Child extends Parent{


}
```

If Child & Parent have same method , child's method will be used. [method overriding] 


# Super Keyword

The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

```javascript

super(args) // calls parent's constructor
super.parentMethod(args)

```