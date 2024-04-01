const datePicker = document.querySelector('.datepicker');
const dateInput = document.querySelector('.date-input');
const cancelBtn = document.querySelector('.cancel');
const applyBtn = document.querySelector('.apply');
const dates = document.querySelector(".dates");


dateInput.addEventListener('click', () => {
    datePicker.hidden = false;
})

cancelBtn.addEventListener('click', () => {
    datePicker.hidden = false;
})

applyBtn.addEventListener('click', () => {
    datePicker.hidden = false;
})
// on click of each cell, get the corresponding to-do list for that day.
// need button for create task, remove task, edit task. also need checkbox
// if all tasks for that day were checked, mark that day with a green box, red if not
// need the correct number of dates for the month
// implement localstorage