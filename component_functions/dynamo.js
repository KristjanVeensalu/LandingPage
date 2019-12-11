
window.onload = updateClock(); 
				setInterval('updateClock()', 1000 );
				changeBackground();
				console.log("Functions Loaded");

	//The clock
function updateClock (){
	days = new Array("Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev");
	var currentTime = new Date ( );
	//Local
	var currentHours = currentTime.getHours ( ) ;

	//(UTC) Coordinated universal time
	var currentHoursUTC = currentTime.getHours ( ) - 3;
	if (currentHoursUTC == -3) {
		currentHoursUTC = 21;
	}
	if (currentHoursUTC == -2) {
		currentHoursUTC = 22;
	}
	if (currentHoursUTC == -1) {
		currentHoursUTC = 23;
	}

	//Only clock
	var currentClockOnly = currentTime.getHours ( );
	var currentMinutes = currentTime.getMinutes ( );
	var currentSeconds = currentTime.getSeconds ( );
	var currentDay = currentTime.getDay ( );
	var today = new Date();
	var dd = currentTime.getDate();
	var mm = currentTime.getMonth()+1; //January is 0!
	var yyyy = currentTime.getFullYear();

	if(dd<10) {
    dd='0'+dd
	}

	if(mm<10) {
		mm='0'+mm
	}

	today = dd+'/'+mm+'/'+yyyy;

	//Local
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	//UTC
	currentHoursUTC = ( currentHoursUTC < 10 ? "0" : "" ) + currentHoursUTC;
	currentHoursUTC = ( currentHoursUTC == 0 ) ? 12 : currentHoursUTC;

	var currentTimeString =currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + days[currentDay];
	var currentTimeStringUTC ="UTC: " + currentHoursUTC + ":" + currentMinutes + ":" + currentSeconds;
	var currentClockOnlyString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
	document.getElementById("clockLocal").firstChild.nodeValue = currentTimeString;
	document.getElementById("clockUTC").firstChild.nodeValue = currentTimeStringUTC;
	document.getElementById("clockOnly").firstChild.nodeValue = currentClockOnlyString;
}

function changeBackground(){
	/*Loop variables*/
	var currentTime = new Date ( );
	var currentSeconds = currentTime.getSeconds ( );
	/*------End-----*/
	var imgA = [
				"url('../Images/backgrounds/background9.gif')",/*At 540s*/
				"url('../Images/backgrounds/background8.gif')",/*At 480s*/
				"url('../Images/backgrounds/background7.gif')",/*At 420s*/
				"url('../Images/backgrounds/background6.gif')",/*At 360s*/
				"url('../Images/backgrounds/background3.gif')",/*At 180s*/
				"url('../Images/backgrounds/background2.gif')",/*At 120s*/
				];

	var textColor = [
				"white",/*At 540s*/
				"black",/*At 480s*/
				"white",/*At 420s*/
				"white",/*At 360s*/
				"white",/*At 180s*/
				"white",/*At 120s*/
				];
	
	var loaderColor = [
						"12px solid green",
						"12px solid red"
						];


	document.getElementById("body").style.background = imgA[13];
	document.getElementById("body").style.color = textColor[13];
	var repeater  = imgA.length;
	var timedifference = 30000;//Every half-minute -- change this for longer time between changes
	var timedifferenceSum = timedifference*imgA.length;

	function theLoop (i) {
	  setTimeout(function () {
	   	document.getElementById("body").style.backgroundImage = imgA[i];
	   	document.getElementById("body").style.color = textColor[i];
	    if (--i) {
	      theLoop(i);
	    }
	  }, timedifference);
	};

	theLoop(repeater);
	setInterval(()=> {theLoop(repeater)},timedifferenceSum);
}