const datePicker = document.querySelector('.datepicker');
const dateInput = document.querySelector('.date-input');
const cancelBtn = document.querySelector('.cancel');
const applyBtn = document.querySelector('.apply');
const dates = document.querySelector('.dates');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const yearInput = document.querySelector('.year-input');
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

dateInput.addEventListener('click', () => {
    datePicker.hidden = false;
})

cancelBtn.addEventListener('click', () => {
    datePicker.hidden = false;
})

applyBtn.addEventListener('click', () => {
    datePicker.hidden = false;
})

prev.addEventListener('click', () => {
    yearInput.value = parseInt(yearInput.value) - 1;
})

next.addEventListener('click', () => {
    yearInput.value = parseInt(yearInput.value) + 1;
})

const displayDates = () => {
    dates.innerHTML = "";
    
    const lastOfPrevMonth = new Date(year, month, 0);

    console.log(lastOfPrevMonth);

    const lastOfMonth = new Date(year, month + 1, 0);

    for (let i = 1; i <= lastOfMonth.getDate(); i++) {
        const button = createButton(i, false, false);
        dates.appendChild(button);
    }
};

const createButton = (text, isDisabled = false, isToday = false) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.disabled = isDisabled;
    button.classList.toggle('today', isToday);
    return button;
};

displayDates();

// on click of each cell, get the corresponding to-do list for that day.
// need button for create task, remove task, edit task. also need checkbox
// if all tasks for that day were checked, mark that day with a green box, red if not
// need the correct number of dates for the month
// implement localstorage