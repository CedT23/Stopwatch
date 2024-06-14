window.onload = function() {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let tens = 0;
  let appendHours = document.querySelector('#hours');
  let appendMinutes = document.querySelector('#minutes');
  let appendSeconds = document.querySelector('#seconds');
  let appendTens = document.querySelector('#tens');
  let startBtn = document.querySelector('#start');
  let stopBtn = document.querySelector('#stop');
  let resetBtn = document.querySelector('#reset');
  let interval;

  const updateTimer = () => {
      tens++;
      if (tens > 99) {
          tens = 0;
          seconds++;
          if (seconds > 59) {
              seconds = 0;
              minutes++;
              if (minutes > 59) {
                  minutes = 0;
                  hours++;
              }
          }
      }
      appendHours.textContent = hours < 10 ? '0' + hours : hours;
      appendMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      appendSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      appendTens.textContent = tens < 10 ? '0' + tens : tens;
  };

  const startTimer = () => {
      clearInterval(interval);
      interval = setInterval(updateTimer, 10);
  };

  const stopTimer = () => {
      clearInterval(interval);
  };

  const resetTimer = () => {
      clearInterval(interval);
      hours = minutes = seconds = tens = 0;
      appendHours.textContent = '00';
      appendMinutes.textContent = '00';
      appendSeconds.textContent = '00';
      appendTens.textContent = '00';
  };

  startBtn.onclick = startTimer;
  stopBtn.onclick = stopTimer;
  resetBtn.onclick = resetTimer;
};
