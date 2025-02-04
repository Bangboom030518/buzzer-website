const btnStart = document.querySelector("#timer-button");
const timestamp = document.querySelector("#timestamp");

let currentBuzzer;

function buzz(buzzer) {
  currentBuzzer = buzzer;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

btnStart.addEventListener("click", () => {
  const interval = 100;
  let time = Math.floor(random(3000, 8000));
  timestamp.innerText = time / 1000;
  let loop = setInterval((stop) => {
    if (currentBuzzer) {
      console.log(`buzzer ${currentBuzzer} won`);
      clearInterval(loop);
    }
    time -= interval;
    if (time <= 0) {
      time = 0;
      clearInterval(loop);
    }
    timestamp.innerText = time / 1000;
  }, interval);
});
