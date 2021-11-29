//This code controls the main page
//By Tyler Widener
//tylerwidenerlm@gmail.com
function play_craps() { //Defines the function play_craps
    console.log("play_craps() function started"); //Writes a message to the console saying that the game has started
    var die1 = Math.ceil(Math.random() * 6); //defines a variable that is assigned a random float between 0 and 6, which is rounded up.
    var die2 = Math.ceil(Math.random() * 6); //defines another variable that is assigned a random float between 0 and 6, which is rounded up.
    var sum = die1 + die2; //defines a variable that is assigned the sum of the two random numbers
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //Write the value of the first die to the screen
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //Write the value of the second die to the screen
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //Write the value of the sum of the two dice to the screen
    if (sum == 7 || sum == 11) { //if the sum of the random numbers is equal to 7 or 11...
        document.getElementById("finalResult").innerHTML = "CRAPS - you lose!"; //Write a losing statement to the screen.
        document.getElementById("lossRes").innerHTML = loss; //Displays the number of losses to the screen.
        loss++; //Updates the number of losses
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If you didn't lose, the two dice have equal values, and the values are both even...
        document.getElementById("finalResult").innerHTML = "DOUBLES - you win!"; //Write a victory statement to the screen
        document.getElementById("winsRes").innerHTML = wins; //Displays the number of wins to the screen
        wins++; //Updates the number of wins
    }
    else { //If you didn't win or lose...
        document.getElementById("finalResult").innerHTML = "Draw - You neither won nor lost. Please try again!"; //Write a statement saying that you didn't win or lose
        document.getElementById("tieRes").innerHTML = tie; //Displays the number of draws to the screen
        tie++; //Updates the number of draws
    }

}
function blastoff() { //This function is now obsolete, replaced by btrBlastoff()
    var currTime = 50;
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}
function btrBlastoff() {
    console.log("btrBlastoff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) { //Go through the for loop 11 times
        setTimeout(function () {
            if (currTime >= 25) { //If countdown is greater than or equal to 25
                document.getElementById("countdownTimer").innerHTML = currTime; //Write the current time to the screen
            }
            else if (currTime == 0) { //If countdown is equal to 0
                document.getElementById("countdownTimer").innerHTML = "Blastoff!"; //Display the blastoff message
            }
            else { //If the countdown is less than 25
                document.getElementById("countdownTimer").innerHTML = "Warning, less than halfway to launch, time left = " + currTime; //Write the current time and a message to the screen
            }
            currTime -= 5; //Update current time
        }, i * 5000); //Update the timer
    }
}
function start() {
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop() {
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
//Function to update the display...
function updateDisplay() {
    theTime = new Date();
    console.log("The time is: " + theTime.getHours() + ":"
        + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
        + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    var timeRead = data[index].time_seconds;
    if (timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, " ");
        document.getElementById("data").rows["gps_altitude"].innerHTML = dataRow("GPS Altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmp_sensor_altitude"].innerHTML = dataRow("BMP Altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmp_sensor_pressure"].innerHTML = dataRow("BMP Pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmp_sensor_temperature"].innerHTML = dataRow("BMP Temperature", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digital_sensor_pressure"].innerHTML = dataRow("Digital Temperature", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["css_sensor_temperature"].innerHTML = dataRow("CSS Temperature", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["css_sensor_eco2"].innerHTML = dataRow("CSS ECO2", data[index].cssSensor_eCO2, " ");
        document.getElementById("data").rows["css_sensor_tvoc"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["uv"].innerHTML = dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accel_x"].innerHTML = dataRow("Accel X", data[index].accelX, " ");
        document.getElementById("data").rows["accel_y"].innerHTML = dataRow("Accel Y", data[index].accelY, " ");
        document.getElementById("data").rows["accel_z"].innerHTML = dataRow("Accel Z", data[index].accelZ, " ");
        document.getElementById("data").rows["magnetic_x"].innerHTML = dataRow("Magnetic X", data[index].magneticX, " ");
        document.getElementById("data").rows["magnetic_y"].innerHTML = dataRow("Magnetic Y", data[index].magneticY, " ");
        document.getElementById("data").rows["magnetic_z"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ, " ");
        document.getElementById("data").rows["gyro_x"].innerHTML = dataRow("Gyro X", data[index].gyroX, " ");
        document.getElementById("data").rows["gyro_y"].innerHTML = dataRow("Gyro Y", data[index].gyroY, " ");
        document.getElementById("data").rows["gyro_z"].innerHTML = dataRow("Gyro Z", data[index].gyroZ, " ");

        document.getElementById("timeClock").innerHTML = "The time is: " + theTime.getHours() + ":"
            + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
            + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());

        if (index < 500) {
            index++;
        }
        else {
            index = 0;
        }
    }
}
function getData() { //Retrieve the data from dataloader.js
    var loadedData = loadData();
    return loadedData;
}
function dataRow(legend, value, units) { //Define a data row from the data in dataloader.js
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}
function playStation() { //Plays the space station sounds
    console.log("playStation() function started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}
function sound(srcFile) { //universal play sound function
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
function playTheme() { //Plays The Eternal Voyage Main Theme
    console.log("playTheme() function started");
    mySound = new sound("The Eternal Voyage - Main Theme.mp3");
    mySound.play();
}
class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function goUATSpace() {
    console.log("goUATSpace() started");
    location.replace("Login.html");
}
function goBoardsPage() {
    console.log("goBoardsPage() started");
    location.replace("boards.html");
}
function goIndex() {
    console.log("goIndex() started");
    location.replace("index.html");
}