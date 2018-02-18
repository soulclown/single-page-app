import {styles} from './CountUpTimer.css'
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    console.log(id)
    console.log(obj)
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

const CountUpTimer = (n) => {
    var container = document.createElement('div')
    container.setAttribute('class', 'count-up-timer')
    var number = document.createElement('div')
    number.setAttribute('id', 'count-up-timer-textnode')
    number.appendChild(document.createTextNode(n))
    container.appendChild(number)
    return container
}
CountUpTimer.animate = (n) => {
    animateValue('count-up-timer-textnode',0, n, 1000);
}

export {CountUpTimer}