
//Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

class CountdownTimer {
    constructor(selector, targetDate) { 
        this.selector = selector;
        this.targetDate = targetDate; 
    }
};

const timer = new CountdownTimer({ 
    selectorId: '#timer-1',
    targetDate: new Date('Jul 30, 2022')
});

const refs = {
    timerId: document.querySelector('#timer-1'),
    divField: document.querySelector('div.field'),
    daysSpan: document.querySelector('[data-value="days"]'),
    hoursSpan: document.querySelector('[data-value="hours"]'),
    minsSpan: document.querySelector('[data-value="mins"]'),
    secsSpan: document.querySelector('[data-value="secs"]')
};

console.log(timer.selector.targetDate);


function timeSeparate (time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {days, hours, mins, secs}
};


function visualizeTimer () {
    function padTime (time) {
        return String(time).padStart(2, '0');
    };
    setInterval(() => {
        const todayDate = Date.now();
        const time = timer.selector.targetDate - todayDate;
        const {days, hours, mins, secs} = timeSeparate(time);

        refs.secsSpan.textContent = padTime(secs);
        refs.minsSpan.textContent = padTime(mins);
        refs.hoursSpan.textContent = padTime(hours);
        refs.daysSpan.textContent = padTime(days);
        //console.log(`days:${days} hours:${hours} mins:${mins} secs:${secs}`);
      }, 1000);
};

//document.addEventListener("onload", visualizeTimer);
window.addEventListener('load', visualizeTimer);