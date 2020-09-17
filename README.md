## Introduction

HomeMonitor is a web application that allows users to login based on SSO, using their Gmail or Facebook accounts.

Once the users are signed in, the user can see three main elements:

1. Temperature/Humidity readings per room
   - Once the room names are clicked, the users can see the temperature and humidity plot for the past 5 hours for that specific room.
   - Note that temperatures and humidity reading for each room from the sensors are simulated by randomly drawing from a set of possible temperatures and humidities. 
2. Weather report from user's GPS location
   - Once logged in to the dashboard page, your browser prompts you for your location. If they allow this, the application shows your current location, written weather, temperature and humidity.
3. News headings
   - The application picks up the news headings from 

## Technical Specifications

**Front End:** HTML, CSS, JavaScript

**Back End:** JavaScript, Fetch

**Local Testing:** node tools, http-server

**APIs:** Accuweather, New York Times

- Index.html
  - Holds the SSO feature utilizing FireBase authorization. Tokens recieved in the Google Cloud Services and Facebook Applications are used to make SSO possible.
- dashboard.html
  - Utilizes css files and graphic libraries for icons and widgets. Also implements the weather icons for displaying the current location's weather.
- dashboard.js
  - Includes a multitude of functions, mainly handling the replication of sensor values of temperature and humidity, API calls to AccuWeather  for weather by location and the New York Times for current news headlines.
- plots.html
  - HTML for the temperature and humidity plots per rooms. Utilizes libraries to create a visually dynamic deviation graph of the temperature and humidity.

## Running HomeMonitor

You will need a configuration file named "config.js" so as to be able to access the API necessary. Please place it in the root folder of your cloned local repository. User/.../home_owner_project/

The config file should look like the following

```
var fireBaseConfig = {
	*Insert Firebase configuratio here*
};

var weatherApiConfig = {
    key: "*Insert API Key for AccuWeather*"
};

var newsApiConfig = {
	key: "*Insert API Key for New York Times' Most Popular API*"
};
```


We will also be happy to send you the configuration file via email if you reach out to us.

In your terminal or command line, install http-server (Node tool used to host simple web applications locally) by one of either way.

```
npm install --global http-server
```

```
brew install http-server
```

To use http-server, all you have to do is run

```
http-server [path]
```

Replace [path] with the path to the locally cloned repo, with config.js placed in it.

Now you can visit http://localhost:8080 to see the application running. If you see EC463 Mini Project, that is the right one.

Any other preferred method of running a simple html or directory locally can be used as well.

## Testing

Integration testing with the three external APIs have been conducted.

<h4>Test Case 1 - User log-in using Google, Browser's first time on website, six rooms with temperature/humidity sensors</h4>

**Expected Behavior:** Successfully log-in via Google Authentication, redirected to dashboard where the user can see the six rooms temperature/humidity. Browser should ask for permission to use location services, and if the user allows, the current location's weather will be shown. News headlines shold be loaded at log-in.

**Test Result:** [x]


<h4>Test Case 2 - User log-in using Facebook, Browser's first time on website, six rooms with temperature/humidity sensors</h4>

**Expected Behavior:** Successfully log-in via Facebook Authentication, redirected to dashboard where the user can see the six rooms temperature/humidity. Browser should ask for permission to use location services, and if the user allows, the current location's weather will be shown. News headlines shold be loaded at log-in.

**Test Result:** [x]


<h4>Test Case 3 - User logged on using Google, but later decides to use Facebook to log-in as another user</h4>

**Expected Behavior:** Prompts that the user already has an account with Google associated with this application, and redirects user to Google log-in.

**Test Result:** [x]


<h4>Test Case 4 - User's browser doesn't support GeoLocation</h4>

**Expected Behavior:** Temperatures and humidities of rooms are still accessible, news headlines are also accessible, current location's temperature and humidity should stay blank (-).

**Test Result:** [ ] (No access to such browser)

## Future Updates

The UI which was developed can easily be integrated with a real life temperature and humidity sensors. Also, by attaching a database, it will be possible to store the user's temperature and humidity readings, or their frequently checked rooms, a lot of customization is possible.

## Troubleshooting

When playing around with the contents locally, make sure to re-run the http-server, and force reload the localhost page on your browser to register the changes.

## Contact

Ghazanfar Yezdan - gyezdan@bu.edu

Kaito Yamagishi - kaitoy@bu.edu

Project Link (Does not work without configuration file but hosted on GitHub Pages): https://gyezdan327.github.io/home_owner_project/

