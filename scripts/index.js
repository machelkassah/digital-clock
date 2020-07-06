'use strict';

window.onload = ()=>{
    setInterval(()=>{

        let currentDateTime = new Date();
        let FullDate = currentDateTime.toDateString();
        let hours = currentDateTime.getUTCHours();
        // let hours = 20;
        let minutes = currentDateTime.getUTCMinutes();
        let seconds = currentDateTime.getUTCSeconds();
        let fullTime = hours + ":"+ minutes + ":" + seconds;
    
        if (hours == 10) {
            document.getElementById("motivation").innerText = "Its time for Breakfast";
            document.getElementById("face-background").style.backgroundImage = "url('../images/breakfast.jpg')";
           
            
        }
        if (hours == 14) {
            document.getElementById("motivation").innerText = "Its time for Lunch";
            document.getElementById("face-background").style.backgroundImage = "url('../images/lunch.png')";

            
        }
        if (hours == 20) {
            document.getElementById("motivation").innerText = "Its time for Dinner";
            document.getElementById("face-background").style.backgroundImage = "url('../images/dinner.jpg')";

            
        }
    
        document.getElementById("clock-date").innerText = FullDate;
        document.getElementById("clock-time").innerText = fullTime;
        console.log(hours);
        // let Day = currentDateTime.getDate();
        // console.log(Day);
    
    }, 100);
};




