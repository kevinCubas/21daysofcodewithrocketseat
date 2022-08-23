const hoursText = document.getElementById('hours')
const minutesText = document.getElementById('minutes')
const secondsText = document.getElementById('seconds')
//buttons
const startButton = document.getElementById('startbtn')
const pauseButton = document.getElementById('pausebtn')
const stopButton = document.getElementById('stopbtn')

let isPaused = false;

let hours = 0;
let minutes = 0;
let seconds = 0;

let Interval;

const counter = () => {
  seconds++

  if (seconds >= 60) {
    seconds = 0;
    minutes++
    if(minutes >= 60) {
      minutes = 0;
      hours++
    }
  }

  hoursText.innerText = hours >= 10 ? hours : `0${hours}`;
  minutesText.innerText = minutes >= 10 ? minutes : `0${minutes}`;
  secondsText.innerText = seconds >= 10 ? seconds : `0${seconds}`;

}

const startCounter = () => {
  if (Interval) {
    clearInterval(Interval);
  }

  Interval = setInterval(counter, 1000)

  isPaused = false
}

const pause = () => {
  isPaused = true;
  clearInterval(Interval)
}

const stop = () => {
  pause()
  hours = 0
  minutes = 0
  seconds = 0

  hoursText.innerText = hours >= 10 ? hours : `0${hours}`;
  minutesText.innerText = minutes >= 10 ? minutes : `0${minutes}`;
  secondsText.innerText = seconds >= 10 ? seconds : `0${seconds}`;
}

startButton.addEventListener('click', (e) => {
  e.preventDefault();
  startCounter()
})
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', stop)