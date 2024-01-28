document.addEventListener('DOMContentLoaded', function () {
    let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    const pomodoroButton = document.getElementById('pomodoro');
    const shortBreakButton = document.getElementById('short-break');
    const longBreakButton = document.getElementById('long-break');

    function startTimer() {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        isRunning = false;
        clearInterval(timer);
    }

    function resetTimer() {
        stopTimer();
        setTimerDuration(25, 0); 
        updateDisplay();
    }

    function updateTimer() {
        if (minutes === 0 && seconds === 0) {
            resetTimer();
            alert('Timer completed!');
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }
    }

    function updateDisplay() {
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
    }

    function setTimerDuration(newMinutes, newSeconds) {
        minutes = newMinutes;
        seconds = newSeconds;
    }

    pomodoroButton.addEventListener('click', function () {
        stopTimer();
        setTimerDuration(25, 0);
        updateDisplay();
    });

    shortBreakButton.addEventListener('click', function () {
        stopTimer();
        setTimerDuration(5, 0);
        updateDisplay();
    });

    longBreakButton.addEventListener('click', function () {
        stopTimer();
        setTimerDuration(15, 0);
        updateDisplay();
    });

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
