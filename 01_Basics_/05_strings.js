const name = "ayush"
const repoCount = 50 

//concatination
console.log(name + repoCount + "Value")

//String Interpolation
console.log(`Hello my name is ${name} and my repo count ${repoCount} `);

const gameName = new String("Ayush-Kumar")

//key value pair
console.log(gameName[0])
console.log(gameName.__proto__)

//toUpperCase
console.log(gameName.length);
console.log(gameName.toUpperCase());
//do not change the original string

//charAt
console.log(gameName.charAt(2));
console.log(gameName.indexOf("h"));

//substring
const newString = gameName.substring(0 , 4);
console.log(newString);

//slice
const anotherString = gameName.slice(-3, 4);
console.log(anotherString);

//trim
const newStringOne = "      Ayush    "
console.log(newStringOne)
console.log(newStringOne.trim())

//replace and includes
const url = "https://ayush.com/ayush%20kumar"

console.log(url.replace("%20" , "_"));

console.log(url.includes("ayush"));


//split -> gives array
console.log(gameName.split('-'))