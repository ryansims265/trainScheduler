//First setup the firebase database 
console.log("Waiting for Submission");



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

//Create a call to the submit button that waits for the click 
$("#submit-button").on("click", function (event) {
  event.preventDefault();
  console.log("Submitted");
  //Create variables for each of the user submission areas 
  var number = $("#input-Number").val().trim();
  var line = $("#input-Line").val().trim();
  var destination = $("#input-Dest").val().trim();
  var start = $("#input-Start").val().trim();
  var freq = $("#input-Freq").val().trim();
  var platform = $("#input-Platform").val().trim();
  console.log(number);
  console.log(destination);
  console.log(start);
  console.log(freq);
  console.log(line);

  var nextarrival = "test";
  var timetoarrive = "test";

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

  // Change the HTML
  $("#table").append("<tr><td>" + snapshot.val().number + "</td><td>" + snapshot.val().Line + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().start + "</td><td>" + snapshot.val().freq + "</td><td>" + snapshot.val().platform + "</td></tr>");
  //Setup error handling 
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

var timenow = (today.getMonth() + 1) + "-" + today.getDate();
$("#current-time-here").text("The Current Time is: " + timenow);