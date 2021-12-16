// Packages required to install for all this is :
/*
    Express : for server working
    body-parser : for taking input
    nodemon : for continuous reloading of the server
*/

// requiring of the following packages from npm.
const express = require("express");
const bodyParser = require("body-parser");


// creation of app through express.
const app = express();

// This is done to make the public folder as static to contains css and images files
app.use(express.static("public"));


// it is a required statement if we want to fetch data using html file 
app.use(bodyParser.urlencoded({ extended: true }));

// Thro
app.get("/", function (req, res) {
    // User entered the main master location
    res.sendFile(__dirname + "/index.html");
});


// localhost:3000/success page
app.get("/success", function (req, res) {
    res.sendFile(__dirname + "/thanks.html");
});


// localhost:3000/failure page
app.get("/failure", function (req, res) {
    // User entered the main master location
    res.sendFile(__dirname + "/failure.html");
});


// Action to be performed when the user submits the form with mehtod post in the
// index.html
app.post("/", function (req, res) {
    const userName = req.body.user_name;
    const pw = req.body.password;
    const email = req.body.email;
    console.log("Name of the user     :" +userName);
    console.log("Password of the user :" +pw);
    console.log("Email of the user    :"+email);

    // console.log(res.statusCode);  this line was used to check the status code of the 
    // server

    // If a server works perfectly fines then it gives a status code of 200 and 
    // if it gives then we will send it to the success page else the failure page.
    if (res.statusCode === 200) {
        res.sendFile(__dirname + "/thanks.html");
    }
    else {
        res.sendFile(__dirname + "/failure.html");
    }
});


// This is called when we click the submit button of the form of the success page
app.post("/success", function (req, res) {
    res.redirect("/");
    console.log("Successfully logged in!");
});


// This is called when we click the submit button of the form of the success page
app.post("/failure", function (req, res) {
    res.redirect("/");
    console.log("Failure page forwarder to the base!");
});


// This function is used to listen to the server at local host 3000
// In place of 3000, we can use any of the local servers and also if we have some 
// other servers then we need to precise in the location as every server do not use 3000.
app.listen(process.env.PORT || 3000, function () {
    console.log("app is running at local host 3000!");
});