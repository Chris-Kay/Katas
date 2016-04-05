var formattedSeconds,
    formattedMins,
    formattedHours;

function formatFinalNumber(formattedSeconds, formattedMins, formattedHours) {
    formattedSeconds = formattedSeconds === "0 seconds" ? undefined : formattedSeconds;
    formattedMins = formattedMins === "0 mins" ? undefined : formattedMins;
    formattedHours = formattedHours === "0 hours" ? undefined : formattedHours;


    if(formattedSeconds && formattedMins === undefined) {
        return formattedSeconds;
    } else if (formattedSeconds === undefined && formattedHours == undefined && formattedMins) {
        return formattedMins;
    } else if(formattedSeconds && formattedMins && formattedHours === undefined){
        return formattedMins + " and " + formattedSeconds;
    } else if(formattedHours && formattedMins && formattedSeconds) {
        return formattedHours + ", " + formattedMins + " and " + formattedSeconds;
    } else {
        return formattedHours;
    }
}
function formatDuration (seconds) {
// Complete this function

    if(seconds === 0) {
        return 'now';
    } else if(seconds < 60) {
        formattedSeconds = formatSeconds(seconds);
    } else if (seconds < 3600) {
        formattedMins = formatMins(seconds);
    } else {
        formattedHours = formatHours(seconds);
    }

    return formatFinalNumber(formattedSeconds, formattedMins, formattedHours);
}

function formatSeconds(seconds) {
    var secondString = seconds === 1 ? 'second' : 'seconds';
    return seconds.toString() + ' ' + secondString;
}

function formatMins(seconds) {
    var mins = Math.floor((seconds / 60));
    var minsString = mins === 1 ? 'minute' : 'minutes';
    formattedSeconds = formatSeconds(seconds - mins * 60);
    return mins.toString() + ' ' + minsString;
}

function formatHours(seconds) {
    var hours = Math.floor(((seconds / 60) / 60));
    var hourString = hours === 1 ? 'hour' : 'hours';
    formattedMins = formatMins(seconds - ((hours * 60) * 60));
    return hours.toString() + " " + hourString;
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