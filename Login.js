//This code controls the login page
//By Tyler Widener
//tylerwidenerlm@gmail.com
function checkCreds() {
    console.log("checkCreds started");
    var firstName = document.getElementById("FName").value;
    var lastName = document.getElementById("LName").value;
    var badgeNum = document.getElementById("BadgeID").value;
    var fullName = firstName + " " + lastName;
    console.log("Full Name is " + fullName);
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("LoginStatus").innerHTML = "Invalid full name! Please submit a valid full name.";
    }
    else if (badgeNum > 999 || badgeNum < 0) {
        document.getElementById("LoginStatus").innerHTML = "Invalid Badge Number! Please submit a valid badge number.";
    }
    else {
        alert("Welcome, " + fullName);
        location.replace("UATSpacePage.html");
    }
}