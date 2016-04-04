function formatFinalNumber(formattedSeconds, formattedMins, formattedHours) {

}
function formatDuration (seconds) {
// Complete this function
    var formattedSeconds,
        formattedMins,
        formattedHours;

    if(seconds === 0) {
        return 'now';
    } else if(seconds < 60) {
        formattedSeconds = formatSeconds(seconds);
    } else if (seconds < 3600) {
        formattedMins = formatMins(seconds);
    }

    formatFinalNumber(formattedSeconds, formattedMins, formattedHours);
}

function formatSeconds(seconds) {
    var secondString = seconds === 1 ? 'second' : 'seconds';
    return seconds.toString() + ' ' + secondString;
}

function formatMins(seconds) {
    var mins = Math.floor((seconds / 60));
    var minsString = mins === 1 ? 'minute' : 'minutes';
    var seconds = formatSeconds(seconds - mins * 60);
    return mins.toString() + ' ' + minsString;
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