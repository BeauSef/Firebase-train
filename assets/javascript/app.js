$(document).ready(function () {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCFKBiuWbMJc5mT_mr9p_Tjk27zgSedbmQ",
        authDomain: "trainschedule-bd630.firebaseapp.com",
        databaseURL: "https://trainschedule-bd630.firebaseio.com",
        projectId: "trainschedule-bd630",
        storageBucket: "trainschedule-bd630.appspot.com",
        messagingSenderId: "215121461101"
    };
    firebase.initializeApp(config);

    // variables
    var trainData = firebase.database();

    var name = "";
    var destination = "";
    var firstTrain = "";
    var frequency = "";
    var currentTime = moment();
    var trainTime = moment(firstTrain, "HH:mm")
    var timeDifference = moment().diff(moment(firstTrain), "minutes")




    // Creating my on click for submit
    $("#add-train").on("click", function (event) {
        event.preventDefault();

        name = $("#trainName").val().trim();
        destination = $("#destination").val().trim();
       firstTrain = $("#firstTrain").val().trim();
        frequency = $("#frequency").val().trim();
        // Console logs what the user inputs
        console.log(name);
        console.log(destination);
        console.log(firstTrain);
        console.log(frequency);


        // This is what will push to firebase
        trainData.ref().push({
            trainName: name,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    })
    // THis strats to append to your page
    trainData.ref().on("child_added", function (snapshot) {

        console.log(snapshot.val());

        var name = snapshot.val().trainName;
        var destination = snapshot.val().destination;
        var firstTrain = snapshot.val().firstTrain;
        var frequency = snapshot.val().frequency;

        // adding variables to call in html

        var firstTimeConverted = moment(firstTrain, "HH:mm").TIMESTAMP;
        console.log(firstTimeConverted);

        var currentTime = moment();
        console.log(currentTime);

        var timeNow = moment().format("HH:mm");

        var diffTime = moment().diff(firstTimeConverted,"minutes");
        console.log(diffTime);

        var trainRemainder = diffTime % frequency;
        console.log(trainRemainder);

        var trainMinutes = frequency - trainRemainder;
        console.log(trainMinutes);

        var nextTrain = currentTime.add(trainMinutes, "minutes" ).format("HH:mm");
        console.log(nextTrain);

        var minutesAway = trainRemainder % currentTime;
        console.log(minutesAway)    
     


        trainData.ref().push();

        // Grabs our table row
        var newRow = $("<tr>").append(
            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(timeNow),
            $("<td>").text(trainMinutes),
            $("<td>").text(firstTrain),
            $("<td>").text(minutesAway),
        )
        // Append the new row to the table
        $(".table > tbody").append(newRow)

    })

})

