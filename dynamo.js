
window.onload = updateClock(); 
				setInterval('updateClock()', 1000 );
				changeBackground();
				console.log("Functions Loaded");


	//The clock
	function updateClock ( ){
	days = new Array("Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev");
	var currentTime = new Date ( );
	//Local
	var currentHours = currentTime.getHours ( ) ;

	//(UTC)Coordinated universal time
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

	console.log(" - Seconds passed");

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


	var currentTimeString =currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + days[currentDay] + "," + today;
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
				"url('Images/backgrounds/background15.gif')",/*At 900s*/
				"url('Images/backgrounds/background14.gif')",/*At 840s*/
				"url('Images/backgrounds/background13.gif')",/*At 780s*/
				"url('Images/backgrounds/background12.gif')",/*At 720s*/
				"url('Images/backgrounds/background11.gif')",/*At 660s*/
				"url('Images/backgrounds/background10.gif')",/*At 600s*/
				"url('Images/backgrounds/background9.gif')",/*At 540s*/
				"url('Images/backgrounds/background8.gif')",/*At 480s*/
				"url('Images/backgrounds/background7.gif')",/*At 420s*/
				"url('Images/backgrounds/background6.gif')",/*At 360s*/
				"url('Images/backgrounds/background5.gif')",/*At 300s*/
				"url('Images/backgrounds/background4.gif')",/*At 240s*/
				"url('Images/backgrounds/background3.gif')",/*At 180s*/
				"url('Images/backgrounds/background2.gif')",/*At 120s*/
				"url('Images/backgrounds/background1.gif')" /*At 60s*/ 
				];

	var textColor = [
				"black",/*At 900s*/
				"black",/*At 840s*/
				"black",/*At 780s*/
				"black",/*At 720s*/
				"black",/*At 660s*/
				"black",/*At 600s*/
				"white",/*At 540s*/
				"black",/*At 480s*/
				"white",/*At 420s*/
				"white",/*At 360s*/
				"black",/*At 300s*/
				"white",/*At 240s*/
				"white",/*At 180s*/
				"white",/*At 120s*/
				"white" /*At 60s*/ 
				];
				
	document.getElementById("body").style.background = imgA[14];
	document.getElementById("body").style.color = textColor[14];
	var repeater  = imgA.length;
	var timedifference = 30000;//Every half-minute -- change this for longer time between changes
	var timedifferenceSum = timedifference*imgA.length;


	function theLoop (i) {
	  setTimeout(function () {
	   	document.getElementById("body").style.backgroundImage = imgA[i];
	   	document.getElementById("body").style.color = textColor[i];
	   	console.log(currentTime);
	   	console.log(document.getElementById("body").style.backgroundImage + "child> " + i);
	    if (--i) {
	      theLoop(i);
	    }
	  }, timedifference);
	};

	theLoop(repeater);
	setInterval(()=> {theLoop(repeater)},timedifferenceSum);
}