let 시작 = new Date();
let 인터벌 = new Date();
let 정지 = new Date();
const clock = document.getElementById("time");

function 시간() {
  const 작동 = new Date();
  const time = new Date(작동 - 시작);
  const 분 = time.getMinutes().toString();
  const 초 = time.getSeconds().toString();
  const clock = document.getElementById("time");
  clock.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}
function 실행() {
  if (clock.innerText === "00:00") {
    console.log(clock.innerText);
    인터벌 = setInterval(시간, 1000);
  } else if (clock.innerText === 정지) {
    clock.innerText = "00:00";
    시작 = new Date();
    인터벌 = setInterval(시간, 1000);
  } else {
    정지 = clock.innerText;
    스탑();
    console.log(정지);
    clock.innerText = 정지;
  }
}

function 스탑() {
  clearInterval(인터벌);
}

clock.addEventListener("click", 실행);
