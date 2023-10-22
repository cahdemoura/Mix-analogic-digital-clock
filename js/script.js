const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

function getTime() {

    const time = new Date();

    const getHourRot = 360 / 12 * time.getHours();
    const getMinRot = 360 / 60 * time.getMinutes();
    const getSecRot = 360 / 60 * time.getSeconds();

    hour.style.transform = `rotate(${getHourRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;
}

const hourDig = document.querySelector(".hour-dig");
const minDig = document.querySelector(".min-dig");
const secDig = document.querySelector(".sec-dig");

function getTimeDigital() {

    const time = new Date();

    const getHour = time.getHours();
    const getMin = time.getMinutes();
    const getSec = time.getSeconds();

    if (getHour < 10) {
        hourDig.innerHTML = "0" + getHour;
    }
    else {
        hourDig.innerHTML = getHour;
    }

    if (getMin < 10) {
        minDig.innerHTML = "0" + getMin;
    }
    else {
        minDig.innerHTML = getMin;
    }

    if (getSec < 10) {
        secDig.innerHTML = "0" + getSec;
    }
    else {
        secDig.innerHTML = getSec;
    }

}

setInterval(() => {
    getTime();
    getTimeDigital();

}, 1000);