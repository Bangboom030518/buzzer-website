const btnStart = document.querySelector("#timer-button");
const timestamp = document.querySelector("#timestamp");
const output = document.querySelector("#output");

let currentBuzzer;

function buzz(buzzer) {
  currentBuzzer = buzzer;
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function round(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

btnStart.addEventListener("click", () => {
  btnStart.style.display = "none";
  document.body.style.animation = "rainbow 5s infinite linear";
  const interval = 100;
  let time = 10000;
  timestamp.innerText = (time / 1000).toFixed(1);
  let loop = setInterval((stop) => {
    new Audio("../../CupcakKe/Clips/gulp.mp3").play();
    if (currentBuzzer) {
      output.textContent = `buzzer ${currentBuzzer} won`;
      clearInterval(loop);
      btnStart.style.display = "";
      document.body.style.animation = "";
      setTimeout(() => (output.textContent = ""), 3000);
    }
    time -= interval;
    if (time <= 0) {
      time = 0;
      clearInterval(loop);
      btnStart.style.display = "";
      document.body.style.animation = "";
    }
    timestamp.innerText = (time / 1000).toFixed(1);
  }, interval);
});
