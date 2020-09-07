var temperature = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
var humidity = [28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64];

var randTemp = Array(6);
var randHumidity = Array(6);

//Generate randTemp and randHumidity that includes 6 random temp&humidity values
for (i=0; i<6; i++) {
  var randInt = getRndInteger(0,13);
  randTemp[i] = "Temperature: " + temperature[randInt].toString() + "°F";
  randHumidity[i] = "Humidity: " + humidity[randInt].toString() + "%";
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}