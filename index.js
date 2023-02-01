
// SCOREBOARD
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

function add(score, addition) {
    score.textContent = parseFloat(score.textContent) + parseFloat(addition) 
    highlightLeader ()
};



// TIMER
let s = 0;
let m = 10;
const timeCountdown = document.getElementById("time-countdown");
let timer

function startCountdown () {
  timer = setInterval(renderCountdown, 1000)
}

function stopCountdown () {
  if (timer) {
  clearInterval(timer)
  }
}

function resetCountdown () {
  clearInterval(timer);
  m = 10;
  s = 0;
  timeCountdown.textContent = "10:00"
}

function renderCountdown () {
  if (s === 0 && m === 0) {
    timeCountdown.textContent = "00:00"
  } else {
      if (s === 0 && m > 0) {
      s = 60
      m = m-1
      } 
    s -= 1
    let formattedS = ("0" + s).slice(-2)
    let formattedM = ("0" + m).slice(-2)
    timeCountdown.textContent = formattedM + ":" + formattedS
 }
};



//HIGHLIGHT LEADING TEAM
const titleHome = document.getElementById("title-home")
const titleGuest = document.getElementById("title-guest")
const scoreContainerHome = document.getElementById("score-container-home")
const scoreContainerGuest = document.getElementById("score-container-guest")

function highlightLeader () {
  if (parseFloat(scoreHome.textContent) > parseFloat(scoreGuest.textContent)) {
    scoreContainerHome.style.border = "3px solid green"
    scoreContainerGuest.style.border = "3px solid black"
    titleHome.style.color = "#81eb81"
    titleGuest.style.color = "#eeeeee"
  } else if (parseFloat(scoreHome.textContent) < parseFloat(scoreGuest.textContent)) {
    scoreContainerGuest.style.border = "3px solid green"
    scoreContainerHome.style.border = "3px solid black"
    titleHome.style.color = "#eeeeee"
    titleGuest.style.color = "#81eb81"
  } else {
    scoreContainerGuest.style.border = "3px solid black"
    scoreContainerHome.style.border = "3px solid black"
    titleHome.style.color = "#eeeeee"
    titleGuest.style.color = "#eeeeee"
  }
}



//NEW GAME

function startNewGame () {
    scoreGuest.textContent = 0;
    scoreHome.textContent = 0;
    resetCountdown();
    highlightLeader ();
}