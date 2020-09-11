type='text/javascript';
src='config.js';

//assign random temperature
function getrandTemp(randInt) {
	var temperature = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
	randTemp = temperature[randInt];	
	document.write(randTemp);
}

//assign random humidity
function getrandHumidity(randInt) {
	var humidity = [28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64];
	randHumidity = humidity[randInt];
	document.write(randHumidity);
}

//simple function for the functions above to assign a random integer
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

//Actual call statement to the API from the received coordinates
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

function processJson(json) {
  //name of the city
  console.log(json.name);
  //Weather in words (i.e. Sunny, Clouds, etc.)
  console.log(json.weather[0].main);

  //temperature in Fahrenheit
  var temp = Math.round((json.main.temp - 273.15) * 1.8 + 32);
  //humidity in percent
  var humidity = json.main.humidity;

  //Prepare data to be read by HTML
  document.getElementById("temp").innerHTML = temp.toString() + "°F";
  document.getElementById("humidity").innerHTML = humidity.toString() + "%";
}