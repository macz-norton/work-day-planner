// Display the current date at the top of the scheduler
function displayToday() {

    var today = moment();
    // Add the current day text to the `currentDay` id
    $("#currentDay").text(today.format('dddd, MMMM Do'));
    console.log(today);

}

// Set a global variable for the `currentHour`
var currentHour;

// Determine the current hour of the day
function currentHour() {

    currentHour = moment().hour();

}

displayToday();
currentHour();
console.log(currentHour);

// Determine the current hour and update text area class
function checkHour() {

    for (var i = 9; i < 18; i++) {
        // For past timeblocks
        if (i < currentHour) {

            $("#hour-" + i).addClass("past");

        // For present timeblocks
        } else if (i = currentHour) {

            $("#hour-" + i).addClass("present");

        // For future timeblocks
        } else {

            $("#hour-" + i).addClass("future");

        }
        // get value out of local storage and assign to text area
    }
}

checkHour();

$("saveBtn").on("click", function(){

    var savedHour = $("").prev().attr("id");
    var userInput = $("description").prev().val();

    localStorage.setItem(savedHour, userInput);

});


$("main").on("click") {

    localStorage.getItem("schedule9am", "")

}

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// save object in an array to save in one key
// JSON.stringify()
// JSON.parse()

// OR save every hour in its own key

// go to click button to the same ID
// dom traversal, cliked button bubbling up, access from event.target
// how to go to access ID then use as value key to save correct value to correct storage