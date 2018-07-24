// get the HTML elements by id
let start = document.getElementById('start-button');
let minutetext = document.getElementById('minutes');
let secondtext = document.getElementById('seconds');

// Set timer status
var timerStopped = true;

// Send the start message on start click
start.onclick = function(){
	if (timerStopped){
		// timer started
		timerStopped = false;
		// send start message
		browser.runtime.sendMessage(
			{action: "start"}, function(response){

		});
	}
}

// Create message listener
browser.runtime.onMessage.addListener(messageReceived);

// Receive updates from timer
function messageReceived(msg){
	minutetext.innerHTML = msg.minUpdate + ":";
	secondtext.innerHTML = msg.secUpdate;
}