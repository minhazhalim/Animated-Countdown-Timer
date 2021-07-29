const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const newYears = '1 January 2021';
function countDown(){
     const newYearsDate = new Date(newYears);
     const currentDate = new Date();
     const totalSeconds = (newYearsDate - currentDate) / 1000;
     const daysElement = Math.floor(totalSeconds / 3600 / 24);
     const hoursElement = Math.floor(totalSeconds / 3600) % 24;
     const minutesElement = Math.floor(totalSeconds / 60) % 60;
     const secondsElement = Math.floor(totalSeconds) % 60;
     days.innerHTML = daysElement;
     hours.innerHTML = formatTime(hoursElement);
     minutes.innerHTML = formatTime(minutesElement);
     seconds.innerHTML = formatTime(secondsElement);
}
countDown();
function formatTime(time){
     return time < 10 ? `0${time}` : time;
}
setInterval(countDown,1000);