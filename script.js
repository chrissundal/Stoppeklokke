
let roundTime = '';
let seconds = 0;
var timer;
const app = document.getElementById('app');

updateView();
function updateView() {
    let html = `
        <h1>Stoppeklokke</h1>

    <div class="klokke">
        <div class="buttons">
            <button class="start" onclick="startTimer()">Start</button>
            <button class="stop" onclick="lapTimer()">Lap</button>
            <button class="pause" onclick="stopTimer()">Pause</button><br>
        </div>
        <div class="display">${seconds}</div>
        Rundetider:<div class="roundsList">${roundTime}</div>
    </div>
        `;
    app.innerHTML = html;
}

function startTimer() {
    timer = setInterval(countSeconds, 1000)
}
function countSeconds() {
    seconds++;
    updateView();
}

function lapTimer() {
    roundTime += `<li>${seconds} sekunder</li>`;
    seconds = 0;
    updateView();
}
function stopTimer() {
    clearInterval(timer);

}