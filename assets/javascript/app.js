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
trainData = firebase.database();
var name = "";
var destination = "";
var firstTrain = "";
var frequency = "";
// Creating my on click for submit
$("#add-train").on("click", function (event) {
    event.preventDefault();

    trainData = firebase.database();
    name = $("#trainName").val().trim();
    destination = $("#destination").val().trim();
    firstTrain = $("#firstTrain").val().trim();
    frequency = $("#frequency").val().trim();

    trainData.ref().push()

    })

// Grab user inputs and then clear it out
// Create firebase event 
//make variable names for train name, destination, frequency, first train
// if train you looking for is after the moment else statement for the time to caculate arrival
//if/else
//examples lets say first train arrives at 3:00 frequency= 3 min and moment we entry is 3:16 then 16 % 3 =1     %=module
// frequency is 3-1 =2 which was the formula below moment= 3:16 + 2 = arrivial time 3:18
// if the first train is later then the current time set arrival to the first train time 
// if (currentTime === trainTime){
// arrival=trainTime; 3:30
// minutes=trainTime.diff(moment(), "minutes");
// }else {
// caculate the minutes until arrival usinig math 
// take the current time - the first trainTime
// var diffTime = moment().diff(trainTime, "minutes"); =16
// var nowTime = diffTIme % frequency;
//}

// lets say first train is 3:00 and frequency is 7 min and current time is 3:16 you would do 16 from the time of 3:00 and do 16 % 7 because it comes every 7 min frequency
