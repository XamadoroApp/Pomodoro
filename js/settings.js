

//cookie code
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}


let timesettingbutton = document.getElementById('time-setting-button');

//set persistent value in textbox
//var timesetting = getCookie("timesetting");


function setHistory(){
 
    //document.getElementById("timesetting-textbox").style="background:red;"; //Change the background color to red.
    document.getElementById("timesetting-textbox").value=getCookie("timesetting");
}

setHistory();

timesettingbutton.onclick = function() { 
    //set Cookie to value of textBox
    var newValue = document.getElementById("timesetting-textbox").value;
    //check if Value is number
    if(isNaN(newValue)){
        window.alert("Value " + newValue + " is not a number. Please try again."); 
    } else {
         //set Cookie to value of textBox
        setCookie("timesetting",document.getElementById("timesetting-textbox").value,365);
        var timesetting = getCookie("timesetting");
        window.alert("I have setup the new time for you." + timesetting + " !"); 
    }
    
};