// Display the current date at the top of the scheduler
var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'));

// Set a global variable for the `currentHour`
var currentHour;
currentHour = moment().hour();

$(".saveBtn").on("click", function(event) {

    event.preventDefault();

    var savedHour =  $(this).siblings("textarea").attr("id");
    var userInput = $(this).siblings("textarea").val();

    console.log(savedHour);
    console.log(userInput);

    localStorage.setItem(savedHour, userInput);

});

for (var i = 9; i < 18; i++) {

    var workData = localStorage.getItem("hour-" + i);
    console.log(workData);
    var workEvent = $("textarea").text(workData);
    $("#hour-${i}").text(workEvent);

    if ($("#hour-${i}").text(workEvent) == null) {
        $("#hour-${i}").text(" ");
    }
}

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
    // get value out of local storage and assign to text area
}