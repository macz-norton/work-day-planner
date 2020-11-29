// Display the current date at the top of the scheduler
var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'));

// Set a global variable for the `currentHour`
var currentHour;
currentHour = moment().hour();

// Save `savedHour` and `userInput` in local storage
$(".saveBtn").on("click", function(event) {

    event.preventDefault();

    var savedHour =  $(this).siblings("textarea").attr("id");
    var userInput = $(this).siblings("textarea").val();

    localStorage.setItem(savedHour, userInput);

});

// Determine the current hour and update text area class

for (var i = 9; i < 18; i++) {
    // For past timeblocks
    if (i < currentHour) {

        $("#hour-" + i).addClass("past");

    // For present timeblocks
    } else if (i === currentHour) {

        $("#hour-" + i).addClass("present");

    // For future timeblocks
    } else {

        $("#hour-" + i).addClass("future");

    }
}

// Get `workData` out of local storage and assign to text area
for (var i = 9; i < 18; i++) {

    var workData = localStorage.getItem("hour-" + i);
    console.log(workData);

    $("#hour-" + i).text(workData);

    if ($("#hour-" + i).text() == null) {
        $("#hour-" + i).text().empty();
    }
}

// Reload the page and clear the planner's saved events
$(".clearStorage").on("click", function(event) {

    localStorage.clear();
    location.reload();

});