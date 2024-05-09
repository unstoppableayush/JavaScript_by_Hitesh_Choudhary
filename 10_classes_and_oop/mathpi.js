const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// tell about hidden things in object


console.log(descripter);


const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,  //property
    orderChai: function(){
        console.log("Chai nhi bni")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false
})

for(let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
         console.log(`${key} : ${value}`);
    }
}

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
