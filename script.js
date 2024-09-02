const app = document.getElementById('app');
const roundTime = document.getElementById('lapTime');
let seconds = 0;
var myInterval;

function startTimer() {
    myInterval = setInterval(countSeconds, 1000);
}
function countSeconds() {
    app.innerHTML = seconds;
    seconds++;
}
function lapTimer() {
    roundTime.innerHTML += `<li>${seconds - 1} sekunder</li>`;
    seconds = 0;
}
function stopTimer() {
    clearInterval(myInterval);

}