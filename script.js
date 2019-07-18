//First console log just to test that the JS file is linked correctly 
console.log("Waiting for Submission");

//Set up a timer to display the current time to the user and update every second 
setInterval(function(){
  var currentTime = moment().format("HH:MM A");
  $("#currentTime").html("The Current Time is: " + currentTime);
}, 1000);

//Setup the firebase database 
var firebaseConfig = {
  apiKey: "AIzaSyA2dI2zWOEsFCpHiCDs5T4200ax98VJRb8",
  authDomain: "anotherone-631a5.firebaseapp.com",
  databaseURL: "https://anotherone-631a5.firebaseio.com",
  projectId: "anotherone-631a5",
  storageBucket: "",
  messagingSenderId: "710450884721",
  appId: "1:710450884721:web:f469249e7ff2ce00"
};
//Then intialize the firebase database that we just setup
firebase.initializeApp(firebaseConfig);
//Then set up a variable that calls the database
var database = firebase.database();
//Listen for a click on the submit button 
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
    console.log("Submitted");
//Create variables for each of the user submission areas and log each one 
    var name = $("#input-Name").val().trim();
    var destination = $("#input-Dest").val().trim();
    var start = $("#input-Start").val().trim();
    var freq = $("#input-Freq").val().trim();
    console.log(name);
    console.log(destination);
    console.log(start);
    console.log(freq);

  //Then push the user data values to the database
  database.ref().push({
    number: number,
    line: line,
    destination: destination,
    start: start,
    freq: freq,
    nextarrival: nextarrival,
    timetoarrive: timetoarrive,
    platform: platform,
  });

  //Clear the input boxes after submission 

  $("#input-Number").val("");
  $("#input-Dest").val("");
  $("#input-Start").val("");
  $("#input-Freq").val("");
  $("#input-Line").val("");
  $("#input-Platform").val("");
});

//Next set up a snapshot so that it will update the DOM if the data changes at any time 
database.ref().on("child_added", function (snapshot) {
  console.log(snapshot.val().number);
  console.log(snapshot.val().line);
  console.log(snapshot.val().destination);
  console.log(snapshot.val().start);
  console.log(snapshot.val().freq);
  console.log(snapshot.val().nextarrival);
  console.log(snapshot.val().timetoarrive);
  console.log(snapshot.val().platform);

  // Change the HTML to reflect the changes in the snapshot
  $("#table").append("<tr><td>" + snapshot.val().number + "</td><td>" + snapshot.val().line + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().start + "</td><td>" + snapshot.val().freq + "</td><td>" + snapshot.val().nextarrival + "</td><td>" + snapshot.val().timetoarrive + "</td><td>" + snapshot.val().platform + "</td></tr>");
  //Setup error handling 
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

