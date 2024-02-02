let timerInterval;
let minutes = 0;
let hours = 0;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  minutes = 0;
  hours = 0;
  seconds = 0;
  document.getElementById('timer').textContent = formatTime(hours, minutes, seconds);
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById('timer').textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
  return `${padZero(hours)}:${ padZero(minutes)}:${ padZero(seconds)}`;
}

function padZero(value) {
  return value.toString().padStart(2, '0');
}

