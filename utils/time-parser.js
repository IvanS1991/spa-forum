module.exports = function (time) {
    let zeroFill = function(val) {
        if (val < 10) {
            return "0" + val;
        } else {
            return "" + val;
        }
    };

    let stringifyData = function(data) {
        return `${data.date}-${data.month}-${data.year} / ${data.hours}:${data.minutes}:${data.seconds}`;
    };
    
    let timeData = {
        seconds: zeroFill(time.getSeconds()),
        minutes: zeroFill(time.getMinutes()),
        hours: zeroFill(time.getHours()),
        date: zeroFill(time.getDate()),
        month: zeroFill(time.getMonth()),
        year: zeroFill(time.getFullYear())
    };

    return stringifyData(timeData);
};