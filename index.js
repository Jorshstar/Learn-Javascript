// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console

let firstName = "Joshua"
let lastName = "Akinbode"

 let fullName = firstName + " " + lastName
console.log(fullName)

let name = "Linda"
let greeting = "Hi there"

// Create a function that logs out "Hi there, Linda!" when called
let girlName = "Linda"
let girlGreeting = "Hi there"

function greet() {
  console.log(girlGreeting + ", " + girlName + "!" )
}
greet()

let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
// Call the functions to that the line below logs out 10

// function add3Points() {
//   myPoints = myPoints + 3
  
// }
// function remove1Point() {
//   myPoints = myPoints - 1
  
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)

// Try to predict what each of the lines will log out
// console.log("2" + 2) //"22"
// console.log(11 + 7) //18
// console.log(6 + "5") //"65"
// console.log("My points: " + 5 + 9) //My points: 59
// console.log(2 + 2) // 4
// console.log("11" + "14") // "1144"

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// let errorID = document.getElementById("error")
// console.log(errorID)

// function purchase() {
//   errorID.textContent = "Something went wrong, please try again"
// }

// console.log(errorID.textContent)

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL = document.getElementById("sum-el") 

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
function add() {
  let sum = num1 + num2
  sumEL.textContent = "Sum:" + sum
}


function subtract() {
  let subtract = num1 - num2
  sumEL.textContent = "Sum: " + subtract
}

function divide() {
  let divide = num1 / num2
  sumEL.textContent = "Sum: " + divide
}

function multiply() {
  let multiply = num1 * num2
  sumEL.textContent = "Sum: " + multiply
}
