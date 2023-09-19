// Variables
let startTime;
let intervalId;
let running = false;

// Elements
const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');

// Event listeners
startStopBtn.addEventListener('click', toggleStartStop);
resetBtn.addEventListener('click', resetStopwatch);

// Functions
function toggleStartStop() {
    if (running) {
        // Stop the stopwatch
        clearInterval(intervalId);
        startStopBtn.textContent = 'Start';
    } else {
        // Start the stopwatch
        startTime = Date.now() - (parseInt(display.textContent.replace(/:/g, '')) * 10);
        intervalId = setInterval(updateDisplay, 10);
        startStopBtn.textContent = 'Stop';
    }
    running = !running;
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor((currentTime % 1000) / 10);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function resetStopwatch() {
    clearInterval(intervalId);
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    running = false;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
