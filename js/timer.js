// get the HTML elements by id
let start = document.getElementById('start-button');
let stopbutton = document.getElementById('stop-button');
let timertext = document.getElementById('timer');

var startMins = 1

// Start timer on click
start.onclick = function() {

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
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        //timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        timer.innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            timer.innerHTML = "Cycle Complete";
            window.alert("Timer is complete. Take a 5 min break.");
        }
    }, 1000);
};

// Stop/Reset timer on click
stopbutton.onclick = function() {
    timer.innerHTML = "0m 0s";
};
