let display = document.getElementById("display");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;


function showTime() {

    let h = hours;
    let m = minutes;
    let s = seconds;

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }


    display.textContent = h + " : " + m + " : " + s;

}

function startTime() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(function () {

        seconds++;


        if (seconds === 60) {
            seconds = "0";
            minutes++;

        }

        if (minutes === 60) {
            seconds = "0";
            hours++;

        }


        showTime();

    }, 1000);

}

function pauseTime() {

    clearInterval(timer);
    timer = null;
}


function resetTime() {
   
    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;


showTime();

}