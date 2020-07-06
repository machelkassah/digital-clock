'use strict';

window.onload = ()=>{
    
    setInterval(displayClock, 100);
}


function displayClock(){

    var currentDateTime = new Date();
    var FullDate = currentDateTime.toDateString();
    var hours = currentDateTime.getUTCHours();
    // var hours = 20;
    var minutes = currentDateTime.getUTCMinutes();
    var seconds = currentDateTime.getUTCSeconds();
    var fullTime = hours + ":"+ minutes + ":" + seconds;

    if (hours == 10) {
        document.getElementById("motivation").innerText = "Its time for Breakfast";
        
    }
    if (hours == 14) {
        document.getElementById("motivation").innerText = "Its time for Lunch";
        
    }
    if (hours == 20) {
        document.getElementById("motivation").innerText = "Its time for Dinner";
        
    }

    document.getElementById("clock-date").innerText = FullDate;
    document.getElementById("clock-time").innerText = fullTime;
    console.log(hours);
    // var Day = currentDateTime.getDate();
    // console.log(Day);
}

