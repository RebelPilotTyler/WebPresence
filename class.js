//This page is comprised of sample classes.
//By Tyler Widener
//tylerwidenerlm@gmail.com
class Rocket{
    //name states first
    constructor(
        fuelType, 
        weight,
        power
    ){ //substantiate
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch function started");
        alert("Launch sequence started");
        return true;
    }
    land(){
        console.log("land function started");
        alert("Land sequence started");
        return true;
    }
    detachThruster(thrusterID){
        console.log("detachThruster() function started");
        alert("Thruster " + thrusterID + " has been detached");
        return true;
    }
}
class Mission{ //The mission class is included as an example for now.
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spacecraft,
        numOfAstronauts
    ){ //substantiate
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spacecraft = spacecraft;
        this.numOfAstronauts = numOfAstronauts;
    }
    displayMissionParameters(){
        console.log("displayMissionParameters function started");
        alert("The spacecraft " + this.spacecraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear
         + " with an O2 level of " + this.oxyLvl + "%");
    }
    launch(){
        console.log("launch() function started");
        alert("Launch sequence started");
    }
}
function launchFall() {
    console.log("launchFall() function started");
    fallLaunch.launch();
}
function displayFall() {
    console.log("displayFall() function started");
    fallLaunch.displayMissionParameters();
}
function launchSpring() {
    console.log("launchSpring() function started");
    springLaunch.launch();
}
function displaySpring() {
    console.log("displaySpring() function started");
    springLaunch.displayMissionParameters();
}
//playing with data structures
function playingWithArrays() {
    const myClasses = ["CSC102", "RBT131", "SPT323"];
    console.log(myClasses[1]);
    myClasses[1] = "CSC230";
    console.log(myClasses[1]);
    for (i = 0; i < myClasses.length; i++) {
        console.log(myClasses[i]);
    }
}
function playingWithStacks() {
    let myStack = [];
    myStack.push("First Item");
    myStack.push("2nd Item");
    myStack.push("Third Item");
    console.log(myStack);
    myStack.pop();
    console.log(myStack);
}
function playingWithDictionaries() {
    var myDiction = {
        FirstName: "Chris",
        "one": 1,
        1: "some value"
    };
    console.log("Before the change");
    console.log(myDiction["one"]);
    myDiction["one"] = "the number formerly known as one";
    console.log("After the change");
    console.log(myDiction["one"]);
    console.log(myDiction[1]);
}