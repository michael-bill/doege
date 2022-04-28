function d(id) {
    return document.getElementById(id)
}

function update() {
    var now = Date.now();
    var date = new Date(2022, 4, 26, 10, 0, 0, 0).getTime();
    d('geography').innerHTML = calculateTime(date - now);
    d('literature').innerHTML = calculateTime(date - now);
    d('chemistry').innerHTML = calculateTime(date - now);
    date = new Date(2022, 4, 30, 10, 0, 0, 0).getTime();
    d('russian').innerHTML = calculateTime(date - now);
    date = new Date(2022, 5, 2, 10, 0, 0, 0).getTime();
    d('mathh').innerHTML = calculateTime(date - now);
    date = new Date(2022, 5, 3, 10, 0, 0, 0).getTime();
    d('cheapmath').innerHTML = calculateTime(date - now);
    date = new Date(2022, 5, 6, 10, 0, 0, 0).getTime();
    d('physics').innerHTML = calculateTime(date - now);
    d('history').innerHTML = calculateTime(date - now);
    date = new Date(2022, 5, 9, 10, 0, 0, 0).getTime();
    d('socialScience').innerHTML = calculateTime(date - now);
    date = new Date(2022, 5, 14, 10, 0, 0, 0).getTime();
    d('english').innerHTML = calculateTime(date - now);
    date = new Date(2022, 5, 20, 10, 0, 0, 0).getTime();
    d('computerScience').innerHTML = calculateTime(date - now);
}

const day = 86400000;
const hour = 3600000;
const minute = 60000;
const second = 1000;
function calculateTime(time) {
    var days = Math.floor(time / day);
    time -= Math.floor(time / day) * day;
    var hours = Math.floor(time / hour);
    time -= Math.floor(time / hour) * hour;
    var minutes = Math.floor(time / minute);
    time -= Math.floor(time / minute) * minute;
    var seconds = Math.floor(time / second);
    time -= Math.floor(time / second) * second;
    return `Дней: ${days}, часов: ${hours}, минут: ${minutes}, секунд: ${seconds}.`
}

setInterval(() => {
    update();
}, 500);