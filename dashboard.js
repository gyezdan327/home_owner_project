function getrandTemp(randInt){
	var temperature = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
	randTemp = temperature[randInt];	
	document.write(randTemp);
}

function getrandHumidity (randInt){
	var humidity = [28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64];
	randHumidity = humidity[randInt];
	document.write(randHumidity);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(weatherApiCall);
    }
    else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function weatherApiCall(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  fetch('api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=d817246c586a57025da6e2dc8916468f') 
  .then(response => response.json())
  .then(data => console.log(data));

  console.log(response);
}