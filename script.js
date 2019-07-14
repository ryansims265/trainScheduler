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

    //Then push the user data values to the database
    database.ref().push({
      name: name,
      destination: destination,
      start: start,
      freq: freq
    });
//Clear the input boxes after submission 

$("#input-Name").val("");
$("#input-Dest").val("");
$("#input-Start").val("");
$("#input-Freq").val("");


    });
  

//Next set up a snapshot so that it will update the DOM if the data changes at any time 
    database.ref().on("child_added", function(snapshot) {
      console.log(snapshot.val().name);
      console.log(snapshot.val().destination);
      console.log(snapshot.val().start);
      console.log(snapshot.val().freq);
      // Change the HTML
$("#table").append("<tr><td>" + snapshot.val().name + "</td><td>" + snapshot.val().destination + "</td><td>" + snapshot.val().start + "</td><td>" + snapshot.val().freq) + "</td></tr>";
//Setup error handling 
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });