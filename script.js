// Display the current date at the top of the scheduler
function displayToday() {

    var today = moment();
    // Add the current day text to the `currentDay` id
    $("#currentDay").text(today.format('dddd, MMMM Do'));

}

// Set a global variable for the `currentHour`
var currentHour;

// Determine the current hour of the day
function currentHour() {

    currentHour = moment().hour();

}

displayToday();
currentHour();

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

$("saveBtn").on("click", function(event){

    event.preventDefault();

    var scheduleInfo = {
        savedHour: $(".scheduleInfo").attr("id"),
        userInput: $(".scheduleInfo").val()
    }

    console.log(scheduleInfo);

    scheduleData = JSON.stringify(scheduleInfo);

    localStorage.setItem("workSchedule", scheduleData);

});

for (var i = 9; i < 18; i++) {
    $("textarea").val(localStorage.getItem("hour-" + i));
}

// save object in an array to save in one key
// JSON.stringify()
// JSON.parse()

// OR save every hour in its own key

// go to click button to the same ID
// dom traversal, cliked button bubbling up, access from event.target
// how to go to access ID then use as value key to save correct value to correct storage