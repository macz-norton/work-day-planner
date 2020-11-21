// Display the current date at the top of the scheduler
var today = moment();
// Add the current day text to the `currentDay` id
$("#currentDay").text(today.format('dddd, MMMM Do'));
console.log(today);
// Set a global variable for the `currentHour`
var currentHour;
// Determine the current hour of the day
// function currentHour() {

currentHour = moment().hour();

// }

// // Determine the current hour and update text area class

for (var i = 9; i < 18; i++) {
    // For past timeblocks
    console.log("The time: " + i);
    if (i < currentHour) {

        $("#hour-" + i).addClass("past");

    // For present timeblocks
    } else if (i === currentHour) {

        $("#hour-" + i).addClass("present");

    // For future timeblocks
    } else {

        $("#hour-" + i).addClass("future");

    }
    // get value out of local storage and assign to text area
}


// $("saveBtn").on("click", function(event){

//     event.preventDefault();

//     var scheduleInfo = {
//         savedHour: $(".scheduleInfo").attr("id"),
//         userInput: $(".scheduleInfo").val()
//     }

//     console.log(scheduleInfo);

//     scheduleData = JSON.stringify(scheduleInfo);

//     localStorage.setItem("workSchedule", scheduleData);

// });

// JSON.parse(scheduleInfo)

// document.onload = function() {

//     for (var i = 9; i < 18; i++) {
//         $("textarea").localStorage.getItem("hour-" + i);
//     }

// }

// dom traversal, cliked button bubbling up, access from event.target
// how to go to access ID then use as value key to save correct value to correct storage