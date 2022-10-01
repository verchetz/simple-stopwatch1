const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const jam = document.querySelector(".jam");
const mnt = document.querySelector(".mnt");
const dtk = document.querySelector(".dtk");

let startJam = 0;
let startMnt = 0;
let startDtk = 0;

let interval;

start.addEventListener("click", function () {
  interval = setInterval(function () {
    if (startDtk < 59) {
      startDtk++;
      dtk.innerHTML = startDtk < 10 ? " 0" + startDtk : startDtk;
    } else {
      startDtk = 0;
      dtk.innerHTML = startDtk < 10 ? " 0" + startDtk : startDtk;
      if (startMnt < 59) {
        startMnt++;
        mnt.innerHTML = startMnt < 10 ? "0" + startMnt + ":" : startMnt + ":";
      } else {
        startJam++;
        jam.innerHTML = startJam < 10 ? "0" + startJam + ":" : startJam + ":";
      }
    }
  }, 1000);

  start.style.pointerEvents = "none";
});

stop.addEventListener("click", function () {
  clearInterval(interval);
  start.style.pointerEvents = "visible";
});

reset.addEventListener("click", function () {
  location.reload();
});
