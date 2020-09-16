type='text/javascript';
src='config.js';

//assign random temperature
function getrandTemp(randInt) {
	var temperature = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
	randTemp = temperature[randInt];	
	document.write(randTemp);
	return randTemp;
}

//assign random humidity
function getrandHumidity(randInt) {
	var humidity = [28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64];
	randHumidity = humidity[randInt];
	document.write(randHumidity);
	return randHumidity;
}

//simple function for the functions above to get a random integer
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Calls the getCurrentPosition function only if browser supports
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(weatherApiCall);
	}
	else {
    x.innerHTML = "Geolocation functionalities are not  supported by this browser.";
	}
}

//Call API from the received coordinates
function weatherApiCall(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;

	//Use fetch library; json gets processed to processing function
	fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + weatherApiConfig.key)
	.then((response) => response.json())
	.then((json) => processJson(json))
	.catch((error) => console.log(error));

  return 0;
}

//gets the json and extracts information to display on frontend
function processJson(json) {
	//temperature in Fahrenheit (conversion from K)
	var temp = Math.round((json.main.temp - 273.15) * 1.8 + 32);
	//humidity in percent
	var humidity = json.main.humidity;

	//Prepare data to be read by HTML
	document.getElementById("main").innerHTML = json.weather[0].main;
	document.getElementById("details").innerHTML = "The weather for today will be " + json.weather[0].description;
	document.getElementById("temp").innerHTML = temp.toString() + "°F";
	document.getElementById("humidity").innerHTML = humidity.toString() + "%";
	document.getElementById("country").innerHTML = json.sys.country;
	document.getElementById("state").innerHTML = json.name + ",";
	var iconcode = json.weather[0].icon;
	var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
	$('#wicon').attr('src', iconurl);
}

//Build simulated charts for temperatures and humidities for each room.
function BuildChart() {

	//get current time for axes
	var today = new Date();   
	var time = today.getHours();

	//generate array of 6 random temperatures and humidities
	var temps = new Array(6);
	var humidities = new Array(6);
	
	for (i = 0; i < 6; i++) {
		temps[i] = getrandTemp(getRndInteger(0, 13));
		humidities[i] = getrandHumidity(getRndInteger(0, 13));
	}
	

	// Temperature Chart 
	var ctx = document.getElementById('myTempChart').getContext('2d');
	var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: [(time-5).toString()+':00', (time-4).toString()+':00', (time-3).toString()+':00', (time-2).toString()+':00', (time-1).toString()+':00', (time).toString()+':00'],
        datasets: [{
            label: 'Temperature',
            backgroundColor: 'rgb(252, 140, 3)',
            borderColor: 'rgb(252, 140, 3)',
            data: temps
        }]
    },

    // Configuration options go here
    options: {maintainAspectRatio: false}
	});


	// Humidity Chart 
	var ctx = document.getElementById('myHumidityChart').getContext('2d');
	var chart = new Chart(ctx, {
	    // The type of chart we want to create
	    type: 'line',

	    // The data for our dataset
	    data: {
	        labels: [(time-5).toString()+':00', (time-4).toString()+':00', (time-3).toString()+':00', (time-2).toString()+':00', (time-1).toString()+':00', (time).toString()+':00'],
	        datasets: [{
	            label: 'Humidity',
	            backgroundColor: 'rgb(64, 175, 245)',
	            borderColor: 'rgb(64, 175, 245)',
	            data: humidities
	        }]
	    },

	    // Configuration options go here
	    options: {maintainAspectRatio: false}
	});

	return 0;
}

//Calls the news API with key from config file.
function newsApiCall() {
	fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key="+ newsApiConfig.key)
	.then((response) => response.json())
	.then((json) => processNewsJson(json))
	.catch((error) => console.log(error));
  return 0;
}

//Gets the json for the news, extracts needed information and sends to frontend
function processNewsJson(json){
	document.getElementById("headline1").innerHTML = json.results[0].title;
	document.getElementById("link1").setAttribute("href", json.results[0].url);
	document.getElementById("headline2").innerHTML = json.results[1].title;
	document.getElementById("link2").setAttribute("href", json.results[1].url);
	document.getElementById("headline3").innerHTML = json.results[2].title;
	document.getElementById("link3").setAttribute("href", json.results[2].url);
}
