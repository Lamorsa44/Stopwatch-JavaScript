const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const lap = document.getElementById("lap");
let timer = document.getElementById("timer");
let laps = document.getElementById("laps");

let isRunning = false;
let millisecond = 0;
let seconds = 0;
let minutes = 0;
let startId;

start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
lap.addEventListener("click", addLap);

function addLap() {
    let daLap = document.createElement("li");
    daLap.innerText = timer.innerText;
    laps.appendChild(daLap);
}

function resetTimer() {
    stopTimer();
    timer.innerText = "00:00:00";
    millisecond = 0;
    seconds = 0;
    minutes = 0;
    laps.innerHTML = "";
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startId = setInterval(runIt, 10)
    } else {}
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(startId);
    } else {}
}

function runIt() {
    millisecond++;
    if (millisecond >= 100) {
        millisecond = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    updateTimer()
}

function updateTimer() {
    const formatted = num => String(num).padStart(2, "0");
    timer.innerText = `${formatted(minutes)}:${formatted(seconds)}:${formatted(millisecond)}`;
}