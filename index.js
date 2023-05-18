const clock = document.querySelector('.clock')
const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize);
const chooseShortWindowSide = Math.min(window.innerWidth, window.innerHeight) - remValue;

clock.style.height = (chooseShortWindowSide - (2 * remValue)) + "px";
clock.style.width = (chooseShortWindowSide - (2 * remValue)) + "px";

const deg = 6
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

setInterval(() => {
    const date = new Date()
    const hourDate = date.getHours() % 12
    const minuteDate = date.getMinutes() * deg
    const secondDate = date.getSeconds() * deg

    hour.style.transform = `rotateZ(${hourDate+(minuteDate/12)}deg)`
    minute.style.transform = `rotateZ(${minuteDate}deg)`
    second.style.transform = `rotateZ(${secondDate}deg)`
}, 1000)

hour.style.height = clock.offsetWidth/4 + "px"
hour.style.width = 0.6 + "rem"

minute.style.height = clock.offsetWidth/2.5 + "px"
minute.style.width = 0.4 + "rem"

second.style.height = clock.offsetWidth/2 - 8 + "px"
second.style.width = 0.3 + "rem"