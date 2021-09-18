const startbtn = document.querySelector('#start');
const pausebtn = document.querySelector('#pause');
const resetbtn = document.querySelector('#reset');
const hour = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const milliseconds = document.querySelector('#milliseconds');
let hr = 0;
let min = 0;
let sec = 0;
var intervalID;
var myAudio = new Audio('audio/codeLofi1.mp3');



startbtn.addEventListener('click', function() {
    clearInterval(intervalID);
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
    intervalID = setInterval(timer, 1000);
})

pausebtn.addEventListener('click', function() {
    clearInterval(intervalID);
    myAudio.pause();
})

resetbtn.addEventListener('click', function() {
    clearInterval(intervalID);
    myAudio.pause();
    myAudio.currentTime = 0;
    hr = 0;
    min = 0;
    sec = 0;
    hour.innerHTML = "0" + hr;
    minutes.innerHTML = "0" + min;
    seconds.innerHTML = "0" + sec;

})

function timer() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = 0;
    }

    if (min >= 60) {
        hr++;
        min = 0;
    }

    if (sec <= 9) {
        seconds.innerHTML = "0" + sec;
    } else {
        seconds.innerHTML = sec;
    }

    if (min <= 9) {
        minutes.innerHTML = "0" + min;
    } else {
        minutes.innerHTML = min;
    }

    if (hr <= 9) {
        hour.innerHTML = "0" + hr;
    } else {
        hour.innerHTML = hr;
    }

}