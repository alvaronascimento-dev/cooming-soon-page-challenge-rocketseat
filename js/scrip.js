//GETTING THE ELEMENTS IN THE HTML DOCUMENT
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

//DEFINING RELEASE DATE
const releaseDate = "01 Jan 2030";


//COUNTDOWN CLOCK FUNCTION
function countdown() {

    const newReleaseDate = new Date(releaseDate);
    const currentDate = new Date();

    const totalSeconds = (newReleaseDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

//FUNCTION TO FORMAT THE CLOCK
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//CALLING THE FUNCTION
countdown();
setInterval(countdown, 1000);
