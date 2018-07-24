// Initialize variables
var startMins = 1;
var minutes = 0;
var seconds = 0;

// create message listener
browser.runtime.onMessage.addListener(messageReceived);

function messageReceived(msg){
	if (msg.action == "start"){
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
			browser.runtime.sendMessage({minUpdate: minutes,secUpdate: seconds}, function(response){});            
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                window.alert("Timer is complete. Take a 5 min break.");
            }
        }, 1000);
	}
}