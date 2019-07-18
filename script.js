//First setup the firebase database 
console.log("Waiting for Submission");


setInterval(function(){
  var currentTime = moment().format("HH:MM A");
  $("#currentTime").html("The Current Time is: " + currentTime);
}, 1000);

// var today = new Date();
// var currenttime = today.getHours() + ":" + today.getMinutes();
// $("#timer").html("Time until next Train: " + currenttime);

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

<<<<<<< HEAD
  //Create a call to the submit button that waits for the click 
  $("#submit-button").on("click", function(event) {
    event.preventDefault();
    console.log("Submitted");
//Create variables for each of the user submission areas 
    var name = $("#input-Name").val().trim();
    var destination = $("#input-Dest").val().trim();
    var start = $("#input-Start").val().trim();
    var freq = $("#input-Freq").val().trim();
    console.log(name);
    console.log(destination);
    console.log(start);
    console.log(freq);
    var newtime = Data.parse(start);
    console.log(newtime);

    //Then push the user data values to the database
    database.ref().push({
      name: name,
      destination: destination,
      start: start,
      freq: freq,
      currenttime: currenttime,
    });
//Clear the input boxes after submission 
=======
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
>>>>>>> e8603b919ce42e815ac749fd9c55f61512176d7a

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
<<<<<<< HEAD
    database.ref().on("child_added", function(snapshot) {
      console.log(snapshot.val().name);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().start);
      console.log(snapshot.val().freq);
      console.log(snapshot.val().currenttime);
      // Change the HTML
$("#table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().start + "</td><td>" + snapshot.val().freq) + "</td></tr>";

//Setup error handling 

    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

   
=======
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
  $("#table").append("<tr><td>" + snapshot.val().number + "</td><td>" + snapshot.val().line + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().start + "</td><td>" + snapshot.val().freq + "</td><td>" + snapshot.val().nextarrival + "</td><td>" + snapshot.val().timetoarrive + "</td><td>" + snapshot.val().platform + "</td></tr>");
  //Setup error handling 
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
>>>>>>> e8603b919ce42e815ac749fd9c55f61512176d7a

