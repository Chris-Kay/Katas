var times;

function formatDuration (seconds) {
// Complete this function
times = [];

    if(seconds === 0) {
        return 'now';
    }

    var delta = seconds;
    var days = Math.floor(delta / 86400);
    if(days > 0) {
        formatDays(days);
    }
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    if(hours > 0) {
        formatHours(hours);
    }
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    if(minutes > 0) {
        formatMins(minutes);
    }
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = delta % 60; 
    if(seconds > 0) {
        formatSeconds(seconds);
    } // in theory the modulus is not required

    return formatArray(times);
}

function formatArray(arr){
    var outStr = "";
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        outStr = arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1);
    }
    return outStr;
}

function formatSeconds(seconds) {
    var secondString = seconds === 1 ? 'second' : 'seconds';
    times.push(seconds.toString() + ' ' + secondString);
}

function formatMins(mins) {
    var minsString = mins === 1 ? 'minute' : 'minutes';
    times.push(mins.toString() + ' ' + minsString);
}

function formatHours(hours) {
    var hourString = hours === 1 ? 'hour' : 'hours';
    times.push(hours.toString() + " " + hourString);
}

function formatDays(days) {
    var dayString = days === 1 ? 'day' : 'days';
    times.push(days.toString() + " " + dayString);
}

assertEquals(formatDuration(1), "1 second");
assertEquals(formatDuration(2), "2 seconds");
assertEquals(formatDuration(62), "1 minute and 2 seconds");
assertEquals(formatDuration(120), "2 minutes");
assertEquals(formatDuration(3600), "1 hour");
assertEquals(formatDuration(3662), "1 hour, 1 minute and 2 seconds");

function assertEquals(actual, exected) {
    console.log(actual + ' ' + (actual === exected));
}