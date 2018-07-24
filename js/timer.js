// get the HTML elements by id
let start = document.getElementById('start-button');
let minutetext = document.getElementById('minutes');
let secondtext = document.getElementById('seconds');

// Send the start timer message on start click
start.onclick = function(){
		browser.runtime.sendMessage(
			{action: "start"}, function(response){

		});
}

// Create message listener to get incoming timer update messages
browser.runtime.onMessage.addListener(messageReceived);

// Receive updates from timer
function messageReceived(msg){
	// Give minutes a leading 0
	if (msg.minUpdate < 10) {
		minutetext.innerHTML = "0" + msg.minUpdate + ":";
	} else {
		minutetext.innerHTML = msg.minUpdate + ":";
	}
	// Give seconds a leading 0
	if (msg.secUpdate < 10) {
		secondtext.innerHTML = "0" + msg.secUpdate;
	} else {
		secondtext.innerHTML = msg.secUpdate;
	}

}