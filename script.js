

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

    for (var i = 9; i <= 17; i++) {
        if (i < currentHour) {

            $("#hour-" + i).attr("class", "past" )

        } else if (i = currentHour) {

            $("#hour-" + i).attr("class", "present" )

        } else {

            $("#hour-" + i).attr("class", "future" )

        }
    }
}

checkHour();

// save inputs in local storage
// take out information in local storage
// listens to click events on all buttons
// $("main").on("click") {

//     localStorage.getItem("schedule9am", "")

// }

// save object in an array to save in one key
// JSON.stringify()
// JSON.parse()

// OR save every hour in its own key

// go to click button to the same ID
// dom traversal, cliked button bubbling up, access from event.target
// how to go to access ID then use as value key to save correct value to correct storage