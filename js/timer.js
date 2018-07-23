// get the HTML elements by id
let start = document.getElementById('start-button');
//let stopbutton = document.getElementById('stop-button');
let minutetext = document.getElementById('minute-display');
let secondtext = document.getElementById('second-display');
let statustext = document.getElementById('status');

// Initial value of start minutes
var startMins = 1;
var stopped = "true";

// Zero out minutes and seconds
var minutes = 0;
var seconds = 0;

// Start timer on click

start.onclick = function() {
    stopped = "false";
        var countDownDate = (new Date().getTime() + startMins*60000);
        
        // Update the count down every 1 second
        var x = setInterval(function() {
            
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);

            minutetext.innerHTML = minutes;
            secondtext.innerHTML = seconds;

            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                statustext.innerHTML = "Cycle Complete";
                window.alert("Timer is complete. Take a 5 min break.");
            }

            // If the timer is stopped, stop the timer
            if (stopped == "true"){
                clearInterval(x);
                minutetext.innerHTML = minutes;
                secondtext.innerHTML = seconds;
            }
        }, 1000);
};

/*
// Stop/Reset timer on click
stopbutton.onclick = function() {
    stopped = "true";
};
*/
