const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear + 1;
function updateCountdown(){
     const date = new Date();
     const different = newYearTime - date;
     const day = Math.floor(different / 1000 / 60 / 60 / 24);
     const hour = Math.floor(different / 1000 / 60 / 60) % 24;
     const minute = Math.floor(different / 1000 / 60) % 60;
     const second = Math.floor(different / 1000) % 60;
     days.innerHTML = day;
     hours.innerHTML = hour < 10 ? '0' + hour : hour;
     minutes.innerHTML = minute < 10 ? '0' + minute : minute;
     seconds.innerHTML = second < 10 ? '0' + second : second;
}
setInterval(updateCountdown,1000);
setTimeout(() => {
     loading.remove();
     countdown.style.display = 'flex';
},1000);