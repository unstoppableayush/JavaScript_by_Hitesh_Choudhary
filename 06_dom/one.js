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
