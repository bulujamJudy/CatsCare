//variables
let min = 0;
let sec = 0;
let totalsec = min * 60 + sec;
let remain = totalsec;
const audio = document.getElementById("meow");

//setting bool
let number = 0;
var rest = false;

let pause = true;
const pauBtn = document.querySelector('.pause');
const refBtn = document.querySelector('.refresh')
const timerElement = document.querySelector('.time');
let interval;

pauBtn.addEventListener("click", click);
refBtn.addEventListener("reset", resetTimer);

function click(){
    if (!pause){
        pauseTimer();
        pauBtn.src = 'img/icon/play.png';
    }else{
        resumeTimer();
        pauBtn.src = 'img/icon/pause.png';
    }
    pause = !pause;
}

//time functions
function startTimer() {
    updateTimerDisplay();

    interval = setInterval(() => {
        remain--;
        if (remain <= 0) {
            clearInterval(interval);
            timerElement.textContent = "Time's up!";
            if (number == 9){
                number = 0;
            }else{
                number++;
            }
            if (rest === false){
                min = 1;
                sec = 00;
            }else{
                min = 0;
                sec = 30;
            }
            displayCats();
            rest = !rest;
            pause = true;
            pauBtn.src = 'img/icon/play.png';
            setTimeout(function() {
                resetTimer();
            }, 5000);
        } else {
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    let min = Math.floor(remain / 60);
    let sec = remain % 60; 
    
    const formattedmin = min < 10 ? '0' + min : min;
    const formattedsec = sec < 10 ? '0' + sec : sec;
    timerElement.textContent = `${formattedmin} : ${formattedsec}`;
}

function pauseTimer() {
    clearInterval(interval);
}

function resumeTimer() {
    startTimer(); 
}

function resetTimer() {
    if (rest === false){
        min = 1;
        sec = 0;
    }else{
        min = 0;
        sec = 30;
    }
    clearInterval(interval);
    totalsec = min * 60 + sec;
    remain = totalsec;
    updateTimerDisplay();
}


//cat functions
function displayCats() {
    const cats = document.querySelectorAll('.cat');
    audio.play();
    for (let i = 0; i < cats.length; i++) {
        if (i < number) {
            cats[i].style.opacity = 1;
        } else {
            cats[i].style.opacity = 0;
        }
    }
}
