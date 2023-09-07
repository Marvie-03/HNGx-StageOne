
var box = document.getElementById("box");
var dateDiv = document.getElementById('date')
var utc = document.getElementById('utc-time')
var position = 0;


let day = `Today is ${(new Date().toLocaleString('en-US', {weekday: 'long'}))}`
if(day){
    dateDiv.textContent = day
}
let utcContent = `The current UTC time is ${new Date().toUTCString()}`
if (utc){
    utc.textContent = utcContent
}


