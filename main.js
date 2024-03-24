const date = new Date()
const day = Date().toString().split(" ");
console.log(day[2]);

let cell = document.querySelectorAll('th')

// on click of each cell, get the corresponding to-do list for that day.
// need button for create task, remove task, edit task. also need checkbox
// if all tasks for that day were checked, mark that day with a green box, red if not
// need the correct number of dates for the month
// implement localstorage