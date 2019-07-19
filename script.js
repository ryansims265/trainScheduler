//First console log just to test that the JS file is linked correctly 
console.log("Waiting for Submission");

//Set up a timer to display the current time to the user and update every second 
setInterval(function(){
  var currentTime = moment().format("HH:MM A");
  $("#currentTime").html("Current Time: " + currentTime);
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
    var number = $("#input-Number").val();
    var line = $("#input-Line").val();
    var destination = $("#input-Dest").val();
    var start = $("#input-Start").val();
    var freq = $("#input-Freq").val();
    var platform = $("#input-Platform").val();
    console.log(number);
    console.log(line);
    console.log(destination);
    console.log(start);
    console.log(freq);
    console.log(platform);

     function nextArrival() {
	    // Departure time
	    var departure = moment(start, "hh:mm").subtract(1, 'years');
	    //Difference between the departure and the current time 
	    var timeDiff = moment().diff(moment(departure), "minutes");
	    //Now we must find the remainder between the time difference and the frequency of the train 
      var remainder = timeDiff % freq;
	    //This then is subtracted from the frequency which gives us the number of minutes until the next train 
      var untilNext = freq - remainder;
      console.log("Time until next train: " + untilNext);
	    // //The next train is then formated 
	    // var nextarrival = moment().add(untilNext, 'minutes');
      // nextarrival = moment(nextarrival).format('h:mm A');
      // console.log(nextarrival);
      database.ref().push({
        number: number,
        line: line,
        destination: destination,
        start: start,
        freq: freq,
        untilNext: untilNext,
        platform: platform,
      });
  }
  
nextArrival();

 
  
  //Then push the user data values to the database
  // database.ref().push({
  //   number: number,
  //   line: line,
  //   destination: destination,
  //   start: start,
  //   freq: freq,
  //   untilNext: untilNext,
  //   platform: platform,
  // });

  //Clear the input boxes after submission {nextarrival: nextarrival,} {timetoarrive: timetoarrive,} 

  $("#input-Number").val("");
  $("#input-Dest").val("");
  $("#input-Start").val("");
  $("#input-Freq").val("");
  $("#input-Line").val("");
  $("#input-Platform").val("");
});

//Next set up a snapshot so that it will update the DOM if the data changes at any time 
database.ref().on("child_added", function (snapshot) {
  console.log("Snapshot: " + snapshot.val().number);
  console.log("Snapshot: " + snapshot.val().line);
  console.log("Snapshot: " + snapshot.val().destination);
  console.log("Snapshot: " + snapshot.val().start);
  console.log("Snapshot: " + snapshot.val().freq);
  console.log("Snapshot: " + snapshot.val().untilNext);
  // console.log(snapshot.val().timetoarrive);
  console.log("Snapshot: " + snapshot.val().platform);

  // Change the HTML to reflect the changes in the snapshot
  $("#table").append("<tr><td>" + snapshot.val().number + "</td><td>" + snapshot.val().line + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().start + "</td><td>" + snapshot.val().freq + "</td><td>" + + snapshot.val().untilNext + "</td><td>" + snapshot.val().platform + "</td></tr>");
  //Setup error handling 
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});