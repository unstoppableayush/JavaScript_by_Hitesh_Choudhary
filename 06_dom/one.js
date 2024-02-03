console.log(document.getElementById('title'))
console.log(document.getElementById('title').id)
console.log(document.getElementById('title').class)
console.log(document.getElementById('title').className)

console.log(document.getElementById('title').setAttribute('class' , 'test'))


const title = document.getElementById('title');
title.style.backgroundColor="green"
title.style.borderRadius ="10px"

console.log(title.innerText)
console.log(title.textContent)
console.log(title.innerHTML)

console.log(document.querySelector('h2'))
// console.log(document.querySelector('#'))

console.log(document.querySelector('input[type="password"]'))

console.log(document.querySelector('ul'))

const myul = document.querySelector('ul')
const turnGreen = myul.querySelector('li');

turnGreen.style.backgroundColor="green"


console.log(document.querySelectorAll("li"))

const tempList = document.querySelectorAll("li")
console.log(tempList)

const myH1 = document.querySelectorAll('h1')
console.log(myH1)

myH1[0].style.color = 'green'

tempList.forEach(function(l){
    l.style.backgroundColor = "green"
})

const myConvertedArray = Array.from(tempList)
myConvertedArray.forEach(function(li){
    li.style.color = 'red'
})