let home = 0;
let guest = 0;
let foul = 0;
let guestFouls = 0;
let count = 0;
let minutes = 12;
let seconds = 0;

let homeEL = document.getElementById("home-score")
let guestEL = document.getElementById("guest-score")
let foulEL = document.getElementById("home-foul")
let guestFoulEL = document.getElementById("guest-foul")
let timerEL = document.getElementById("timer-count")

function incrementHome1() {
  home += 1
  homeEL.textContent = home  
}
function incrementHome2() {
  home += 2
  homeEL.textContent = home

}

function incrementHome3() {
  home += 3
  homeEL.textContent = home
}

function incrementGuest1() {
  guest += 1
  guestEL.textContent = guest
}
function incrementGuest2() {
  guest += 2
  guestEL.textContent = guest
}
function incrementGuest3() {
  guest += 3
  guestEL.textContent = guest
}


function homeFoul() {
  foul += 1
  foulEL.textContent = foul
}

 function guestFoul() {
   guestFouls += 1
   guestFoulEL.textContent = guestFouls
   
 }

 function updateTimer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timerInterval); // Stop the timer when it reaches 0:00
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  timerEL.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function start() {
  // Set the initial timer display
  timerEL.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Start the timer interval
  timerInterval = setInterval(updateTimer, 1000);
}



function newGame() {

  // Stop any running timer
  clearInterval(timerInterval);

  // Reset timer to 00:00
  minutes = 0;
  seconds = 0;
  timerEL.textContent = "00:00";
  
  home = 0
  guest = 0
  homeEL.textContent = home
  guestEL.textContent = guest
}