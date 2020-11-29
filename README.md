# Workday Scheduler

## Description

The workday scheduler is a simple calendar application that allows the user to save events for each hour of the work day. The app runs in the browser and uses dynamically updated HTML and CSS powered by jQuery.

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

No installation required.

## Usage

When you open the planner, the current day displays at the top of the workday scheduler. The timeblocks represent standard business hours. 

### Tests

1. When you view timeblocks for the day, each timeblock is color coded to indicate where it is in the past (gray), present (red), or future (green).
2. When you click a timeblock, you can type an event.
3. When you click the save button for the timeblock, the text for that event is saved in local storage.
4. When you refresh the page, the saved events persist.
5. When you click the clear schedule button, the page reloads and the schedule's events clear.

This gif demonstrates the application functionality:
[A user clicks on the timeblocks of the color-coded schedule, edits, then saves the events]()

## Credits

* [Moment.js library](https://momentjs.com/)
* [jQuery API](https://api.jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
* [FontAwesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)

## License

None