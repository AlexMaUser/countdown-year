// date we wil calculate
const newYear = "1 Jan 2023";

// Selecting the elements we will modify every cycle (1 second)
const daysEl = document.querySelector("#days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const message = document.querySelector(".new-year");

const countdown = function () {
  // Variables
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  // Logic behind seconds, minutes, hours, days using the '%' operand
  const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  message.innerHTML = `${days} Days till New Year`;
};

// format to digital time from 9,8.. to  09,08 seconds
const formatTime = function (time) {
  return time < 10 ? `0${time}` : time;
};

// initial call
countdown();

//setting interval, call every 1 second
setInterval(countdown, 1000);
