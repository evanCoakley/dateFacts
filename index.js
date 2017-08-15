const moment = require('moment');
const chalk = require('chalk');
moment().format();

let now = moment()

function seconds(now) {
    let seconds = 0
    seconds += +now.format("H") * 60 * 60
    seconds += +now.format("m") * 60
    seconds += +now.format("s")
    return seconds
}

function dayLight(now) {
    if (now.isDST()) {
        return chalk.green("is")
    } else {
        return chalk.red("is not")
    }
}

function leapYear(now) {
    if (now.isLeapYear()) {
        return chalk.green("is")
    } else {
        return chalk.red("is not")
    }
}
console.log("It is " + chalk.blue(now.format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");
console.log("It is the " + chalk.magenta(now.dayOfYear()) + "th day of the year.");
console.log("It is " + chalk.cyan(seconds(now)) + " seconds into the day.");
console.log("It " + dayLight(now) + " during daylight savings time");
console.log("It " + leapYear(now) + " a leap year.");
