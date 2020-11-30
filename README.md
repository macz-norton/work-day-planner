# Work Day Planner
![Last Commit](https://img.shields.io/github/last-commit/macz-norton/work-day-planner)

## Description

The work day planner is a simple calendar application that allows the user to save events for each hour of the work day. The app runs in the browser and uses dynamically updated HTML and CSS powered by jQuery.

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively.
```

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

No installation required.

## Usage

When you open the planner, the current day displays at the top of the work day planner. The timeblocks represent standard business hours. 
* Link to the deployed application: https://macz-norton.github.io/work-day-planner/
* Gif that demonstrates the application's functionality:
![A user clicks on the timeblocks of the color-coded planner, edits, then saves the events](https://user-images.githubusercontent.com/71162422/100556865-18d52780-325a-11eb-9c90-81c5ce5ab201.gif)

### Tests

1. When you view timeblocks for the day, each timeblock is color coded to indicate where it is in the past (gray), present (red), or future (green).
2. When you click a timeblock, you can type an event.
3. When you click the save button for the timeblock, the text for that event is saved in local storage.
4. When you refresh the page, the saved events persist.
5. When you click the clear planner button, the page reloads and the planner's events clear.

## Credits

* [Moment.js Library](https://momentjs.com/)
* [jQuery API](https://api.jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Google Fonts](https://fonts.google.com/)

## License

None