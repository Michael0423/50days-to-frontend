const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const app = document.getElementById('app');
const switchModeBTn = document.getElementById('switch_mode_btn');
switchModeBTn.addEventListener('click', function(evt){
    document.body.classList.toggle('dark-mode');
    evt.target.textContent = (document.body.classList.contains('dark-mode')) ? 'Light mode' : 'Dark mode';
});

const now = new Date();
const hourBar = document.getElementById('hour_bar');
const minBar = document.getElementById('min_bar');
const secondBar = document.getElementById('second_bar');
const hourDiv = document.getElementById('hour');
const minDiv = document.getElementById('min');
const ampmDiv = document.getElementById('am_pm');
const colonDiv = document.getElementById('colon');

function run() {
    now.setSeconds(now.getSeconds()+1);

    let secDeg = now.getSeconds() * 6;
    secondBar.style.transform = `rotate(${secDeg}deg)`;
    let minDeg = now.getMinutes() * 6;
    minBar.style.transform = `rotate(${minDeg}deg)`;
    let hrDeg = now.getHours() * 30;
    hourBar.style.transform = `rotate(${hrDeg}deg)`;

    let h = now.getHours();
    let m = now.getMinutes();
    let ampm = (h >= 12) ? 'PM':'AM';
    hourDiv.textContent = (h > 12) ? h-12 : h;
    minDiv.textContent = m;
    ampmDiv.textContent = ampm;
}

const weekdayDiv = document.getElementById('weekday');
const monthDiv = document.getElementById('month');
const dayDiv = document.getElementById('day');
let month = now.getMonth();
let date = now.getDate();
let day = now.getDay();
weekdayDiv.textContent = days[day];
monthDiv.textContent = months[month];
dayDiv.textContent = date;


// clock run
run();
setInterval(()=>{
    run();
}, 1000);

// time Flashing
setInterval(()=>{
    colonDiv.classList.toggle('show');
}, 500)