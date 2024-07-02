// document.getElementById("count-el").innerText = 5

//  let count = 5 + 7

//  console.log(count)

// let myAge = 26

// console.log(myAge)

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// console.log(sum)

// let myAge = 26
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let  bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45

// console.log(bonusPoints)



// function countdown() {
//   console.log(5)
//   console.log(4)
//   console.log(3)
//   console.log(2)
//   console.log(1)
//   console.log('Happy New Month!')
// }
// countdown()
// function numbers() {
//   console.log(42)
// }
// numbers()
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalLaps() {
//   let total = lap1 + lap2 + lap3
//   console.log(total)
 
// }
// totalLaps()
// Create a function that increments the lapsCompleted variable with one
// Run it three times
// let lapsCompleted = 0

// function lapsIncrease () {
//   lapsCompleted = lapsCompleted + 1
//   console.log(lapsCompleted)
// }
// lapsIncrease()
// lapsIncrease()
// lapsIncrease()

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")


console.log(countEl)

let count = 0

function increment () {
  console.log('the button was clicked')
  count += 1
  countEl.textContent = count
}
//textContent mdn

function save() {
  let countStr = count + " - "
  saveEL.textContent += countStr
  console.log(count)
}

function reset() {
  count = 0
  countEl.textContent = 0
}

// let username = "Bisola"
// let message = "you have 3 new notifications"
// let messageToUser = "We have Logged you in"
// console.log(message + ", " + username + "!")

// console.log(messageToUser + ", " + username + "!")

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console
// let name = "Bisola"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)
