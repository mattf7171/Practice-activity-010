//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let dept = "CS"
let num = 2350
let name = 'Jack'
let greeting = `Welcome`

// 1 Using concatenation
let msg = greeting + name + "to" + dept + num
console.log(msg)

//2: using interpolation
let msg2 = `${greeting} ${name} to 
${dept}${num}!`
console.log(msg2)
