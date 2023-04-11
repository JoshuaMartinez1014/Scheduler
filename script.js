// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let hoursStandard = [
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

let timeRange;
let today = dayjs().format("dddd, MMMM D YYYY");
let currentHour = dayjs().format("HH ");
console.log(`today is: ${today}`);
console.log(`currentHour: ${currentHour}`);

let date = $("#currentDay");
date.text(today);

let div = $("<div>");

// Creates each row, with given id and class
for (let i = 0; i < hours.length; i++) {
  if (hours[i] < currentHour) {
    timeRange = "past";
    console.log(hours[i] + " past");
  } else if (hours[i] > currentHour) {
    timeRange = "future";
    console.log(hours[i] + " future");
  } else {
    timeRange = "present";
    console.log(hours[i] + " present");
  }

  $(".container-lg").append(`<div id="hour-${hours[i]}"></div>`);
  $(`#hour-${hours[i]}`)
    /* .attr("id", `hour-${hours[i]}`) */
    .attr("class", `row time-block ${timeRange}`);

  $(`#hour-${hours[i]}`)
    .append(
      `<div class="col-2 col-md-1 hour text-center py-3">${hoursStandard[i]} </div>`
    )
    .append(
      `<textarea class="col-8 col-md-10 description" rows="3"> </textarea>`
    ).append(`<button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>`);
}

// button click saves textarea
$(`button`).on("click", function (i) {
  if (this) {
    console.log($(this).prev().val());
    text = $(this).prev().val();
    localStorage.setItem(`#hour-${hours[i]}`, +"text");
  }
});


storage = {
  id = #hour-1,
  textvalue = decription
}