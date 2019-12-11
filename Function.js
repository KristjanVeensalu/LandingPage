
window.onload = updateClock(); 
				setInterval('updateClock()', 1000 );
				changeBackground();


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
				"url('images/backgrounds/background15.gif')",/*At 900s*/
				"url('images/backgrounds/background14.gif')",/*At 840s*/
				"url('images/backgrounds/background13.gif')",/*At 780s*/
				"url('images/backgrounds/background12.gif')",/*At 720s*/
				"url('images/backgrounds/background11.gif')",/*At 660s*/
				"url('images/backgrounds/background10.gif')",/*At 600s*/
				"url('images/backgrounds/background9.gif')",/*At 540s*/
				"url('images/backgrounds/background8.gif')",/*At 480s*/
				"url('images/backgrounds/background7.gif')",/*At 420s*/
				"url('images/backgrounds/background6.gif')",/*At 360s*/
				"url('images/backgrounds/background5.gif')",/*At 300s*/
				"url('images/backgrounds/background4.gif')",/*At 240s*/
				"url('images/backgrounds/background3.gif')",/*At 180s*/
				"url('images/backgrounds/background2.gif')",/*At 120s*/
				"url('images/backgrounds/background1.gif')" /*At 60s*/ 
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
	    if (--i) {          // If i > 0, keep going
	      theLoop(i);      // Call the loop again, and pass it the current value of i
	    }
	  }, timedifference);
	};

	theLoop(repeater);
	setInterval(()=> {theLoop(repeater)},timedifferenceSum);


	/*setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background1.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},60 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background3.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},120 * 1000);	
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background4.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},180 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background5.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},240 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background6.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},300 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background7.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},360 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background8.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},420 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background9.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},480 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background10.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},540 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background11.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},600 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background12.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},660 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background13.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},720 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background14.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},780 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background15.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},840 * 1000);
	setInterval(() => {document.getElementById("body").style.backgroundImage = 
		"url('images/backgrounds/background2.gif')";
		console.log(document.getElementById("body").style.backgroundImage);},900 * 1000);*/
}